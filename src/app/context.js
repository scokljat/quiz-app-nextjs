import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { getUserById } from "./api/services/user";

export const ApiContext = createContext(null);

function Context({ children }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const [users, setUsers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchUser(id) {
      const { data } = await getUserById(id);
      setUser(data);
    }

    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      let decoded = jwt_decode(token);
      fetchUser(decoded.id);
    } else {
      router.push("/");
    }
  }, [token]);

  return (
    <ApiContext.Provider
      value={{
        questions,
        setQuestions,
        answers,
        setAnswers,
        user,
        setUser,
        token,
        setToken,
        users,
        setUsers,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export default Context;
