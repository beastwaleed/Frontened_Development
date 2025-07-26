import React from 'react'
import { useState } from 'react'

const RollDice = ({currentDice, rollDice}) => {

 
    return (
    <div className='flex flex-col justify-center items-center'>
        <div className='dice'>
            <img onClick={rollDice} className='mt-10  cursor-pointer' src={`./dice${currentDice}.png`} alt="" />
        </div>
            <p className='font-bold text-xl'>Click on the Dice to Roll</p>
    </div>
  )
}

export default RollDice
