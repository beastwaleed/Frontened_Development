import React, { useRef } from 'react'
import Card from './Card'

const Foreground = ({ cards, toggleStatus }) => {

    const ref = useRef(null)

  return (
    <div ref={ref} className="foreground fixed top-0 bg-transparent w-full h-screen z-[3] py-5 px-4 flex flex-wrap gap-4">
      {cards.map((card, index) => (
        <Card reference={ref}
          key={index}
          description={card.description}
          complexity={card.complexity}
          status={card.status}
          setStatus = {card.setStatus}
          onToggle={()=>toggleStatus(index)}
        />
      ))}
    </div>
  )
}

export default Foreground
