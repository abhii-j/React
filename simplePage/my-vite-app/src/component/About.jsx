import React, { useContext } from "react";
import { UserData } from "../context/UserContext";

function About() {
   const data=  useContext(UserData)
  return <h1 className="text-center text-3xl mt-10 h-[500px] flex justify-center items-center">ℹ️ About Page ,wecpme {data}</h1>;
}

export default About;
