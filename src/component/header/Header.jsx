import { Link } from 'react-router-dom'


function Header() {
  return (
    <>

      <div className=" bg-[rgb(1,3,19)] border-b-2 border-black flex justify-between px-4 h-[14vh] items-center text-xl text-white">
        <div>
          <p>logo</p>
        </div>

        <nav>
          <ul className="flex justify-center gap-20">
            <li><Link to="/">home</Link></li>
            <li><Link to="/product">product</Link></li>
            <li><Link to="/addproduct">add product</Link></li>
          </ul>
        </nav>
        <button>login</button>
      </div>

    </>
  )
}

export default Header
