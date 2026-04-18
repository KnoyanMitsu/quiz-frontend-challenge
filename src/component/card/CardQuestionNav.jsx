import PropTypes from "prop-types";
import CardTitle from "./CardTitle";

CardQuestionNav.prototype = {
  totalQ: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
  answered: PropTypes.object.isRequired,
};

function CardQuestionNav({ totalQ, current, answered }) {
  return (
      <CardTitle title="Question List">
      <div className="grid grid-cols-4 gap-2">
        {totalQ.map((_, index) => (
          <button
            key={index}
            className={`border-2 border-accent/20 p-3 text-text rounded-2xl transition-all duration-300 ${index + 1 === current ? "bg-accent text-white" : answered[index] ? "bg-accent/20" : "border-accent/20"}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      </CardTitle>
  );
}

export default CardQuestionNav;
