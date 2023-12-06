import Tab from "./Tab";
import { useState } from "react";

const Tabs = ({ setTimer }) => {
  const tabs = [
    {
      name: "Pomodoro",
      duration: 1500,
    },
    {
      name: "Short Break",
      duration: 180,
    },
    {
      name: "Long Break",
      duration: 600,
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-2 rounded-full px-1 py-2 bg-tab">
      {tabs.map((tab, index) => (
        <Tab
          setTimer={setTimer}
          key={index}
          tab={tab}
          active={active}
          onActive={setActive}
          index={index}
        />
      ))}
    </div>
  );
};

export default Tabs;
