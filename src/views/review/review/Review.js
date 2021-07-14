import React, { useState } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import { Table, Button } from "antd";
import { useSelector } from "react-redux";
import "antd/dist/antd.css";

const Review = () => {
  const user = useSelector((state) => state.user);

  // const columns = [
  //   { title: "NO.", dataIndex: "id", key: "id" },
  //   { title: "작성일자", dataIndex: "title", key: "title" },
  //   { title: "상품명", dataIndex: "cost_price", key: "cost_price" },
  //   { title: "작성자", dataIndex: "sale_price", key: "sale_price" },
  //   { title: "별점", dataIndex: "favorite_count", key: "favorite_count" },
  //   { title: "사진", dataIndex: "favorite_count", key: "favorite_count" },
  //   { title: "내용", dataIndex: "favorite_count", key: "favorite_count" },
  //   {
  //     title: "",
  //     dataIndex: "",
  //     key: "x",
  //     render: () => <Button>답글</Button>,
  //   },
  // ];

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Address", dataIndex: "address", key: "address" },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      // render: () => <a>Delete</a>,
    },
  ];

  const data = [
    {
      key: 1,
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
    {
      key: 2,
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      description:
        "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
    },
    {
      key: 3,
      name: "Not Expandable",
      age: 29,
      address: "Jiangsu No. 1 Lake Park",
      description: "This not expandable",
    },
    {
      key: 4,
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      description:
        "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.",
    },
  ];

  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
            <h1>댓글</h1>
          </CCardHeader>
          <CCardBody>
            {/* <Table
              columns={columns}
              expandable={{
                expandedRowRender: (record) => {
                  console.log(9, record.id);
                  <p style={{ margin: 0 }}>{record.id}</p>;
                },
                rowExpandable: (record) => record.id !== "Not Expandable",
              }}
              dataSource={data}
            /> */}
            <Table
              columns={columns}
              expandable={{
                expandedRowRender: (record) => (
                  // <p style={{ margin: 0 }}>{record.description}</p>
                  <>
                    <p>땡땡 플라워</p>
                    <span>내용입니다.</span>
                    <br />
                    <textarea /> <button>등록</button>
                  </>
                ),
                rowExpandable: (record) => record.name !== "Not Expandable",
              }}
              dataSource={data}
            />

            {/* <Table
              columns={columns}
              // dataSource={products}
              scroll={{ x: 700 }}
            /> */}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Review;
