import React from "react";

const ProductSale = React.lazy(() =>
  import("./views/product/productSale/ProductSale")
);
const ProductPause = React.lazy(() =>
  import("./views/product/productPause/ProductPause")
);
const ProductEnrollment = React.lazy(() =>
  import("./views/product/productEnrollment/ProductEnrollment")
);
const Review = React.lazy(() => import("./views/review/review/Review"));
const Charts = React.lazy(() => import("./views/charts/Charts"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Sales = React.lazy(() => import("./views/statistics/sales/Sales"));
const CustomerInflow = React.lazy(() =>
  import("./views/statistics/customerInflow/CustomerInflow")
);
const Calculate = React.lazy(() =>
  import("./views/statistics/calculate/Calculate")
);

const OrderList = React.lazy(() => import("./views/order/orderList/OrderList"));
const OrderSendInfomation = React.lazy(() =>
  import("./views/order/orderSendInfomation/OrderSendInfomation")
);

const Users = React.lazy(() => import("./views/users/Users"));
const User = React.lazy(() => import("./views/users/User"));
// const Login = React.lazy(() => import("./views/pages/login/Login"));

const routes = [
  // { path: "/login", exact: true, name: "login", component: Login },
  { path: "/", name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/theme", name: "Theme", component: OrderList, exact: true },
  { path: "/order/orderList", name: "OrderList", component: OrderList }, //주문리스트
  {
    path: "/order/orderSendInfomation",
    name: "OrderSendInfomation",
    component: OrderSendInfomation,
  }, //발송정보
  { path: "/product/productSale", name: "ProductSale", component: ProductSale },
  // {
  //   path: "/product/productPause",
  //   name: "ProductPause",
  //   component: ProductPause,
  // },
  {
    path: "/product/productEnrollment",
    name: "ProductEnrollment",
    component: ProductEnrollment,
  },
  { path: "/review", name: "Review", component: Review, exact: true },

  { path: "/charts", name: "Charts", component: Charts },
  { path: "/statistics/sales", name: "Sales", component: Sales },
  {
    path: "/statistics/customerInflow",
    name: "CustomerInflow",
    component: CustomerInflow,
  },
  { path: "/statistics/calculate", name: "Calculate", component: Calculate },

  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
];

export default routes;
