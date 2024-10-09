import React from "react";

const Menu = () => {
  return (
    <div className="bg-black h-full  w-full">
      <ul
        className="w-full h-full 
           text-center content-center
          "
      >
        <li className="border-slate-400  rounded-full hover:border  duration-75 my-5 py-5 px-10 font-bold capitalize text-2xl text-white ">
          Github
        </li>
        <li className="border-slate-400  rounded-full hover:border  duration-75 my-5 py-5 px-10 font-bold capitalize text-2xl text-white ">
          About
        </li>
        <li className="border-slate-400 rounded-full  hover:border  duration-75 my-5 py-5 px-10 font-bold capitalize text-2xl text-white ">
          Z-chat
        </li>
      </ul>
    </div>
  );
};

export default Menu;
