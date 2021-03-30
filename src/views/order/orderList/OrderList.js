import React, { useState } from "react";

import {
  CButton,
  CCardBody,
  CCardHeader,
  CCard,
  CCol,
  CRow,
  CWidgetSimple,
  CDataTable,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import usersData from "../../users/UsersData"; //테이블 더미 데이터 추후에 수정해야함

const OrderList = () => {
  const [info, setInfo] = useState(false);
  const [btnId, setBtnId] = useState(0);
  const fields = [
    "id",
    "상품명",
    "결제일시",
    "주문자 정보",
    "수량",
    "결제금액",
    "주문상태",
    "수령방법",
    "",
  ];

  const onBtn = (item) => {
    console.log(item);
    setBtnId(item);
    setInfo(!info);
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
              "": (item) => (
                <td>
                  {/* <CBadge color={getBadge(item.status)}>{item.status}</CBadge> */}
                  <CButton color="info" onClick={() => onBtn(item.id)}>
                    자세히
                  </CButton>
                </td>
              ),
            }}
          />
          {btnId && (
            <CModal show={info} onClose={() => setInfo(!info)} color="info">
              <CModalHeader closeButton>
                <CModalTitle>배송업체 정보</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <span>배송입력</span>&nbsp;&nbsp;
                <input placeholder="배송업체 혹은 배송지 이름 입력" />
                <br />
                <br />
                <span>연락처</span>&nbsp;&nbsp;{" "}
                <input placeholder="숫자만 입력" />
              </CModalBody>
              <CModalFooter>
                <CButton color="secondary" onClick={() => setInfo(!info)}>
                  취소
                </CButton>
                <CButton color="info" onClick={() => setInfo(!info)}>
                  등록
                </CButton>{" "}
              </CModalFooter>
            </CModal>
          )}
        </CCardBody>
      </CCard>
    </>
  );
};

export default OrderList;
