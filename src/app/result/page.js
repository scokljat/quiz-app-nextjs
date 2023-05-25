import Emoji from "../../../public/bx-happy-beaming.svg";
import Image from "next/image";
function Page() {
  return (
    <div className="flex justify-center items-center h-[92vh]">
      <div className="flex flex-col gap-20 justify-center items-center bg-neutral-800 w-[40%] h-[60%] ">
        <div className="flex gap-20 justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-[45px] text-[#79a8ce]">Congulations!</p>
            <p className="text-[25px]">YOUR SCORE</p>
            <p className="text-[45px]">4/5</p>
          </div>
          <Image src={Emoji} />
        </div>
        <button className="bg-[#79a8ce] p-2">Try again</button>
      </div>
    </div>
  );
}

export default Page;
