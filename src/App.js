import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import { useState } from "react";
import { dressData } from "./Components/Products/ProductsData";
import { myContext } from "./Components/Context";
// import Product from './Components/Products/Product';
import Productcloths from "./Components/Productcloths";
import Productitems from "./Components/Productitems";
import Viewmore from "./Components/Viewmore";
import Cart from "./Components/Cart";
import { Dummy1 } from "./assets/Dummy1";
import { Usercontext } from "./Components/Usercontext";
import Payment from "./Components/Payment";
import AdminLogin from "./Components/AdminLogin";
import { Dummy2 } from "./assets/Dummy2";
import Adminhome from "./Components/Adminhome";
import Addproducts from "./Components/Products/Addproducts";
import Adminproducts from "./Components/Adminproducts";
import Edit from "./Components/Edit";
import AdminUserList from "./Components/AdminUserList";
import Admincloths from "./Components/Products/Admincloths";
import Adminitems from "./Components/Products/Adminitems";

function App() {
  const [product,setProduct] = useState(dressData);
  const [cart, setCart] = useState([]);
  const [userData, setUserData] = useState(Dummy1);
  const [search, setSearch] = useState('')
  const [loggedin,setLoggedin] = useState(false)
  const [adminData] = useState(Dummy2)

  return (
    <div className="App">
      <myContext.Provider value={{ product,setProduct, cart, setCart,search,setSearch,adminData }}>
        <Usercontext.Provider value={{ userData, setUserData,loggedin,setLoggedin}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/loged" element={<Login />} />
            <Route path="/cloths" element={<Productcloths />} />
            <Route path="/products" element={<Productitems />} />
            <Route path="/viewmore /:id" element={<Viewmore />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/AdminLogin" element={<AdminLogin />}/>
            <Route path="/Adminhome" element={<Adminhome />}/>
            <Route path="/addproducts" element={<Addproducts />}/>
            <Route path="/adminproducts" element={<Adminproducts />}/>
            <Route path="/edit/:id" element={<Edit />}/>
            <Route path="/adminuser" element={<AdminUserList />}/>
            <Route path="/admincloths" element={<Admincloths />}/>
            <Route path="/adminitems" element={<Adminitems />}/>
          </Routes>
        </Usercontext.Provider>
      </myContext.Provider>
    </div>
  );
}

export default App;
