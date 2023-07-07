"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useContext, useEffect } from "react";
import Emoji from "../../../public/bx-happy-beaming.svg";
import { ApiContext } from "../context";
import { getUsers, editUser } from "../api/services/user";

function Page() {
  const router = useRouter();
  const { user, setUser, users, setUsers } = useContext(ApiContext);

  useEffect(() => {
    async function fetchUsers() {
      const { data } = await getUsers();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  async function editScore(user) {
    const { data } = await editUser(user);
    setUser(data);
  }

  return (
    <div className="flex flex-col gap-10 justify-center items-center  ">
      <div className="flex flex-col  justify-center items-center bg-neutral-800 h-[60%] mt-8 p-[20px] w-[80%]  gap-[20px] lg:gap-[40px] sm:w-[70%] md:w-[70%] lg:w-[50%] xl:w-[50%] 2xl:w-[40%]">
        <div className="flex justify-center items-center gap-[20px] lg:gap-[40px] ">
          <div className="flex flex-col justify-center items-center gap-3">
            <p className=" text-[#79a8ce]  text-[20px] sm:text-[25px] md:text-[35px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px]">
              Congulations!
            </p>
            <p className="text-[12px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[20px] 2xl:text-[25px]">
              YOUR SCORE
            </p>
            <p className=" text-[20px] sm:text-[25px] md:text-[35px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px]">
              {user.score}/5
            </p>
          </div>
          <Image
            src={Emoji}
            alt=""
            priority
            className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]  md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px] 2xl:w-[150px] 2xl:h-[150px]   "
          />
        </div>
        <button
          className="bg-[#79a8ce] p-1 sm:p-2 text-[12px] sm:text-[14px]"
          onClick={() => {
            router.push("/quiz");
            editScore({ id: user.id, score: 0 });
          }}
        >
          Try again
        </button>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center bg-neutral-800 p-[20px] w-[80%] sm:w-[70%] md:w-[70%] lg:w-[50%] xl:w-[50%] 2xl:w-[40%]">
        <p className=" text-[#79a8ce] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[20px] 2xl:text-[25px]">
          THE BEST SCORES
        </p>{" "}
        <div key={user.id} className="flex flex-col gap-3 w-full">
          {users?.map((user) => (
            <div
              key={user.id}
              className="flex justify-between text-[12px] sm:text-[12px] md:text-[15px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px]"
            >
              <p>{user.email}</p>
              <p> {user.score}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
