import React, { useState } from "react";
import Header from "./components/Header";
import TimerDisplay from "./components/TimerDislay";
import "./App.css";

const App = () => {
  const [timer, setTimer] = useState(1500);

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-[100dvh] max-h-screen bg-timer px-4">
      <Header setTimer={setTimer} />
      <TimerDisplay timer={timer} setTimer={setTimer} />
    </div>
  );
};

export default App;
