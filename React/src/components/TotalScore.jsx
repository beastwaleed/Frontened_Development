import React from 'react'

const TotalScore = ({CurrScore}) => {
  return (
    <div>
    <div className="scoreDiv py-10 w-28 flex flex-col items-center">
        <h2 className='font-extrabold text-7xl'>{CurrScore}</h2>
        <p className='text-xl font-medium'>Total Score</p>
    </div>
    </div>
  )
}

export default TotalScore
