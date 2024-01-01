import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  redirect,
} from "react-router-dom";

//import { getProductById } from "../assets/fake-data/product";
//import { getProductByCategoryId } from "../utils/findProduct";
import {
  getProductById,
  getProductByCategory,
  searchProductByKey,
} from "../services/ProductServices";

import UserLayout from "../UserLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Search from "../pages/Search";
import Product from "../pages/Product";
import Page_404 from "../pages/Page_404";
import Cart from "../pages/Cart";
import User from "../pages/User";
import SellerLayout from "../SellerLayout";

import Profile from "../pages/Customer_Profile/Profile";
import Payment from "../pages/Payment";
import MyProducts from "../pages/seller/MyProducts";
import AddNewProduct from "../pages/seller/AddNewProduct";
import SellerSetting from "../pages/seller/SellerSetting";
import ShopProfile from "../pages/seller/ShopProfile";

import SellerCategory from "../pages/seller/SellerCategory";
import SellerOrder from "../pages/seller/SellerOrder";
import SellerCustomer from "../pages/seller/SellerCustomer";
import SellerWareHouse from "../pages/seller/SellerWareHouse";
import SellerVoucher from "../pages/seller/SellerVoucher";
import SellerAddVoucher from "../pages/seller/SellerAddVoucher";

import { getCart } from "../services/CartServices";

import HeaderSeller from "../parts/HeaderSeller";

import DeliveryOrder from "../pages/delivery/DeliveryOrder";
import DeliveryRegister from "../pages/delivery/DeliveryRegister";
import DeliveryLayout from "../DeliveryLayout";
import HeaderDelivery from "../parts/HeaderDelivery";
import SellerRegister from "../pages/seller/SellerRegister";
import ViewShop from "../pages/ViewShop";
import DeliveryProfile from "../pages/delivery/DeliveryProfile";
import { toast } from "react-toastify";
import ProductDetail from "../pages/seller/ProductDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        loader={({ request }) => {
          let id_user = localStorage.getItem("id-user");
          //console.log(token )
          let pathname = new URL(request.url).pathname;
          if (id_user) return { hasUser: true, pathname: pathname };
          else return { hasUser: false, pathname: pathname };
        }}
        element={<UserLayout />}
        errorElement={<Page_404 />}
      >
        <Route index element={<Home />} />
        <Route
          path="/search/:categoryId/:categorySlug"
          loader={async ({ params }) => {
            let id = params.categoryId;
            let products = await getProductByCategory(id);
            console.log("list products category", products);
            if (products) {
              if (products.lenght === 0)
                toast.success("Không có sản phẩm phù hợp");
              else return products;
            } else throw new Response("not found", { status: 404 });
          }}
          element={<Search />}
        />
        <Route
          path="/search/:key"
          loader={async ({ params }) => {
            let key = params.key;
            let products = await searchProductByKey(key);
            console.log("list products key", products);
            if (products) return products;
            else throw new Response("not found", { status: 404 });
          }}
          element={<Search />}
        />
        <Route
          path="/:id/:productSlug"
          loader={({ params }) => {
            //let category = params.category;
            localStorage.setItem("lastpathname", "");

            let id = params.id;
            let item = getProductById(id);
            if (item) return item;
            else throw new Response("not found", { status: 404 });
          }}
          element={<Product />}
        />
        <Route
          path="/payment"
          loader={async () => {
            const payment = localStorage.getItem("payment-taka");
            if (payment.length < 1) return redirect("/");
            else return JSON.parse(payment);
          }}
          element={<Payment />}
        />
        <Route
          path="/cart"
          loader={async () => {
            let id_user = localStorage.getItem("id-user");
            if (!id_user) return redirect("/login");
            const cart = await getCart();
            if (cart?.data && cart?.data !== "Cart is empty") return cart.data;
            else if (cart?.data && cart?.data === "Cart is empty") return [];
            else return [];
          }}
          element={<Cart />}
        />
        <Route
          path="/profile"
          loader={() => {
            let id_user = localStorage.getItem("id-user");
            if (!id_user) return redirect("/");
            else return null;
          }}
          element={<Profile />}
        />
        <Route path="/:shopId" element={<ViewShop />} />
      </Route>
      <Route
        path="/login"
        element={<Login />}
        loader={() => {
          let id_user = localStorage.getItem("id-user");
          if (id_user) return redirect("/");
          else return null;
        }}
        errorElement={<Page_404 />}
      />
      <Route
        path="/register"
        element={<Register />}
        loader={() => {
          let id_user = localStorage.getItem("id-user");
          if (id_user) return redirect("/");
          else return null;
        }}
        errorElement={<Page_404 />}
      />
      <Route
        path="/seller"
        element={<SellerLayout />}
        errorElement={<Page_404 />}
      >
        <Route
          index
          loader={() => {
            return redirect("/seller/order");
          }}
          element={<>DashBoard </>}
        />
        <Route
          path="/seller/product"
          loader={() => {
            return redirect("/seller/myproducts");
          }}
          element={<MyProducts />}
        />
        <Route
          path="/seller/shop"
          loader={() => {
            return redirect("/seller/shopprofile");
          }}
          element={<ShopProfile />}
        />
        <Route path="/seller/order" element={<SellerOrder />} />
        <Route path="/seller/category" element={<SellerCategory />} />
        <Route path="/seller/myproducts" element={<MyProducts />} />
        <Route
          path="/seller/myproducts/productdetail/:productId"
          element={<ProductDetail />}
        />
        <Route path="/seller/myvoucher" element={<SellerVoucher />} />
        <Route path="/seller/addnewvoucher" element={<SellerAddVoucher />} />
        <Route path="/seller/addnewproduct" element={<AddNewProduct />} />
        <Route path="/seller/shopprofile" element={<ShopProfile />} />
        <Route path="/seller/customer" element={<SellerCustomer />} />
        <Route path="/seller/setting" element={<SellerSetting />} />
        <Route path="/seller/warehouse" element={<SellerWareHouse />} />
      </Route>
      <Route
        path="/seller/register"
        loader={() => {
          let key = window.location.search.replace("?key=", "");
          if (key === "") return 1;
          return key;
        }}
        element={
          <div className=" flex flex-col h-screen w-screen overflow-x-hidden">
            <HeaderSeller />
            <SellerRegister />
          </div>
        }
      />
      <Route
        path="/delivery/register"
        loader={() => {
          let key = window.location.search.replace("?key=", "");
          if (key === "") return 1;
          return key;
        }}
        element={
          <div className=" flex flex-col h-screen">
            <HeaderDelivery />
            <DeliveryRegister />
          </div>
        }
      />
      <Route
        path="/delivery"
        element={<DeliveryLayout />}
        errorElement={<Page_404 />}
      >
        <Route index element={<DeliveryProfile />} />
        <Route path="/delivery/order" element={<DeliveryOrder />} />
      </Route>
    </Route>
  )
);

export default router;
