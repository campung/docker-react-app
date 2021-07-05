import React from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CDataTable,
  CButton,
} from "@coreui/react";


const Cards = () => {
  const fields = [
    "id",
    "상품명",
    "정상가",
    "할인가",
    "즐겨찾기",
    "구매후기",
    "조회수",
    "판매수",
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
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
            <h1>판매일시 중지</h1>
          </CCardHeader>
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
                      block
                      variant="outline"
                      color="danger"
                      // style={{ width: "50%" }}
                    >
                      수정
                    </CButton>
                  </td>
                ),
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Cards;
