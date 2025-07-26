import React, { useState } from 'react'

const NumberSelector = ({selectedNum, setselectedNum}) => {

    const arr = [1,2,3,4,5,6];

    const baseClasses = 'font-bold border-2 px-4 py-2 border-gray-900 hover:bg-slate-300 cursor-pointer';
    const selectedClasses = 'bg-black text-white';
    
    return (
        <div>
      <div className="numbers flex gap-4">
        
        {arr.map((value, i) => {
        const isSelected = value === selectedNum;
          return( 
          <div key={i} onClick={()=> setselectedNum(value)} className={isSelected?`${baseClasses} ${selectedClasses}` : baseClasses}>{value}</div>)
        })}

      </div>
      <p className='text-right font-bold mt-2 text-xl'>Select Any Number</p>
    </div>
  );
};

export default NumberSelector
