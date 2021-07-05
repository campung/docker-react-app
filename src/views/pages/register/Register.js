import React, { useEffect, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import DaumPostcode from "react-daum-postcode";
import Dropzone from "react-dropzone";
import Icon from "@ant-design/icons";
import axios from "axios";

const Register = () => {
  const [address, setAddress] = useState(""); // 주소
  const [addressDetail, setAddressDetail] = useState(""); // 상세주소
  const [isOpenPost, setIsOpenPost] = useState(false);

  const onChangeOpenPost = () => {
    setIsOpenPost(!isOpenPost);
  };

  const onCompletePost = (data) => {
    console.log(11, data);
    let fullAddr = data.address;
    let extraAddr = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddr += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddr +=
          extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== "" ? ` (${extraAddr})` : "";
    }

    setAddress(data.zonecode);
    setAddressDetail(fullAddr);
  };
  useEffect(() => {
    return () => setIsOpenPost(false); // cleanup function을 이용
  }, []);

  const postCodeStyle = {
    display: "block",
    position: "relative",
    top: "0%",
    width: "400px",
    height: "400px",
    padding: "7px",
  };

  const dropHandler = (files) => {
    let formData = new FormData();

    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);

    // axios
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>

                  {/* dropzone */}
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Dropzone onDrop={dropHandler}>
                      {({ getRootProps, getInputProps }) => (
                        <section>
                          <div
                            style={{
                              width: 100,
                              height: 40,
                              border: "1px solid lightgray",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            {...getRootProps()}
                          >
                            <input {...getInputProps()} />
                            <Icon type="plus" style={{ fontSize: "3rem" }} />
                          </div>
                        </section>
                      )}
                    </Dropzone>
                  </div>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="스토어명"
                      autoComplete="store_name"
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText onClick={onChangeOpenPost}>
                        @
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      readOnly
                      type="text"
                      placeholder={addressDetail}
                      autoComplete="address"
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText onClick={onChangeOpenPost}>
                        @
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      readOnly
                      type="text"
                      placeholder="상세 주소"
                      autoComplete="address"
                    />
                  </CInputGroup>

                  {isOpenPost ? (
                    <DaumPostcode
                      style={postCodeStyle}
                      autoClose
                      onComplete={onCompletePost}
                    />
                  ) : null}

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="연락처"
                      autoComplete="phoneNumber"
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CButton color="success" block>
                    Create Account
                  </CButton>
                </CForm>
              </CCardBody>
              {/* <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block>
                      <span>facebook</span>
                    </CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block>
                      <span>twitter</span>
                    </CButton>
                  </CCol>
                </CRow>
              </CCardFooter> */}
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
