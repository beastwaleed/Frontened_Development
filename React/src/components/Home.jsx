import React from 'react'


const Home = ({toggle}) => {

    return (
    <div>
      <div className="container flex items-center justify-between m-auto px-20 py-2">
        <img className='h-[500px]' src="./dices.png" alt="No Image" />
        <div className="rightSide text-right">
        <h2 className='font-bold text-9xl'>Dice Game</h2>
        <button onClick={toggle} className='bg-black px-12 py-2 text-white text-2xl hover:bg-slate-50 hover:text-black hover:border border-gray-800'>Play Now</button>
        </div>
      </div>
    </div>
  )
}

export default Home
