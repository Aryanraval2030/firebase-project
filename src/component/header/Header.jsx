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

       <div className='flex gap-2'>
         <Link to="/login">
          <button className="bg-blue-500 px-4 py-1 rounded">
            Login
          </button>
        </Link>
        <Link to="/signup">signup</Link>
       </div>
      </div>

    </>
  )
}

export default Header
