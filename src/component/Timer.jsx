import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import PropTypes from "prop-types";

Countdowns.prototype = {
  onComplete: PropTypes.func.isRequired,
  minute: PropTypes.number.isRequired,
};

const renderer = ({ formatted }) => {
  const { hours, minutes, seconds } = formatted;
  return (
    <h1 className="text-text font-bold text-2xl">
      {hours}:{minutes}:{seconds}
    </h1>
  );
};

function Countdowns({ minute, onComplete }) {
  const [date, setDate] = useState(null);

  useEffect(() => {
    const savedDate = localStorage.getItem("test-end-time");
    if (savedDate) {
      setDate(Number(savedDate));
    } else {
      const endDate = Date.now() + minute * 60 * 1000;
      localStorage.setItem("test-end-time", endDate);
      setDate(endDate);
    }
  }, [minute]);

  const handleComplete = () => {
    localStorage.removeItem("test-end-time");

    if (onComplete) {
      onComplete();
    }
  };
  if (!date) return <h1 className="text-text font-bold text-2xl">00:00:00</h1>;

  return (
    <>
      <Countdown date={date} renderer={renderer} onComplete={handleComplete} />
    </>
  );
}

export default Countdowns;
