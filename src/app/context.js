import { createContext, useState } from "react";

export const ApiContext = createContext(null);

function Context({ children }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);

  return (
    <ApiContext.Provider
      value={{
        questions,
        setQuestions,
        answers,
        setAnswers,
        user,
        setUser,
        users,
        setUsers,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export default Context;
