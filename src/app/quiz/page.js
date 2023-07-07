"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import Question from "@/components/Question";
import { ApiContext } from "../context";
import { getQuestions } from "../api/services/questions";
import { editUser } from "../api/services/user";

function Page() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  const { questions, setQuestions, user, answers, setAnswers } =
    useContext(ApiContext);
  let min = 1;
  let max = 5;

  let number = Math.floor(Math.random() * (max - min + 1)) + min;

  useEffect(() => {
    async function fetchData() {
      const questionRes = await getQuestions(number, number + 5);
      setQuestions(questionRes.data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function editScore(user) {
      const res = await editUser(user);
    }

    if (current === 5) {
      router.push("/result");
      editScore({ id: user.id, score: user.score });
    } else {
    }
  }, [current]);

  const nextQuestion = () => {
    setCurrent(current + 1);
  };

  return (
    <div className="flex justify-center items-center h-[92vh]">
      {questions?.map((question, index) => {
        return (
          <>
            {index === current && (
              <Question
                question={question}
                current={current}
                key={index}
                nextQuestion={nextQuestion}
              />
            )}
          </>
        );
      })}
    </div>
  );
}

export default Page;
