const result = (correct_answers, userAnswers) => {
  let correct = 0;
  let incorrect = 0;
  let totalQ = correct_answers.length;

  correct_answers.forEach((answer, index) => {
    if (answer.correct_answer === userAnswers[index]) {
      correct++;
    } else {
      incorrect++;  
    }
  });
  localStorage.setItem("score", correct);
  localStorage.setItem("incorrect", incorrect);
  localStorage.setItem("totalQ", totalQ);
  localStorage.removeItem("answer");
  localStorage.removeItem("questions");
  localStorage.removeItem("timer");
  localStorage.removeItem("test-end-time");
  localStorage.removeItem("current-index");
};

export default result;
