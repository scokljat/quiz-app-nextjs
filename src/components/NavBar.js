import { useContext } from "react";
import { ApiContext } from "../app/context";

function NavBar() {
  const { token, setToken } = useContext(ApiContext);

  return (
    <div className="w-full bg-neutral-800 h-14 flex justify-between items-center px-4">
      <p className="text-2xl">Quiz app</p>
      {token && (
        <button
          className=" bg-[#79a8ce] p-1 text-[12px]"
          onClick={() => {
            setToken("");
            localStorage.removeItem("token");
          }}
        >
          Log out
        </button>
      )}
    </div>
  );
}

export default NavBar;
