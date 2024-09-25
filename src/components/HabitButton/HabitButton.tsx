import React from "react";
import "./HabitButton.css";

interface Props {
  background?: string;
  label: string;
}

const HabitButton: React.FC<Props> = ({ background, label }) => {
  return (
    <div className="root">
      <div className="wrapper">
        <div className="label">{label}</div>
      </div>
      <div className="end"></div>
    </div>
  );
};

export default HabitButton;
