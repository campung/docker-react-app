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
import usersData from "../../users/UsersData";

const ProductSale = () => {
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
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
            <h1>판매중</h1>
          </CCardHeader>
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

export default ProductSale;
