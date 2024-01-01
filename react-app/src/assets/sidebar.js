import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
} from "react-icons/hi";

const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "order",
    label: "ORDER",
    path: "/seller/order",
    icon: HiOutlineCube,
  },
  {
    key: "category",
    label: "CATEGORY",
    path: "/seller/category",
    icon: HiOutlineCube,
  },
  {
    key: "product",
    label: "PRODUCT",
    path: "/seller/myproducts",
    icon: HiOutlineCube,
    list: [
      { label: "myproduct", path: "/seller/myproducts", icon: HiOutlineCube },
      {
        label: "addnewproduct",
        path: "/seller/addnewproduct",
        icon: HiOutlineCube,
      },
    ],
  },
  {
    key: "voucher",
    label: "VOUCHER",
    path: "/seller/myvoucher",
    icon: HiOutlineCube,
    list: [
      { label: "myvoucher", path: "/seller/myvoucher", icon: HiOutlineCube },
      {
        label: "addnewvoucher",
        path: "/seller/addnewvoucher",
        icon: HiOutlineCube,
      },
    ],
  },
  {
    key: "customer",
    label: "CUSTOMER",
    path: "/seller/customer",
    icon: HiOutlineCube,
  },
  {
    key: "shop",
    label: "SHOP",
    path: "/seller/shopprofile",
    icon: HiOutlineCube,
    list: [
      {
        label: "Shop Profile",
        path: "/seller/shopprofile",
        icon: HiOutlineCube,
      },
    ],
  },
  {
    key: "warehouse",
    label: "WAREHOUSE",
    path: "/seller/warehouse",
    icon: HiOutlineCube,
    list: [
      {
        label: "My Shop 1",
        path: "/seller/warehouse?ShopId=1",
        icon: HiOutlineCube,
      },
      {
        label: "My Shop 2",
        path: "/seller/warehouse?ShopId=2",
        icon: HiOutlineCube,
      },
      {
        label: "My Shop 2",
        path: "/seller/warehouse?ShopId=2",
        icon: HiOutlineCube,
      },
    ],
  },
  {
    key: "setting",
    label: "SETTING",
    path: "/seller/setting",
    icon: HiOutlineCube,
  },
];

const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  //   {
  //     key: "settings",
  //     label: "Settings",
  //     path: "/settings",
  //     icon: HiOutlineCog ,
  //   },
  //   {
  //     key: "support",
  //     label: "Help & Support",
  //     path: "/support",
  //     icon: HiOutlineQuestionMarkCircle ,
  //   },
];

export { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS };
