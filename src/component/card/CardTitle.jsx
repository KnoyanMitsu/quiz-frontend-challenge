import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

CardTitle.prototype = {
  children: PropTypes.node,
  title: PropTypes.string,
  info: PropTypes.node,
};

function CardTitle({ children, title, info }) {
  return (
    <Card>
      <div>
        <div className="flex justify-between">
          <h1 className="text-text font-bold text-2xl mb-3">
            {title}
          </h1>
          {info}
        </div>
        <hr className="border-accent/20 mb-5" />
        {children}
      </div>
    </Card>
  );
}

export default CardTitle;
