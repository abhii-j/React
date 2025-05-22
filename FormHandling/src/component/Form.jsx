import React from "react";
import { useForm } from "react-hook-form";

function Form({handleFormSubmitData}) {

  const {register,handleSubmit,reset}=useForm()

  const handleFormSubmit = (data) =>{

    handleFormSubmitData(data)
    reset();
  } 

  return (
    <div className="flex justify-center mt-15">
      <form className="flex gap-3" onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          type="text"
          {...register("image")}
          className="bg-white border-none p-1 px-2 rounded-full text-sm"
          placeholder="image"
        />
        <input
          type="text"
          {...register("name")}
          className="bg-white border-none p-1 px-2 rounded-full text-sm"
          placeholder="name"
        />
        <input
          type="text"
          {...register("email")}
          className="bg-white border-none p-1 px-2 rounded-full text-sm"
          placeholder="email"
        />
        <input
          type="submit"
          value="Submit"
          
          className="bg-blue-500 px-2 text-sm rounded-full hover:bg-blue-400"
        />
      </form>
    </div>
  );
}

export default Form;



// 🚀 Just built a simple React form using useForm() to add and manage card info dynamically!

// 📝 Features:

// Add cards with Image, Name, and Email

// Real-time form handling with useForm() from react-hook-form

// Remove card functionality for a clean and flexible UI

// 👨‍💻 This is a great starting point for anyone learning form handling and dynamic state updates in React!

// 💡 Tech Used: React, react-hook-form, useState

// 👇 Check out a quick demo or reach out if you're curious to learn how it works!

// #React #WebDevelopment #Frontend #ReactHookForm #100DaysOfCode #JavaScript
