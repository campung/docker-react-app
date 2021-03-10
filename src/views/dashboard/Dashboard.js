import React from "react";
import { CCardGroup, CWidgetProgressIcon } from "@coreui/react";
import CIcon from "@coreui/icons-react";

const Dashboard = () => {
  return (
    <>
      <CCardGroup className="mb-4">
        <CWidgetProgressIcon header="주문 건 2" color="gradient-info">
          <CIcon name="cil-people" height="36" />
        </CWidgetProgressIcon>

        <CWidgetProgressIcon
          header="구매자 취소 요청 0"
          color="gradient-success"
        >
          <CIcon name="cil-userFollow" height="36" />
        </CWidgetProgressIcon>

        <CWidgetProgressIcon header="매장 취소 0" color="gradient-warning">
          <CIcon name="cil-basket" height="36" />
        </CWidgetProgressIcon>

        <CWidgetProgressIcon header="환불 요청 0">
          <CIcon name="cil-chartPie" height="36" />
        </CWidgetProgressIcon>
      </CCardGroup>
    </>
  );
};

export default Dashboard;
