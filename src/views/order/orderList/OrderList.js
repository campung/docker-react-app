import React from "react";

import {
  CButton,
  CCardBody,
  CCardHeader,
  CCard,
  CCol,
  CRow,
  CWidgetSimple,
  CDataTable,
} from "@coreui/react";
import usersData from "../../users/UsersData"; //테이블 더미 데이터 추후에 수정해야함

const OrderList = () => {
  // const fields = ["name", "registered", "role", "status"];
  const fields = [
    "id",
    "상품명",
    "결제일시",
    "주문자 정보",
    "수량",
    "결제금액",
    "주문상태",
    "수령방법",
    "status",
  ];
  const getBadge = (status) => {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "secondary";
      case "Pending":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };
  return (
    <>
      <CCard>
        <CCardHeader>주문리스트</CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm="4" lg="2">
              <CWidgetSimple header="주문 완료" text="2"></CWidgetSimple>
            </CCol>
            <CCol sm="4" lg="2">
              <CWidgetSimple header="방문 완료" text="0"></CWidgetSimple>
            </CCol>
            <CCol sm="4" lg="2">
              <CWidgetSimple header="배송 완료" text="0"></CWidgetSimple>
            </CCol>
            <CCol sm="4" lg="2">
              <CWidgetSimple header="취소 요청" text="0"></CWidgetSimple>
            </CCol>
            <CCol sm="4" lg="2">
              <CWidgetSimple header="환불 요청" text="0"></CWidgetSimple>
            </CCol>
            <CCol sm="4" lg="2">
              <CWidgetSimple header="환불 완료" text="0"></CWidgetSimple>
            </CCol>
            {/* <CCol sm="4" lg="2">
              <CWidgetSimple header="환불 거부" text="0"></CWidgetSimple>
            </CCol> */}
          </CRow>
        </CCardBody>
        <CCardBody>
          <CDataTable
            style={{ border: "1px solid red" }}
            items={usersData}
            fields={fields}
            itemsPerPage={15}
            pagination
            scopedSlots={{
              status: (item) => (
                <td>
                  {/* <CBadge color={getBadge(item.status)}>{item.status}</CBadge> */}
                  <CButton
                    block
                    variant="outline"
                    color="danger"
                    // style={{ width: "50%" }}
                  >
                    자세히
                  </CButton>
                </td>
              ),
            }}
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default OrderList;
