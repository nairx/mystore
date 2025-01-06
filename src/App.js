import "./App.css";
import products from "./components/product/products.json";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/product/Products.js";
import Cart from "./components/cart/Cart.js";
import Navbar from "./components/header/Header.js";
import Login from "./components/user/Login.js";
import Footer from "./components/footer/Footer.js";
import Orders from "./components/order/Orders.js";
import Register from "./components/user/Register.js";

export const AppContext = createContext(null);

function App() {
  const PATH = process.env.REACT_APP_PATH;
  const [cartItems, setCartItems] = useState({});
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [flag, setFlag] = useState(0);

  const val = {
    cartItems,
    setCartItems,
    products,
    orders,
    setOrders,
    user,
    setUser,
    users,
    setUsers,
    flag,
    setFlag,
  };

  return (
    <AppContext.Provider value={val}>
    <div className="App">
      <Router>
        <Navbar />
        <hr></hr>
        <Routes>
          <Route path={`${PATH}/`} element={<Products />} />
          <Route path={`${PATH}/order`} element={<Orders />} />
          <Route path={`${PATH}/cart`} element={<Cart />} />
          <Route path={`${PATH}/login`} element={<Login />} />
          <Route path={`${PATH}/register`} element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    </AppContext.Provider>
  );
}
export default App;
