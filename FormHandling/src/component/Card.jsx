import React from "react";

function Card({user,handleDelete,index}) {
  return (
    <div className="w-40 h-60 bg-white flex flex-col items-center p-2 rounded-xl">
      <div className="h-15 w-15 bg-zinc-300 rounded-full overflow-hidden object-center">
        <img src={user.image} alt="" />
      </div>
      <h1 className="font-bold text-3 mt-2">{user.name}</h1>
      <h2 className="mb-2 text-sm  text-zinc-400">{user.email}</h2>
      <p className="align-center leading-5 tracking-tighter text-sm text-center opacity-80">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button className="px-3 py-1 text-[12px] mt-2 rounded-full text-white bg-red-500 hover:bg-red-300 hover:text-black" onClick={()=>handleDelete(index)}>
        Remove It
      </button>
    </div>
  );
}

export default Card;
