import React from "react";

const ProductSale = React.lazy(() =>
  import("./views/product/productSale/ProductSale")
);
const ProductEnrollment = React.lazy(() =>
  import("./views/product/productEnrollment/ProductEnrollment")
);
const Review = React.lazy(() => import("./views/review/review/Review"));

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
const ProductUpdate = React.lazy(() =>
  import("./views/product/productSale/ProductUpdate")
);
const routes = [
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
  {
    path: "/product/productUpdate",
    name: "ProductUpdate",
    component: ProductUpdate,
  },
  {
    path: "/product/productEnrollment",
    name: "ProductEnrollment",
    component: ProductEnrollment,
  },
  { path: "/review", name: "Review", component: Review, exact: true },

  { path: "/statistics/sales", name: "Sales", component: Sales },
  {
    path: "/statistics/customerInflow",
    name: "CustomerInflow",
    component: CustomerInflow,
  },
  { path: "/statistics/calculate", name: "Calculate", component: Calculate },
];

export default routes;
