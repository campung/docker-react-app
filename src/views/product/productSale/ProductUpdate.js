import React, { useState } from "react";
import { Form, Button, Descriptions, Input, Select, PageHeader } from "antd";
import { CCard, CButton } from "@coreui/react";
import { EditableTagGroup } from "../productSale/EditableTagGroup";

const ProductUpdate = (props) => {
  const { location } = props;
  const { state } = location;

  const { TextArea } = Input;
  const { Option, OptGroup } = Select;

  const [Tags, setTags] = useState([]);

  //상세설명 수정
  const onTitleHandler = () => {};

  //정상가격 수정
  const onCostPriceHandler = () => {};

  //할인가격 수정
  const onSalePriceHandler = () => {};

  //카테고리 수정
  const onCategoryHandler = () => {};

  //상세설명 수정
  const onContentHandler = () => {};

  const updateTags = (newTags) => {
    setTags(...newTags);
  };
  return (
    <>
      {/* <span>{state.record.content}</span> */}

      <Form
      // onFinish={() => {
      //   onFinish(Images);
      // }}
      >
        <CCard>
          <PageHeader title="상품수정" className="site-page-header">
            <Descriptions bordered title="기본정보">
              <Descriptions.Item label="상품 이미지">
                <div>
                  {state.record.thumbnails.map((item) => {
                    console.log(item);
                    const test = `${item.url}`;
                    return (
                      <>
                        <img src={test} alt="" />
                      </>
                    );
                  })}
                </div>
              </Descriptions.Item>

              <br />
              <br />

              <Descriptions.Item label="상품명">
                <TextArea
                  showCount
                  maxLength={30}
                  onChange={onTitleHandler}
                  defaultValue={state.record.title}
                  style={{ width: "50%" }}
                />
              </Descriptions.Item>
              <br />
              <br />

              <Descriptions.Item label="정상 가격">
                <Input
                  type="number"
                  style={{ width: "20%" }}
                  defaultValue={state.record.cost_price}
                  onChange={onCostPriceHandler}
                />
                &nbsp;&nbsp;원
              </Descriptions.Item>
              <br />
              <br />

              <Descriptions.Item label="할인 가격">
                <Input
                  type="number"
                  style={{ width: "20%" }}
                  defaultValue={state.record.sale_price}
                  onChange={onSalePriceHandler}
                />
                &nbsp;&nbsp;원
              </Descriptions.Item>
              <br />
              <br />

              <Descriptions.Item label="카테고리">
                {state.record.categories.map((item, index) => {
                  return (
                    <Select
                      defaultValue={item.name}
                      style={{ width: 200 }}
                      onChange={onCategoryHandler}
                    >
                      <OptGroup label="category" key={index}>
                        <Option value={item.id}>{item.name}</Option>
                      </OptGroup>
                    </Select>
                  );
                })}
              </Descriptions.Item>
              <br />
              <br />

              <Descriptions.Item label="작품 설명">
                <TextArea
                  rows={4}
                  showCount
                  defaultValue={state.record.content}
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
              {state.record.tags.map((item, index) => {
                console.log(11, item);
                return (
                  <>
                    <Descriptions.Item label="키워드 등록">
                      <EditableTagGroup refreshFunction={updateTags} />
                      <br />
                      <span style={{ color: "gray", fontSize: "10px" }}>
                        띄어쓰기, 문장, 기호, 특수문자를 사용한 등록이
                        불가능합니다.
                      </span>
                    </Descriptions.Item>
                  </>
                );
              })}
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
    </>
  );
};

export default ProductUpdate;
