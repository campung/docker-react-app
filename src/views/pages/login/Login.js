import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../actions/user_action";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const [storeName, setStoreName] = useState("");
  const [password, setPassword] = useState("");

  const onNameHandler = (e) => {
    setStoreName(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      name: storeName,
      password: password,
    };

    dispatch(loginUser(body)).then((response) => {
      // const accessToken = response.payload.data.access_token;
      // window.localStorage.setItem("accessToken", accessToken);
      // axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      if (response.payload.data) {
        history.push("/");
      } else {
        alert("로그인 실패");
      }
    });
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              {/* text-white bg-primary py-5 d-md-down-none */}
              <CCard className="p-4 bg-light">
                <CCardBody>
                  <CForm>
                    {/* <h1>Login</h1> */}
                    <CImg
                      src={"avatars/flowing_logo.svg"}
                      // height={100}
                      alt=""
                      style={{ color: "black" }}
                    />
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="스토어명"
                        autoComplete="username"
                        value={storeName}
                        onChange={onNameHandler}
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
                        placeholder="비밀번호"
                        autoComplete="current-password"
                        value={password}
                        onChange={onPasswordHandler}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton
                          color="primary"
                          className="px-4"
                          onClick={onSubmitHandler}
                        >
                          로그인
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h1>Flowing</h1>

                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default withRouter(Login);
