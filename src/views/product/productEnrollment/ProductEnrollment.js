import React from "react";
import { CCard } from "@coreui/react";
import { Descriptions, PageHeader, Input, Select, Button } from "antd";
import Dropzone from "react-dropzone";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

const ProductEnrollment = () => {
  const { Option } = Select;
  const { TextArea } = Input;

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }
  const dropHandler = (files) => {
    let formData = new FormData();

    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);

    //axios
  };
  return (
    <>
      <CCard>
        <PageHeader title="작품 등록" className="site-page-header">
          <Descriptions bordered title="기본정보">
            <Descriptions.Item label="상품 이미지" span={3}>
              <Dropzone onDrop={dropHandler}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div
                      style={{
                        width: 100,
                        height: 120,
                        border: "1px solid lightgray",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      {...getRootProps()}
                    >
                      <input {...getInputProps()} />
                      <PlusOutlined type="plus" style={{ fontSize: "3rem" }} />
                    </div>
                  </section>
                )}
              </Dropzone>
            </Descriptions.Item>
            <Descriptions.Item label="상품명" span={3}>
              <Input
                placeholder="상품명 입력"
                size="large"
                style={{ width: "500px" }}
              />
            </Descriptions.Item>
            <Descriptions.Item label="정상 가격" span={2}>
              <Input
                placeholder="숫자만 입력"
                size="large"
                style={{ width: "500px" }}
                type="number"
              />
              &nbsp;원
            </Descriptions.Item>
            <Descriptions.Item label="할인 가격">
              <Input
                placeholder="숫자만 입력"
                size="large"
                style={{ width: "500px" }}
                type="number"
              />
              &nbsp;원
            </Descriptions.Item>
            <Descriptions.Item label="카테고리" span={3}>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="선택"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Descriptions.Item>
            <Descriptions.Item label="작품설명" span={3}>
              {/* CKEditor 사용예정 */}
              <TextArea
                rows={4}
                placeholder="작품 설명 입력"
                maxLength="1000"
              />
            </Descriptions.Item>
            <Descriptions.Item label="수령방법" span={3}>
              <Checkbox />
              &nbsp; 매장방문
              <Checkbox />
              &nbsp; 퀵 서비스
            </Descriptions.Item>
            <Descriptions.Item label="배송옵션" span={3}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <span style={{ color: "lightgrey" }}>
                  퀵 서비스 선택 시에만 적용됩니다.
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button>옵션 추가</Button>
              </div>
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span>옵션1</span>
                  <Input placeholder="옵션명 입력" style={{ width: "300px" }} />
                </div>
                <div>
                  <span>추가 금액</span>
                  <Input
                    placeholder="숫자만 입력"
                    type="number"
                    style={{ width: "300px" }}
                  />
                  원
                </div>
              </div>
            </Descriptions.Item>
            <Descriptions.Item label="키워드 등록" span={3}>
              <Input style={{ width: "300px" }} />
              <Button>추가</Button>
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </CCard>
    </>
  );
};

export default ProductEnrollment;
