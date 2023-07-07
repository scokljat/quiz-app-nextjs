"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useContext } from "react";
import { ApiContext } from "../app/context";
import { login, register } from "../app/api/services/user";

function Form({ buttonTitle, isRegistered }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser, token, setToken } = useContext(ApiContext);

  async function fetchData(email, password) {
    const res = isRegistered
      ? await register({ email: email, password: password })
      : await login({ email: email, password: password });
    if (!Object.keys(res.data).includes("message")) {
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
    }
  }

  const handleSubmit = () => {
    fetchData(email, password);
  };

  if (token) {
    if (!isRegistered) {
      router.push("/result");
    } else {
      router.push("/quiz");
    }
  }

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
            <label className="text-[10px]">Password</label>
          </div>
          <input
            className="w-full h-10  bg-transparent border  border-gray-400   rounded outline-none focus:border-[#79a8ce] px-1 text-sm"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-[#79a8ce] w-[80%] p-2">
          {buttonTitle}
        </button>
        <p className="text-[12px]">
          {isRegistered
            ? "You have an account? "
            : " You don't have an account? "}
          <Link
            className="text-[#79a8ce]"
            href={isRegistered ? "/" : "/register"}
          >
            {isRegistered ? "Login here and start quiz" : "Register here"}
          </Link>
        </p>
      </div>
    </form>
  );
}

export default Form;
