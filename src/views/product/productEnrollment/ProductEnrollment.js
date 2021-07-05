import React, { useState, useEffect } from "react";
import { CCard, CButton } from "@coreui/react";
import { Descriptions, Input, Select, Checkbox, PageHeader } from "antd";
import Dropzone from "react-dropzone";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { EditableTagGroup } from "../productSale/EditableTagGroup";
import axios from "axios";
import { Form, Button } from "antd";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "src/views/pages/login/Login";

const ProductEnrollment = (props) => {
  const user = useSelector((state) => state.user);
  useEffect(() => {
    axios.get("http://localhost:3065/v1/categories").then((response) => {
      setCategories(response.data.data);
    });
  }, []);
  const { Option, OptGroup } = Select;
  const { TextArea } = Input;
  const [Title, setTitle] = useState("");
  const [CostPrice, setCostPrice] = useState(0);
  const [SalePrice, setSalePrice] = useState(0);
  const [Category, setCategory] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [Content, setContent] = useState("");
  const [Thumbnails, setThumbnails] = useState([]);
  const [Tags, setTags] = useState([]);
  const [Images, setImages] = useState([]);

  function onChange(e) {
    setTitle(e.target.value);
  }
  function costPriceHandler(e) {
    setCostPrice(e.target.value);
  }
  function salePriceHandler(e) {
    setSalePrice(e.target.value);
  }
  function onContentHandler(e) {
    setContent(e.target.value);
  }

  function onCategoryHandler(e) {
    setCategory(e);
  }

  const dropHandler = (files) => {
    let formData = new FormData();

    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("thumbnails", files[0]);
    // setThumbnails(formData.append("thumbnails", files[0]));
    setImages(formData);
    //axios
    // axios
    //   .post("http://localhost:3065/v1/products", formData, config)
    //   .then((response) => {
    //     console.log(12, response);
    //     setImages([...Images, response.data]);
    //   });
  };

  const deleteHandler = (image) => {
    const currentIndex = Thumbnails.indexOf(image);

    let newImages = [...Thumbnails];
    newImages.splice(currentIndex, 1);

    setThumbnails(newImages);
  };

  const updateTags = (newTags) => {
    setTags(newTags);
  };

  const onFinish = (files) => {
    let formData = new FormData();
    if (Images.length === 1) {
      formData.append("thumbnails", Images[0]);
    } else if (Images.length === 2) {
      formData.append("thumbnails", Images[0]);
      formData.append("thumbnails", Images[1]);
    }

    formData.append("title", Title);
    formData.append("content", Content);
    formData.append("cost_price", CostPrice);
    formData.append("sale_price", SalePrice);
    formData.append("category_ids", Category);
    formData.append("store_id", user.storeData.data.id);
    formData.append("tag_titles", Tags);
    console.log(Tags);
    axios
      .post("http://localhost:3065/v1/products", formData)
      .then((response) => {
        if (response.data.code === 201) {
          alert("상품이 등록되었습니다.");
          setTitle("");
          setContent("");
          setCostPrice("");
          setSalePrice("");
          setCategory("");
          setTags([]);
          // props.history.push("/productSale");
        } else {
          console.log("실패");
        }
      });
  };

  return (
    <>
      {user.storeData.data.name && user.storeData.data.name === "Error" ? (
        <div>로그인을 해주세요.</div>
      ) : (
        <Form
          onFinish={() => {
            onFinish(Images);
          }}
        >
          <CCard>
            <PageHeader title="작품 등록" className="site-page-header">
              <Descriptions bordered title="기본정보">
                <Descriptions.Item label="상품 이미지">
                  <div>
                    <label htmlFor="file">File</label>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(event) => {
                        const file = event.target.files;
                        setImages([...file]);
                      }}
                    />
                  </div>
                  {/* <div style={{ display: "flex" }}>
                  <Dropzone
                    onDrop={(files) => {
                      // console.log(files);
                      setImages([...files]);
                      console.log(11, ...Images);
                    }}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <section>
                        <div
                          style={{
                            width: 300,
                            height: 240,
                            border: "1px solid lightgray",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          {...getRootProps()}
                        >
                          <input {...getInputProps()} />
                          <PlusOutlined
                            type="plus"
                            style={{ fontSize: "3rem" }}
                          />
                        </div>
                      </section>
                    )}
                  </Dropzone>

                  <div
                    style={{
                      display: "flex",
                      width: "350px",
                      height: "300px",
                      overflowX: "scroll",
                    }}
                  >
                    {Images &&
                      Images.map((image, index) => (
                        <div onClick={() => deleteHandler(image)} key={index}>
                          <img
                            style={{
                              minWidth: "300px",
                              width: "300px",
                              height: "240px",
                            }}
                            src={image}
                            alt=""
                          />
                        </div>
                      ))}
                  </div>
                </div> */}
                </Descriptions.Item>

                <br />
                <br />

                <Descriptions.Item label="상품명">
                  <TextArea
                    showCount
                    maxLength={30}
                    onChange={onChange}
                    style={{ width: "50%" }}
                  />
                </Descriptions.Item>
                <br />
                <br />
                <Descriptions.Item label="정상 가격">
                  <Input
                    type="number"
                    style={{ width: "20%" }}
                    defaultValue=""
                    onChange={costPriceHandler}
                  />
                  &nbsp;&nbsp;원
                </Descriptions.Item>
                <br />
                <br />
                <Descriptions.Item label="할인 가격">
                  <Input
                    type="number"
                    style={{ width: "20%" }}
                    defaultValue=""
                    onChange={salePriceHandler}
                  />
                  &nbsp;&nbsp;원
                </Descriptions.Item>
                <br />
                <br />

                <Descriptions.Item label="카테고리">
                  <Select
                    // defaultValue=""
                    style={{ width: 200 }}
                    onChange={onCategoryHandler}
                  >
                    {Categories &&
                      Categories.map((item, index) => (
                        <OptGroup label="category" key={index}>
                          <Option value={item.id}>{item.name}</Option>
                        </OptGroup>
                      ))}
                  </Select>
                </Descriptions.Item>
                <br />
                <br />

                <Descriptions.Item label="작품 설명">
                  <TextArea
                    rows={4}
                    showCount
                    placeholder="작품 설명 입력"
                    maxLength="1000"
                    onChange={onContentHandler}
                  />
                </Descriptions.Item>
                <br />
                <br />
                {/* <Descriptions.Item label="수령 방법">
<Checkbox onChange={onChange}>매장방문</Checkbox>
<Checkbox onChange={onChange}>퀵 서비스</Checkbox>
</Descriptions.Item> */}

                {/* <Descriptions.Item label="배송 옵션">
<section>
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
  }}
>
  <span>퀵 서비스 선택 시에만 적용합니다.</span>
  <Button type="primary">+ 옵션 추가</Button>
</div>
</section>
<br />
<section>
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
  }}
>
  <span>옵션1</span>
  <Input style={{ width: "40%" }} defaultValue="" />
  <span>추가금액</span>
  <Input style={{ width: "40%" }} defaultValue="" />
  <Button type="danger">삭제</Button>
</div>
</section>
</Descriptions.Item> */}
                <br />
                <br />
                <br />
                <Descriptions.Item label="키워드 등록">
                  <EditableTagGroup refreshFunction={updateTags} />
                  <br />
                  <span style={{ color: "gray", fontSize: "10px" }}>
                    띄어쓰기, 문장, 기호, 특수문자를 사용한 등록이 불가능합니다.
                  </span>
                </Descriptions.Item>
              </Descriptions>
              <br />
              <div style={{}}>
                <CButton color="info" className={"mb-1"}>
                  취소
                </CButton>
                &nbsp;&nbsp;&nbsp;
                {/* <CButton
        color="danger"
        className={"mb-1"}
        onClick={onSubmitHandler}
        type="submit"
      >
        저장
      </CButton> */}
                <Button type="primary" htmlType="submit">
                  저장
                </Button>
              </div>
            </PageHeader>
          </CCard>
        </Form>
      )}
    </>
  );
};

export default withRouter(ProductEnrollment);
