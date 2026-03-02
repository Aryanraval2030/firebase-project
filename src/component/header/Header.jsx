import { Link } from "react-router-dom"
import { Menu, User } from "lucide-react"
import { useState } from "react"
import logo from "../../assets/logo.png";

import { Key } from "lucide-react";



function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <div className="bg-[rgb(1,3,19)] border-b border-black px-4 h-[14vh] flex items-center justify-between text-white">
      {/* Logo */}
      <div className="h-[14vh]">
        <img
          src={logo}
          alt="logo"
          className="w-28 h-full"
        />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex gap-10 text-lg">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/addproduct">Add Product</Link></li>
        </ul>
      </nav>

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex gap-3 items-center">
        <Link to="/login">
          <button className="px-4 py-1 rounded" title="login">
            <Key size={28} className="text-white hover:text-blue-400 transition" />
          </button>
        </Link>

        <Link to="/signup">
          <button className="px-4 py-1 rounded" title="signup">
            <User size={28} className="text-white hover:text-blue-400 transition" />
          </button>
        </Link>
      </div>

      {/* Mobile Icons */}
      <div className="flex md:hidden items-center gap-4">

        {/* User Icon */}
        <Link to="/login">
          <User size={26} />
        </Link>

        {/* Hamburger Icon */}
        <Menu
          size={28}
          className="cursor-pointer"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenu && (
        <div className="absolute top-[14vh] left-0 w-full bg-[rgb(1,3,19)] border-t border-gray-700 flex flex-col items-center gap-6 py-6 md:hidden z-50">
          <Link to="/" onClick={() => setMobileMenu(false)}>Home</Link>
          <Link to="/product" onClick={() => setMobileMenu(false)}>Product</Link>
          <Link to="/addproduct" onClick={() => setMobileMenu(false)}>Add Product</Link>
          <Link to="/signup" onClick={() => setMobileMenu(false)}>Signup</Link>
        </div>
      )}
    </div>
  )
}

export default Header