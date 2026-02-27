import { Routes, Route } from 'react-router-dom'
import Header from './component/header/Header'
import Product from './component/product/Product'
import Add from './component/addproduct/Add'


import Login from "./component/Login";
import Logout from "./component/Logout";
import useAuth from "./hook/useAuth";

function App() {
  const user = useAuth()

  return (
    <>
      <Header />
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/addproduct" element={<Add />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/login' element={<Logout />}></Route>
      </Routes>




      {/* {user ? (
        <>
          <h2>Welcome {user.email}</h2>
          <Logout />
        </>
      ) : (
        <>
          <Signup />
        </>
      )} */}


    </>
  )
}

export default App