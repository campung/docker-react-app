import React from "react";
import {
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CLabel,
  CSelect,
  CRow,
  CCardFooter,
  CButton,
  CCard
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const ProductEnrollment = () => {
  return (
    <CCard>
      <CRow>
        <CCol xs="12" md="6">
          <CCardHeader>
            작품 등록
            <small> 기본정보</small>
          </CCardHeader>
          <CCardBody>
            <CForm
              action=""
              method="post"
              encType="multipart/form-data"
              className="form-horizontal"
            >
              <CFormGroup row>
                <CCol md="3">
                  <CLabel>상품 이미지</CLabel>
                </CCol>
                <CCol xs="9" md="9">
                  <CInputFile
                    id="file-multiple-input"
                    name="file-multiple-input"
                    multiple
                    custom
                  />
                  <CLabel htmlFor="file-multiple-input" variant="custom-file">
                    Choose Files...
                  </CLabel>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">상품명</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="text-input"
                    name="text-input"
                    placeholder="30자 제한"
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="email-input">정상가격</CLabel>
                </CCol>
                <CCol xs="6" md="6">
                  <CInput
                    type="number"
                    id="text-input"
                    name="text-input"
                    placeholder="숫자만 입력"
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="email-input">할인가격</CLabel>
                </CCol>
                <CCol xs="6" md="6">
                  <CInput
                    type="number"
                    id="text-input"
                    name="text-input"
                    placeholder="숫자만 입력"
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="selectLg">카테고리</CLabel>
                </CCol>
                <CCol xs="12" md="9" size="lg">
                  <CSelect custom size="lg" name="selectLg" id="selectLg">
                    <option value="0">Please select</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </CSelect>
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="textarea-input">작품 설명</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CTextarea
                    name="textarea-input"
                    id="textarea-input"
                    rows="9"
                    placeholder="Content..."
                  />
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel>수령방법</CLabel>
                </CCol>
                <CCol md="9">
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox
                      custom
                      id="inline-checkbox1"
                      name="inline-checkbox1"
                      value="option1"
                    />
                    <CLabel
                      variant="custom-checkbox"
                      htmlFor="inline-checkbox1"
                    >
                      매장방문
                    </CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox
                      custom
                      id="inline-checkbox2"
                      name="inline-checkbox2"
                      value="option2"
                    />
                    <CLabel
                      variant="custom-checkbox"
                      htmlFor="inline-checkbox2"
                    >
                      퀵 서비스
                    </CLabel>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary">
              <CIcon name="cil-scrubber" /> Submit
            </CButton>
            <CButton type="reset" size="sm" color="danger">
              <CIcon name="cil-ban" /> Reset
            </CButton>
          </CCardFooter>
        </CCol>
      </CRow>
    </CCard>
  );
};

export default ProductEnrollment;
