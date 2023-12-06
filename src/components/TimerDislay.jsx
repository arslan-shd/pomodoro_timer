import { Circle } from "rc-progress";
import useSound from "use-sound";
import bell from "../assets/bell.mp3";
import { useState, useEffect } from "react";

const TimerDisplay = ({ timer }) => {
  const [percentage, setPercentage] = useState(100);
  const [mins, setMins] = useState(parseInt(timer / 60));
  const [secs, setSecs] = useState(timer % 60);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(0);
  const [playSound] = useSound(bell);
  // const [timerPaused, setTimerPaused] = useState(false);
  useEffect(() => {
    setMins(parseInt(timer / 60));
    setSecs(timer % 60);
  }, [timer]);

  function pauseTimer() {
    clearInterval(intervalId);
    setIsRunning(false);
  }

  function startTimer() {
    setIsRunning(true);

    let totalTime = timer;
    let seconds;
    let minutes;

    const myInterval = setInterval(() => {
      setIntervalId(myInterval);
      totalTime--;
      seconds = totalTime % 60;
      minutes = parseInt(totalTime / 60);

      setPercentage((totalTime / timer) * 100);
      setMins(minutes);
      setSecs(seconds);

      if (totalTime === 0) {
        playSound();
        setIsRunning(false);
        clearInterval(myInterval);
      }
    }, 1000);
  }

  return (
    <div
      style={{
        boxShadow: "-50px -10px 100px #272c5a, 50px 50px 100px #121530",
      }}
      className="relative rounded-full"
    >
      <Circle
        className="h-64 w-64 shadow-inner"
        percent={percentage}
        strokeColor="#f87070"
        strokeWidth={4}
        trailWidth={4}
      />
      <div className=" absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white flex flex-col gap-6 ">
        {isRunning ? (
          <p className="text-6xl">
            {secs < 10 ? `${mins}:0${secs}` : `${mins}:${secs}`}
          </p>
        ) : (
          <p className="text-6xl">{timer / 60}:00</p>
        )}

        {isRunning ? (
          <button
            onClick={pauseTimer}
            className="tracking-widest text-2xl uppercase"
          >
            reset
          </button>
        ) : (
          <button
            onClick={startTimer}
            className="tracking-widest text-2xl uppercase"
          >
            start
          </button>
        )}
      </div>
    </div>
  );
};

export default TimerDisplay;
