"use client";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { ApiContext } from "@/app/context";
import { getAnswers } from "../app/api/services/questions";

function Question({ question, current, setCounter, nextQuestion }) {
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const router = useRouter();
  const { user, setUser, answers, setAnswers } = useContext(ApiContext);

  useEffect(() => {
    async function fetchData() {
      const answerRes = await getAnswers(question.id);
      setAnswers(answerRes.data);
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-3 justify-start bg-neutral-800  h-1/2 p-6 w-[80%] sm:w-[70%] md:w-[70%] lg:w-[50%] xl:w-[50%] 2xl:w-[40%]">
      <p className="mb-2">Question {current + 1} of 5</p>
      <hr
        className={`border border-[#79a8ce] ${
          current === 0
            ? " w-[20%]"
            : current === 1
            ? " w-[40%]"
            : current === 2
            ? " w-[60%]"
            : current === 3
            ? " w-[80%]"
            : "w-[100%]"
        }`}
      />
      <h2>{question?.question}</h2>
      {answers?.map((answer) => (
        <p
          className={`hover:bg-[rgb(47,47,47)] p-2 cursor-pointer ${
            answer?.id === selectedAnswer && isCorrect
              ? "text-green-500"
              : answer?.id === selectedAnswer && !isCorrect
              ? "text-red-500"
              : "text-white"
          }`}
          onClick={() => {
            setSelectedAnswer(answer.id);
            if (answer.answer === answer.correctAnswer) {
              setUser({ ...user, score: user.score + 1 });
              setIsCorrect(true);
            }
            setTimeout(nextQuestion, 2000);
          }}
          key={answer.id}
        >
          {answer.index}. {answer.answer}
        </p>
      ))}
    </div>
  );
}

export default Question;
