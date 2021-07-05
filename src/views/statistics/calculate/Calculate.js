import React from "react";
import { CCard, CCardBody, CCardHeader, CCardGroup } from "@coreui/react";
import "antd/dist/antd.css";
import { DatePicker, Space } from "antd";
import moment from "moment";

const Calculate = () => {
  const dateFormat = "YYYY/MM/DD";
  return (
    <CCardGroup columns className="cols-2">
      <CCard>
        <CCardHeader>
          <h2>정산</h2>
        </CCardHeader>
        <CCardBody>
          <section>
            <div>
              <span>정산일자</span> -&nbsp;
              <Space direction="vertical" size={12}>
                <DatePicker
                  defaultValue={moment("2015/01/01", dateFormat)}
                  format={dateFormat}
                />
              </Space>
            </div>
          </section>
        </CCardBody>
      </CCard>
    </CCardGroup>
  );
};

export default Calculate;
