import React from "react";
import Card from "./Card";

CardTest.prototype = {

  totalQ: number,
  deadline: number,
  onClick: func,
};

function CardTest({  totalQ, deadline, onClick }) {
  return (
    <Card>
      <p className="text-text">Question {totalQ}</p>
      <p className="text-text/50">{deadline} minute</p>
      <div className="flex justify-end items-center">
        <button
          className="bg-secondary p-3 text-text rounded-2xl"
          onClick={onClick}
        >
          Start
        </button>
      </div>
    </Card>
  );
}

export default CardTest;
