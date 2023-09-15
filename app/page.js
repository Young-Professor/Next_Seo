import React from 'react'

function HomePage() {
  return (
    <section>
    <div className="landingpage h-96 bg-gray-500 flex flex-col items-center">
      <h2 className="text-4xl text-white pt-10 font-bold">SELL, BUY, RENT</h2>
      <h2 className="text-2xl text-white font-bold">CAR SERVING & FLYING MECHANICCCCC</h2>
      <button className="bg-blue-500 mt-44 px-8 py-2 rounded-lg shadow-md shadow-gray-400 text-lg">Get Started</button>
    </div>
    <div className="bg-white h-10 w-1/2 mx-auto mt-[-20px] rounded-2xl shadow-xl flex justify-between p-2">
        <div className="border-r-2 pr-20 border-black">Mileage</div>
        <div className="border-r-2 pr-20 border-black">Category</div>
        <div className="border-r-2 pr-20 border-black">Model</div>
        <div className="pr-3">Make</div>
    </div>
     </section>
  )
}

export default HomePage