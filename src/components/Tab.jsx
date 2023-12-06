import useSound from "use-sound";
import click from "../assets/click.mp3";

const Tab = ({ tab, index, active, onActive, setTimer }) => {
  const isActive = active === index;
  const [playSound] = useSound(click);

  function handleClick() {
    playSound();
    onActive(index);
    setTimer(tab.duration);
  }

  return (
    <button
      onClick={handleClick}
      className={
        isActive
          ? "bg-accent py-2 px-3 rounded-full text-tab font-bold"
          : "text-gray-500 font-bold py-2 px-3"
      }
    >
      {tab.name}
    </button>
  );
};

export default Tab;
