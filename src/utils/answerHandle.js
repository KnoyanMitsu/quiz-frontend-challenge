import saveAnswer from "./saveAnswer";
import result from "./result";

export const handleAnswerSelected = ({
  answer,
  userAnswers,
  currentIndex,
  end,
  questions,
  setUserAnswers,
  setCurrentIndex,
  router,
}) => {
  const updatedAnswers = {
    ...userAnswers,
    [currentIndex]: answer,
  };

  setUserAnswers(updatedAnswers);
  saveAnswer(updatedAnswers);

  if (currentIndex < end - 1) {
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    localStorage.setItem("current-index", nextIndex);
  } else if (currentIndex === end - 1) {
    result(questions, updatedAnswers);
    router.push("/result");
  }
};
