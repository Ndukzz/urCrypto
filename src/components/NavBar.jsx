import { useState } from "react"

const NavBar = () => {
  const [ menu, setMenu ] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  }

  return (
    <nav>
      <div className='m-10 flex justify-between justify-items-center items-center h-9 text-base '>
        <div className="flex items-center text-xl font-bold">
          {/* <img className="h-10" src="./src/images/logo.png" alt="logo" /> */}
          <img className="h-10" src="./images/logo.png" alt="logo" />
          <h1 className="default px-2"><span>ur</span>Crypto&#8226;</h1>
        </div>
        <ul className={`hidden lg:flex justify-around w-2/5`}>
          <li>Products</li>
          <li>Price</li>
          <li>Learn</li>
          <li>Support</li>
        </ul>
        <div className={`hidden sm:flex`}>
          <button className="px-5">Sign In</button>
          <button className='border-button'>Get Started</button>
        </div>
        <img className="h-10 lg:hidden" onClick={toggleMenu} src="./images/menu.png" alt="menu" />
      </div>
      {menu &&
      <div className="flex justify-center flex-col items-center lg:hidden">
        <ul className={`text-center sm:block justify-around w-2/5 lg:${!menu && "hidden"}`}>
          <li className="pb-2">Products</li>
          <li className="p-2">Price</li>
          <li className="p-2">Learn</li>
          <li className="p-2">Support</li>
        </ul> 

        <div className={`flex flex-col sm:hidden`}>
          <button className="p-2">Sign In</button>
          <button className='border-button'>Get Started</button>
        </div>
      </div>
      }
    </nav>
  )
}

export default NavBar