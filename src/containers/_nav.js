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

  //ㅁㄴㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇ

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
      {
        _tag: "CSidebarNavItem",
        name: "판매일시 중지",
        to: "/product/productPause",
      },
      {
        _tag: "CSidebarNavItem",
        name: "작품 등록",
        to: "/product/productEnrollment",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Collapse",
        to: "/base/collapses",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Forms",
        to: "/base/forms",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Jumbotron",
        to: "/base/jumbotrons",
      },
      {
        _tag: "CSidebarNavItem",
        name: "List group",
        to: "/base/list-groups",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Navs",
        to: "/base/navs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Navbars",
        to: "/base/navbars",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Pagination",
        to: "/base/paginations",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Popovers",
        to: "/base/popovers",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Progress",
        to: "/base/progress-bar",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Switches",
        to: "/base/switches",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Tables",
        to: "/base/tables",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Tabs",
        to: "/base/tabs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Tooltips",
        to: "/base/tooltips",
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
    _tag: "CSidebarNavItem",
    name: "Charts",
    to: "/charts",
    icon: "cil-chart-pie",
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
        name: "CoreUI Brands",
        to: "/icons/brands",
      },
    ],
  },

  {
    _tag: "CSidebarNavDivider",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Extras"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Pages",
    route: "/pages",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Login",
        to: "/login",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Register",
        to: "/register",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Error 404",
        to: "/404",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Error 500",
        to: "/500",
      },
    ],
  },
];

export default _nav;
