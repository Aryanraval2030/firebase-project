import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './component/header/Header'
import Product from './component/product/Product'
import Add from './component/addproduct/Add'

import Signup from "./component/signup/Sign";
import Login from "./component/login/Login";
import Logout from "./component/logout/Logout";
import useAuth from "./useAuth";

function App() {
    const user = useAuth();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/addproduct" element={<Add />} />
      </Routes>




       <div>
      {user ? (
        <>
          <h2>Welcome {user.email}</h2>
          <Logout />
        </>
      ) : (
        <>
          <Signup />
          <Login />
        </>
      )}
    </div>
    </>
  )
}

export default App