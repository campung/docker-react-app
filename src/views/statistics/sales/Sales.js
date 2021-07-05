import React from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardGroup,
  CButton,
  CDataTable,
} from "@coreui/react";
import { CChartBar } from "@coreui/react-chartjs";


const Sales = () => {
  const fields = [
    "판매날짜",
    "판매수",
    "상품금액",
    "옵션(배송비)",
    "매출 금액",
  ];

  return (
    <CCardGroup columns className="cols-2">
      <CCard>
        <CCardHeader>
          <h2>매출</h2>
        </CCardHeader>
        <CCardBody>
          <CChartBar
            datasets={[
              {
                label: "주문현황",
                backgroundColor: "#f87979",
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
              },
            ]}
            labels="months"
            options={{
              tooltips: {
                enabled: true,
              },
            }}
          />
        </CCardBody>
      </CCard>
      <CCardBody>
        <CCard>
          <CCardHeader>
            <h2>날짜별 매출 상세 현황</h2>
          </CCardHeader>

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
        </CCard>
      </CCardBody>
    </CCardGroup>
  );
};

export default Sales;
