import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "현황",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["주문"],
  },

  {
    _tag: "CSidebarNavItem",
    name: "주문리스트",
    to: "/order/orderList",
    icon: "cil-pencil",
  },
  {
    _tag: "CSidebarNavItem",
    name: "발송정보일괄등록",
    to: "/order/orderSendInfomation",
    icon: "cil-pencil",
  },

  {
    _tag: "CSidebarNavTitle",
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "상품",
    route: "/base",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "판매중",
        to: "/product/productSale",
      },
      // {
      //   _tag: "CSidebarNavItem",
      //   name: "판매일시 중지",
      //   to: "/product/productPause",
      // },
      {
        _tag: "CSidebarNavItem",
        name: "작품 등록",
        to: "/product/productEnrollment",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "리뷰",
    route: "/review",
    icon: "cil-cursor",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Review",
        to: "/review",
      },
    ],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "통계 및 정산",
    route: "/statistics",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "매출",
        to: "/statistics/sales",
      },
      {
        _tag: "CSidebarNavItem",
        name: "고객 유입 현황",
        to: "/statistics/customerInflow",
      },
      {
        _tag: "CSidebarNavItem",
        name: "정산",
        to: "/statistics/calculate",
      },
    ],
  },
];

export default _nav;
