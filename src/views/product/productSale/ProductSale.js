import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Button, Table, Modal } from "antd";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductUpdate from "./ProductUpdate";

const ProductSale = (props) => {
  const user = useSelector((state) => state.user);

  const [products, setProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productCategory, setProductCategory] = useState([]);
  const [productContent, setProductContent] = useState("");
  const [productCostPrice, setProductCostPrice] = useState(0);
  const [productSalePrice, setProductSalePrice] = useState(0);
  const [productTags, setProductTags] = useState([]);

  useEffect(() => {
    //district_code 변경해야함
    axios
      .get(
        `/v1/products?page=1&rows=10&store_id=${user.storeData.id}&district_code=1111054000`
      )
      .then((response) => {
        setProducts(response.data.data);
      });
  }, []);

  //modal
  const showModal = (item) => {
    console.log("?", item);
    setIsModalVisible(true);
    axios.get(`/v1/products/${item}`).then((response) => {
      setProductCategory(response.data.data.categories);
      setProductContent(response.data.data.content);
      setProductCostPrice(response.data.data.cost_price);
      setProductSalePrice(response.data.data.sale_price);
      setProductTags(response.data.data.tags);
    });
  };
  //modal
  const handleOk = () => {
    setIsModalVisible(false);
  };
  //modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //수정
  const onClickHandler = () => {};

  //판매시작
  const onStartHandler = (item) => {
    let body = {
      use_yn: "Y",
    };

    axios
      .put(`/v1/products/${item}`, body)
      .then((response) => console.log("판매시작 성공", response));
  };

  //판매중지
  const onStopHandler = (item) => {
    console.log("zz", item);
    let body = {
      use_yn: "N",
    };

    axios
      .put(`/v1/products/${item}`, body)
      .then((response) => console.log("판매중지 성공", response));
  };

  // antd 시작
  const columns = [
    { title: "NO.", dataIndex: "id", key: "id" },
    { title: "상품명", dataIndex: "title", key: "title" },
    { title: "정상가", dataIndex: "cost_price", key: "cost_price" },
    { title: "할인가", dataIndex: "sale_price", key: "sale_price" },
    { title: "즐겨찾기", dataIndex: "favorite_count", key: "favorite_count" },
    {
      title: "상품수정",
      dataIndex: "",
      key: "x",
      render: (record) => {
        return (
          <>
            {/* <Button type="primary" onClick={() => showModal(record.id)}>
              수정
            </Button>
            <Modal
              title="상품 수정"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <ProductUpdate
                categories={productCategory}
                content={productContent}
                cost_price={productCostPrice}
                sale_price={productSalePrice}
                tags={productTags}
              />
            </Modal> */}
            <Link
              to={{
                pathname: "/product/productUpdate",
                state: {
                  record,
                },
              }}
            >
              수정
            </Link>
          </>
        );
      },
    },
    {
      title: "판매여부",
      dataIndex: "",
      key: "x",
      render: (record) => {
        return (
          <>
            {products &&
              products.map((item) => {
                if (item.id !== record.id) {
                  return null;
                } else {
                  if (item.use_yn === "Y") {
                    return (
                      <Button danger onClick={() => onStopHandler(item.id)}>
                        중지
                      </Button>
                    );
                  } else {
                    return (
                      <Button
                        type="primary"
                        onClick={() => onStartHandler(item.id)}
                      >
                        시작
                      </Button>
                    );
                  }
                }
              })}
          </>
        );
      },
    },
  ];

  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
            <h1>판매중</h1>
          </CCardHeader>
          <CCardBody>
            {/* <Table
              columns={columns}
              expandable={{
                expandedRowRender: (record) => {
                  console.log(9, record.id);
                  <p style={{ margin: 0 }}>{record.id}</p>;
                },
                rowExpandable: (record) => record.id !== "Not Expandable",
              }}
              dataSource={products}
            /> */}

            <Table
              columns={columns}
              dataSource={products}
              scroll={{ x: 700 }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default ProductSale;
