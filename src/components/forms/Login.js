"use client";
import { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log(name, email);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center h-[92vh]"
      method="post"
    >
      <div className="flex flex-col gap-5 justify-center items-center bg-neutral-800 w-[35%] h-1/2 p-1">
        <div className="relative  w-[80%]">
          <div className="absolute bottom-[30px] left-2 px-1  bg-neutral-800 ">
            <label className="text-[10px]">Email</label>
          </div>
          <input
            className="w-full h-10  bg-transparent border  border-gray-400   rounded outline-none focus:border-[#79a8ce] px-1 text-sm"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative w-[80%]">
          <div className="absolute bottom-[30px] left-2 px-1 bg-neutral-800 ">
            <label className="text-[10px]">Name</label>
          </div>
          <input
            className="w-full h-10  bg-transparent border  border-gray-400   rounded outline-none focus:border-[#79a8ce] px-1 text-sm"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-[#79a8ce] w-[80%] p-2">
          START
        </button>
      </div>
    </form>
  );
}

export default Login;
