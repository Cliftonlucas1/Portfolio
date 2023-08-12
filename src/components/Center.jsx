import React from "react";

const Center = () => {
  return (
    <div className="bg-blue-500 h-screen w-full flex flex-col items-center justify-center">
      <div className="transform transition-transform hover:scale-140">Hover Over Me</div>

      <img className="inset-0 w-full h-1/2 object-cover" src="https://media4.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif?cid=ecf05e47263rbr3ml4z4phpeq2po399d27vfgkrvi4y8qish&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="logo" />
    </div>
  );
}

export default Center;
