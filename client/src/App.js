import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Productdescscreen from "./screens/Productdescscreen";
import Cartscreen from "./screens/Cartscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import Ordersscreen from "./screens/Ordersscreen";
import Orderinfo from "./screens/Orderinfo";
import Profilescreen from "./screens/Profilescreen";
import Adminscreen from "./screens/Adminscreen";
import Userslist from "./screens/Userslist";
import Orderslist from "./screens/Orderslist";
import Addproduct from "./screens/Addproduct";
import Productslist from "./screens/Productslist";
import Editproduct from './screens/Editproduct';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} exact />
          <Route path="/product/:id" element={<Productdescscreen />} exact />
          <Route path="/cart" element={<Cartscreen />} exact />
          <Route path="/register" element={<Registerscreen />} exact />
          <Route path="/login" element={<Loginscreen />} exact />
          <Route path="/orders" element={<Ordersscreen />} exact />
          <Route path="/orderinfo/:orderid" element={<Orderinfo />} exact />
          <Route path="/profile" element={<Profilescreen />} exact />
          <Route path="/admin" element={<Adminscreen />} exact />
          <Route path="/admin/userslist" element={<Userslist />} exact />
          <Route path="/admin/orderslist" element={<Orderslist />} exact />
          <Route path="/admin/addnewproduct" element={<Addproduct/>} exact />
          <Route path="/admin/productslist" element={<Productslist/>} exact />

          <Route path='/admin/editproduct/:productid' element={<Editproduct/>} exact/>   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
