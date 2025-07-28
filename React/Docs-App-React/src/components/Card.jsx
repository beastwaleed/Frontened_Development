import React, { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "motion/react"

const Card = ({ description, complexity, status, onToggle  ,reference } ) => {
  const [close, setClose] = useState(false);

  if (close) return null;

  return (
    <motion.div drag dragConstraints={reference} className="relative w-60 h-80 bg-zinc-900 rounded-[20px] px-5 py-8 text-white overflow-hidden">
      <FaRegFileAlt size="1.2em" />
      <p className="text-xl mt-2 leading-tight">{description}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-7 py-4">
          <p className="text-slate-400">{complexity}</p>
          <span className="cursor-pointer text-slate-400 " onClick={() => setClose(true)}>
            <IoMdCloseCircle />
          </span>
        </div>
        <div onClick={onToggle} className={`tag w-full ${status === "Completed" ? "bg-green-500" : "bg-yellow-600"} font-bold flex items-center justify-center px-4 py-2 cursor-pointer`}>
          <p className="text-sm">{status}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
