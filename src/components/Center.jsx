import React from "react";

const Center = () => {
  return (
    <div className="bg-blue-500 h-screen w-full flex flex-col items-center justify-center">
      <h2 className="text-white text-center mb-4">
        THIS IS THE CENTER!
      </h2>
      <img className=" inset-0 w-full h-full object-cover" src="https://media4.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif?cid=ecf05e47263rbr3ml4z4phpeq2po399d27vfgkrvi4y8qish&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="logo" />
    </div>
  );
}

export default Center;
