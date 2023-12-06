import React from "react";
import Tabs from "./Tabs";

const Header = ({ setTimer }) => {
  return (
    <header>
      <h1 className="tracking-widest text-center mb-10 text-3xl font-bold text-white">
        Pomodoro Timer
      </h1>
      <Tabs setTimer={setTimer} />
    </header>
  );
};

export default Header;
