import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [deta, setData] = useState([]);

  async function getData() {
    let response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
    console.log(response.data[0].url);
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      <div className="flex justify-center items-center h-20 w-[100%] bg-gray-300">
        <div className="but ring-1 py-2 px-10 bg-black text-white  rounded-xl">
          <button className="active:scale-110" >
            Get Data
          </button>
        </div>
      </div>

      <div className="w-[100%]  bg-gray-200 flex-col flex justify-between py-10 px-20">
        {deta.map((item,idx) => (
         
          <div className="w-[100%] mb-4 flex justify-between items-center bg-white p-4 shadow-md rounded-lg" key={idx}>
             {/* console.log(item.url); */}
            <img src={item.download_url} alt="sorry image not load"  className="w-40 h-40 object-cover rounded-md"/>
            <h1>{item.author}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
