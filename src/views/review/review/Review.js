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

const Review = () => {
  const fields = [
    "id",
    "작성일자",
    "상품명",
    "작성자",
    "별점",
    "사진",
    "내용",
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
            <h1>리뷰</h1>
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
                      답글
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

export default Review;
