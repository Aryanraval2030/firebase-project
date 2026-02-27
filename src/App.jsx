import { Routes, Route } from 'react-router-dom'
import Header from './component/header/Header'
import Product from './component/product/Product'
import Add from './component/addproduct/Add'


import Signup from "./component/Signup";


import Login from "./component/Login";
import Logout from "./component/Logout";
import useAuth from "./hook/useAuth";
import Home from './component/homepage/Home';

function App() {
  const user = useAuth()

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/addproduct" element={<Add />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>

    </>
  )
}

export default App