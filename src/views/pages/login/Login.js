import React, { useState } from "react";
import { withRouter } from "react-router-dom";
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
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://cdn.crowdpic.net/list-thumb/thumb_l_AB39C9492F238ABEC224F87B64779D17.jpg");
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  font-weight: 400;
`;
const Wrapper = styled.div`
  width: 450px;
  margin: auto;
  /* background: rgba(0, 0, 0, 0.75); */

  background: "0xFFb6a0ff ";
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all 0.3s;
`;

const LoginButton = styled.div`
  color: white;
`;

const Login = () => {
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
    <Container>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="4">
            <CCardGroup>
              {/* text-white bg-primary py-5 d-md-down-none */}
              <CCard className="p-3">
                <CCardBody>
                  <CForm>
                    Logo
                    <CImg
                      src={"avatars/flowing_logo.svg"}
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
                          className="px-4"
                          onClick={onSubmitHandler}
                          style={{
                            backgroundColor: "red",
                            borderColor: "red",
                          }}
                        >
                          <LoginButton>로그인</LoginButton>
                        </CButton>
                      </CCol>
                      {/* <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard
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
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </Container>
  );
};

export default withRouter(Login);
