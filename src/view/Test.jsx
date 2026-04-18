"use client";
import React, { useEffect, useState } from "react";
import CardQuestion from "../component/card/CardQuestion";
import CardQuestionNav from "../component/card/CardQuestionNav";
import { handleAnswerSelected } from "@/utils/answerHandle";
import { useRouter, useSearchParams } from "next/navigation";
import Fetch from "@/utils/fetch";

function Test() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  const searchParams = useSearchParams();
  const minute = searchParams.get("minute");

  useEffect(() => {
    setIsMounted(true);
    const savedAnswers = localStorage.getItem("answer");
    setUserAnswers(savedAnswers ? JSON.parse(savedAnswers) : {});

    const savedIndex = localStorage.getItem("current-index");
    if (savedIndex) setCurrentIndex(Number(savedIndex));

    const savedQuestions = localStorage.getItem("questions");
    if (savedQuestions && savedQuestions !== "undefined") {
      setQuestions(JSON.parse(savedQuestions));
    } else {
      Fetch(
        "https://opentdb.com/api.php?amount=20&category=11&difficulty=easy&type=multiple",
      ).then((data) => {
        if (data && data.results) {
          setQuestions(data?.results);
          localStorage.setItem("questions", JSON.stringify(data?.results));
        }
      });
    }
  }, []);
  const question = questions[currentIndex];
  const end = questions?.length || 0;
  const onAnswerSelected = (answer) => {
    handleAnswerSelected({
      answer,
      userAnswers,
      currentIndex,
      end,
      questions,
      setUserAnswers,
      setCurrentIndex,
      router,
    });
  };
  const handleSubmit = (userAnswers) => {
    import("@/utils/result").then((module) => {
      module.default(questions, userAnswers);
      router.push("/result");
    });
  };
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-5">
      <div className="col-span-2">
        <CardQuestion
          currentNumber={currentIndex + 1}
          end={end}
          question={question}
          incorrect_answers={question?.incorrect_answers}
          correct_answer={question?.correct_answer}
          minute={minute}
          setSelectedAnswer={onAnswerSelected}
          timeup={() => handleSubmit(userAnswers)}
        />
      </div>
      <div className="col-span-1">
        <CardQuestionNav
          totalQ={questions}
          current={currentIndex + 1}
          answered={userAnswers}
        />
      </div>
    </div>
  );
}

export default Test;
