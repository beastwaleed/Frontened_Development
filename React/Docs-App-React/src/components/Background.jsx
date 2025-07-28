import React from "react";

const Background = () => {
  return (
    <div className="fixed z-[2] bg-zinc-400 w-full h-screen">
      <div className="nav w-full py-5 flex justify-center text-center text-zinc-600 font-bold text-xl">
        Double click to add new todo.
      </div>
      <h1 className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-[12vw] leading-none tracking-tighter font-extrabold text-gray-700">
        TODO.
      </h1>
    </div>
  );
};

export default Background;
