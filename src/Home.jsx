import React from "react";
import logo from "./assets/beeminelogo.png";
function Home() {
  return (
    <>
    <div class="min-h-20 flex flex-col items-center justify-center bg-beemine">
    <img src={logo} alt="logo" className="w-60 h-30"/>
    </div>
    <div class="bg-beemine">
      <h1 class="text-black-500 text-2xl mb-2">Welcome to Bee | mine</h1>
      <p>Your one-stop  for custom gifts</p>
      <button style={{ padding: '10px 20px', fontSize: '16px' }}>
        Order Now
      </button>
    </div>
    </>
  )
}
export default Home