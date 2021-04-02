import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CDataTable,
  CButton,
  CCollapse,
} from "@coreui/react";
import { Input } from "antd";
import usersData from "../../users/UsersData";

const Review = () => {
  const [collapse, setCollapse] = useState(false);
  const [btnId, setBtnId] = useState(null);
  const [details, setDetails] = useState([]);
  const { TextArea } = Input;
  const fields = [
    "id",
    "작성일자",
    "상품명",
    "작성자",
    "별점",
    "사진",
    "내용",
    {
      key: "show_details",
      label: "",
      _style: { width: "10" },
      sorter: false,
      filter: false,
    },
  ];

  const onBtn = (item) => {
    setBtnId(item);
    setCollapse(!collapse);
  };

  const onExited = () => {
    setCollapse(!collapse);
  };
  const toggleDetails = (index) => {
    console.log(11, details);
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    console.log(newDetails);
    setDetails(newDetails);
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
              items={usersData}
              fields={fields}
              itemsPerPage={15}
              pagination
              scopedSlots={{
                // "": (item) => (
                //   <td>
                //     <CButton color="info" onClick={() => onBtn(item.id)}>
                //       답글
                //     </CButton>
                //     <CCol>
                //       <CCollapse show={collapse}>
                //         <CCard>
                //           <CCardBody>
                //             Anim pariatur cliche reprehenderit, enim eiusmod
                //             high life accusamus terry richardson ad squid.Nihil
                //             anim keffiyeh helvetica, craft beer labore wes
                //             anderson cred nesciunt sapiente ea proident.
                //           </CCardBody>
                //         </CCard>
                //       </CCollapse>
                //     </CCol>
                //   </td>
                // ),
                show_details: (item, index) => {
                  return (
                    <td className="py-1">
                      <CButton
                        color="info"
                        size="sm"
                        onClick={() => {
                          toggleDetails(index);
                        }}
                      >
                        {details.includes(index) ? "접기" : "답글"}
                      </CButton>
                    </td>
                  );
                },
                details: (item, index) => {
                  return (
                    <CCollapse show={details.includes(index)}>
                      <CCardBody>
                        <h4>{item.username}</h4>
                        <p className="text-muted">
                          {/* OO플라워 {item.registered} */}
                          OO플라워 <span>2021-09-07</span>
                        </p>
                        <p>감사합니다~</p>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-end",
                          }}
                        >
                          <div>
                            <TextArea
                              rows={4}
                              cols={100}
                              showCount
                              placeholder="답글 입력"
                              maxLength="1000"
                              size="large"
                              // onChange={onChange}
                            />
                          </div>
                          <div>
                            <CButton
                              size="sm"
                              color="danger"
                              className="ml-1"
                              style={{ marginBottom: "5px" }}
                            >
                              등록
                            </CButton>
                          </div>
                        </div>
                      </CCardBody>
                    </CCollapse>
                  );
                },
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Review;
