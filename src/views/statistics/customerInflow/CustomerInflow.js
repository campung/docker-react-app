import React from "react";
import { CCard, CCardBody, CCardHeader, CRow, CCardGroup } from "@coreui/react";
import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea,
} from "@coreui/react-chartjs";

const CustomerInflow = () => {
  return (
    <CCardGroup columns className="cols-2">
      <CCard>
        <CCardHeader>
          <h2>고객 유입 현황</h2>
        </CCardHeader>
        <CCardBody>
          <CChartLine
            datasets={[
              {
                label: "내 상품을 즐겨찾기 한 사람",
                backgroundColor: "rgb(0,216,255,0.9)",
                data: [39, 80, 40, 35, 40, 20, 45],
              },
            ]}
            options={{
              tooltips: {
                enabled: true,
              },
            }}
            labels="months"
          />

          {/* antd 필요 */}
        </CCardBody>
      </CCard>
    </CCardGroup>
  );
};

export default CustomerInflow;
