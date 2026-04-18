import React from "react";
import PropTypes from "prop-types";

BlankNav.prototype = {
  children: PropTypes.node.isRequired,
}

function BlankNav({children}) {
  return (
    <div className="bg-background h-screen w-screen">
      <nav className="p-5">
        <div className="grid grid-cols-3">
          <div className="items-center">
            <h1 className="text-2xl font-bold">Logo</h1>
          </div>
          <div className="justify-center">
            <ul className="flex items-center justify-center gap-5">
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg-background-secondary rounded-t-2xl h-full w-full">
        <div className="container mx-auto p-5">{children}</div>
      </div>
    </div>
  );
}

export default BlankNav;
