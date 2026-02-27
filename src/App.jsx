import { Routes, Route } from 'react-router-dom'
import Header from './component/header/Header'
import Product from './component/product/Product'
import Add from './component/addproduct/Add'


import Signup from "./component/Signup"
import Login from "/component/Login"
import Logout from "/component/Logout"
import useAuth from "/hooks/useAuth"

function App() {
    const user = useAuth()

  return (
    <>
      <Header />
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/addproduct" element={<Add />} />
      </Routes>




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
    </>
  )
}

export default App