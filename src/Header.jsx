import React from "react";
import logo from "./assets/beeminelogo.png";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <>
    <div className="relative flex flex-row items-center min-h-30  bg-beemine px-4">
      <div className="flex-none"  >
      <button className="cursor-pointer mb-3">
        <SearchIcon className="rounded hover:bg-gray-700 mr-2 "></SearchIcon> <input className="mt-1 border px-3 py-2 rounded " type="textbox" placeholder="Search"></input> 
      </button>
      </div>
    <div className="absolute left-1/2 transform -translate-x-1/2">
    <img src={logo} alt="logo" className="w-50 h-25 "/>
    </div>
    </div>
    

      
    <div class="bg-beemine mt-5">
      <h1 class="text-black-500 text-2xl mb-2">Welcome to Bee | mine</h1>
      <p>Your one-stop  for custom gifts</p>
      <button class="br">
        Order Now 
      </button>
    </div>
    </>
  )
}
export default Header