import PropTypes from "prop-types";
import Countdowns from "../Timer";
import Button from "../Button";
import { useMemo } from "react";
import CardTitle from "./CardTitle";

CardQuestion.prototype = {
  minute: PropTypes.number.isRequired,
  currentNumber: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
  incorrect_answers: PropTypes.array.isRequired,
  correct_answer: PropTypes.string.isRequired,
  setSelectedAnswer: PropTypes.func.isRequired,
  timeup: PropTypes.func.isRequired,
};

function CardQuestion({
  currentNumber,
  end,
  question,
  minute,
  incorrect_answers,
  correct_answer,
  setSelectedAnswer,
  timeup,
}) {
  const shuffleArray = useMemo(() => {
    if (!incorrect_answers || !correct_answer) return [];
    return [...incorrect_answers, correct_answer].sort(
      () => Math.random() - 0.5,
    );
  }, [incorrect_answers, correct_answer]);

  return (
    <CardTitle
      title={`Question ${currentNumber} of ${end}`}
      info={<Countdowns minute={minute} onComplete={timeup} />}
    >
      <div className="mt-4">
        <p className="mb-5">{question?.question}</p>
        <div className="grid grid-cols-2 gap-2">
          {shuffleArray.map((option, index) => (
            <Button
              disabled={false}
              onClick={() => setSelectedAnswer(option)}
              key={index}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>
    </CardTitle>
  );
}

export default CardQuestion;
