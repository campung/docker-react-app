import React, { useState } from "react";
import "antd/dist/antd.css";
import { Descriptions, Button } from "antd";

import {
  CButton,
  CCardBody,
  CCardHeader,
  CCard,
  CCol,
  CRow,
  CWidgetSimple,
  CDataTable,
  CCollapse,
} from "@coreui/react";
import usersData from "../../users/UsersData"; //테이블 더미 데이터 추후에 수정해야함

const OrderList = () => {
  const [collapse, setCollapse] = useState(false);

  const [btnId, setBtnId] = useState(null);
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
    setBtnId(item);
    setCollapse(!collapse);
  };

  const onEntering = () => {};
  const onEntered = () => {};
  const onExiting = () => {};
  const onExited = () => {};

  return (
    <>
      <CCard>
        <CCardHeader>
          <h1>주문리스트</h1>
        </CCardHeader>
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
          <hr />
          <hr />
          {btnId && (
            <CCard>
              <CCollapse
                show={collapse}
                onEntering={onEntering}
                onEntered={onEntered}
                onExiting={onExiting}
                onExited={onExited}
              >
                <CCardHeader>
                  <h1>주문 정보 자세히</h1>
                </CCardHeader>
                <CCardBody>
                  {/* 상품 주문정보 */}
                  <Descriptions
                    bordered
                    title="상품 주문 정보"
                    extra={<Button type="primary"></Button>}
                  >
                    <Descriptions.Item label="결제 일시">
                      2021-02-02 14:02
                    </Descriptions.Item>
                    <Descriptions.Item label="주문 상태">
                      주문완료
                    </Descriptions.Item>
                    <br />

                    <Descriptions.Item label="주문 상품">
                      올리브 옐로우 따듯한 봄바람 꽃다발
                    </Descriptions.Item>
                    <Descriptions.Item label="주문 수량">1</Descriptions.Item>
                    <br />
                    <Descriptions.Item label="수령 방법">
                      퀵 배송
                    </Descriptions.Item>
                  </Descriptions>
                  <br />
                  {/* 주문자 정보 */}
                  <Descriptions
                    bordered
                    title="주문자 정보"
                    extra={<Button type="primary"></Button>}
                  >
                    <Descriptions.Item label="이름">홍길동</Descriptions.Item>
                    <Descriptions.Item label="연락처">
                      010-1234-5678
                    </Descriptions.Item>
                    <br />

                    <Descriptions.Item label="주소">
                      서울시 마포구 신수동 120 00건물 5층 123호
                    </Descriptions.Item>
                  </Descriptions>
                  <br />
                  {/* 받는 분(배송지) 정보 */}
                  <Descriptions
                    bordered
                    title="받는 분(배송지) 정보"
                    extra={<Button type="primary"></Button>}
                  >
                    <Descriptions.Item label="이름">홍길동</Descriptions.Item>
                    <Descriptions.Item label="연락처">
                      010-1234-5678
                    </Descriptions.Item>
                    <br />

                    <Descriptions.Item label="주소">
                      서울시 마포구 신수동 120 00건물 5층 123호
                    </Descriptions.Item>
                  </Descriptions>
                  <br />

                  {/* 결제 정보 */}
                  <Descriptions
                    bordered
                    title="결제 정보"
                    extra={<Button type="primary"></Button>}
                  >
                    <Descriptions.Item label="상품 금액">
                      25,000원
                    </Descriptions.Item>
                    <Descriptions.Item label="할인 금액">0원</Descriptions.Item>
                    <Descriptions.Item label="배송비">
                      10,000원
                    </Descriptions.Item>
                    <Descriptions.Item label="최종 결제 금액">
                      35,000원
                    </Descriptions.Item>
                    <Descriptions.Item label="결제 카드">
                      신용카드(국민)
                    </Descriptions.Item>
                  </Descriptions>
                </CCardBody>
              </CCollapse>
              {/* <CCardFooter>
                <CButton color="primary" onClick={toggle} className={"mb-1"}>
                  Toggle Collapse
                </CButton>
              </CCardFooter> */}
            </CCard>
          )}
        </CCardBody>
      </CCard>
    </>
  );
};

export default OrderList;
