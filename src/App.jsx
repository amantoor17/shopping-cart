import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (<div>
  <div>
    <div className="bg-slate-900 ">
      <Navbar/>
    </div>
  </div>
        
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/shopping-cart" element={<Home/>} />
  </Routes>
  </div>)
};

export default App;
