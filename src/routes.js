import React from "react";

const Tables = React.lazy(() => import("./views/product/tables/Tables"));

const ProductSale = React.lazy(() =>
  import("./views/product/productSale/ProductSale")
);
const ProductPause = React.lazy(() =>
  import("./views/product/productPause/ProductPause")
);
const ProductEnrollment = React.lazy(() =>
  import("./views/product/productEnrollment/ProductEnrollment")
);
const Collapses = React.lazy(() =>
  import("./views/product/collapses/Collapses")
);
const BasicForms = React.lazy(() => import("./views/product/forms/BasicForms"));

const Jumbotrons = React.lazy(() =>
  import("./views/product/jumbotrons/Jumbotrons")
);
const ListGroups = React.lazy(() =>
  import("./views/product/list-groups/ListGroups")
);
const Navbars = React.lazy(() => import("./views/product/navbars/Navbars"));
const Navs = React.lazy(() => import("./views/product/navs/Navs"));
const Paginations = React.lazy(() =>
  import("./views/product/paginations/Pagnations")
);
const Popovers = React.lazy(() => import("./views/product/popovers/Popovers"));
const ProgressBar = React.lazy(() =>
  import("./views/product/progress-bar/ProgressBar")
);
const Switches = React.lazy(() => import("./views/product/switches/Switches"));

const Tabs = React.lazy(() => import("./views/product/tabs/Tabs"));
const Tooltips = React.lazy(() => import("./views/product/tooltips/Tooltips"));

const Review = React.lazy(() => import("./views/review/review/Review"));
const Charts = React.lazy(() => import("./views/charts/Charts"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Sales = React.lazy(() => import("./views/statistics/sales/Sales"));
const CustomerInflow = React.lazy(() =>
  import("./views/statistics/customerInflow/CustomerInflow")
);
const Brands = React.lazy(() => import("./views/statistics/brands/Brands"));

const OrderList = React.lazy(() => import("./views/order/orderList/OrderList"));
const OrderSendInfomation = React.lazy(() =>
  import("./views/order/orderSendInfomation/OrderSendInfomation")
);

const Users = React.lazy(() => import("./views/users/Users"));
const User = React.lazy(() => import("./views/users/User"));

const routes = [
  { path: "/", exact: true, name: "Home" },
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
    path: "/product/productPause",
    name: "ProductPause",
    component: ProductPause,
  },
  {
    path: "/product/productEnrollment",
    name: "ProductEnrollment",
    component: ProductEnrollment,
  },
  { path: "/base/collapses", name: "Collapse", component: Collapses },
  { path: "/base/forms", name: "Forms", component: BasicForms },
  { path: "/base/jumbotrons", name: "Jumbotrons", component: Jumbotrons },
  { path: "/base/list-groups", name: "List Groups", component: ListGroups },
  { path: "/base/navbars", name: "Navbars", component: Navbars },
  { path: "/base/navs", name: "Navs", component: Navs },
  { path: "/base/paginations", name: "Paginations", component: Paginations },
  { path: "/base/popovers", name: "Popovers", component: Popovers },
  { path: "/base/progress-bar", name: "Progress Bar", component: ProgressBar },
  { path: "/base/switches", name: "Switches", component: Switches },
  { path: "/base/tables", name: "Tables", component: Tables },
  { path: "/base/tabs", name: "Tabs", component: Tabs },
  { path: "/base/tooltips", name: "Tooltips", component: Tooltips },
  { path: "/review", name: "Review", component: Review, exact: true },

  { path: "/charts", name: "Charts", component: Charts },
  { path: "/statistics/sales", name: "Sales", component: Sales },
  {
    path: "/statistics/customerInflow",
    name: "CustomerInflow",
    component: CustomerInflow,
  },
  { path: "/icons/brands", name: "Brands", component: Brands },

  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
];

export default routes;
