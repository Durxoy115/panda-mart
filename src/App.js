import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Purchase from "./components/Pages/Purchase";
import Dashboard from "./components/Dashboard/Dashboard";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Orders from "./components/Dashboard/Orders";
import Reviews from "./components/Dashboard/Reviews";
import MyProfile from "./components/Dashboard/MyProfile";
import Users from "./components/Dashboard/Users";
import NotFound from "./components/NotFound/NotFound";
import Portfolio from "./components/Portfolio/Portfolio";
import Checkout from "./components/Pages/Checkout";
import AddProducts from "./components/Dashboard/AddProducts";
import AllProducts from "./components/Pages/AllProducts";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/products" element={<AllProducts></AllProducts>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<Orders></Orders>}></Route>
          <Route path="reviews" element={<Reviews></Reviews>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="addproducts" element={<AddProducts></AddProducts>}></Route>
        </Route>
        
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/checkout/:id"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
