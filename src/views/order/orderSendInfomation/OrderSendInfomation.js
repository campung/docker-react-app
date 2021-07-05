import React, { useState } from "react";
import {
  CButton,
  CCardBody,
  CCardHeader,
  CCard,
  CModal,
  CDataTable,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";


const OrderSendInfomation = () => {
  const [info, setInfo] = useState(false);

  const fields = [
    "id",
    "상품명",
    "수령방법",
    "주문자 정보",
    "주문상태",
    "발송정보",
    "status",
  ];
  return (
    <>
      <CCard>
        <CCardHeader>발송정보등록</CCardHeader>
        <CCardBody>
          <CDataTable
            style={{ border: "1px solid red" }}
            // items={usersData}
            fields={fields}
            itemsPerPage={15}
            pagination
            scopedSlots={{
              status: (item) => (
                <td>
                  {/* <CBadge color={getBadge(item.status)}>{item.status}</CBadge> */}
                  <CButton
                    color="info"
                    onClick={() => setInfo(!info)}
                    className="mr-1"
                  >
                    등록
                  </CButton>
                </td>
              ),
            }}
          />

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
        </CCardBody>
      </CCard>
    </>
  );
};

export default OrderSendInfomation;
