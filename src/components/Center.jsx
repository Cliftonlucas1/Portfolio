import React from "react";

const Center = (prop) => {
  return (
    <div 
      className="flex flex-col items-center justify-start pt-80 relative border border-red-500"
      style={{ width: "130%", height: "55vh" }}
    >

      <img 
          className="absolute top-0 inset-x-0 w-full h-full object-cover rounded-b-lg rounded-t-lg opacity-80" 
          src="https://media4.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif?cid=ecf05e47263rbr3ml4z4phpeq2po399d27vfgkrvi4y8qish&ep=v1_gifs_related&rid=giphy.gif&ct=g" 
          alt="logo" 
      />

      {/* <div className="absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-transparent to-gray-300"></div>
      <div className="absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-transparent to-gray-300"></div> */}
      
    </div>
  );
}

export default Center;
