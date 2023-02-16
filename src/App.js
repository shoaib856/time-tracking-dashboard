import "./App.sass";
import avatar from "./images/image-jeremy.png";
import data from "./data.json";
import work from "./images/icon-work.svg";
import play from "./images/icon-play.svg";
import study from "./images/icon-study.svg";
import exercise from "./images/icon-exercise.svg";
import social from "./images/icon-social.svg";
import selfCare from "./images/icon-self-care.svg";
import ellipsis from "./images/icon-ellipsis.svg";
import { useEffect, useState } from "react";
const list = [work, play, study, exercise, social, selfCare];

function App() {
  const [timingType, setTimingType] = useState("weekly");

  const handleTimingTypeChange = (e) => {
    setTimingType(e.target.value);
  };

  useEffect(() => {
    const btns = document.querySelectorAll(".time-tracking-type input");
    btns.forEach(
      (btn) =>
        (btn.className = `btn ${btn.value === timingType ? "active" : ""}`)
    );
  }, [timingType]);
  return (
    <div className="time-tracking-dashboard">
      <div className="container">
        <div className="span-2 main">
          <div className="user-info">
            <div className="image">
              <img alt="..." src={avatar} />
            </div>
            <div className="name">
              <p>Report for</p>
              <h2>Jeremy Robson</h2>
            </div>
          </div>
          <div className="time-tracking-type">
            <input
              type="button"
              className="btn"
              value={"daily"}
              onClick={handleTimingTypeChange}
            />
            <input
              type="button"
              className="btn"
              value={"weekly"}
              onClick={handleTimingTypeChange}
            />
            <input
              type="button"
              className="btn"
              value={"monthly"}
              onClick={handleTimingTypeChange}
            />
          </div>
        </div>
        {data.map((card, i) => {
          return (
            <div className={`card card-${i} ${card.title}`} key={card.title}>
              <div className="logo">
                <img src={list[i]} alt="..." />
              </div>
              <div className="content">
                <p className="title">
                  {card.title}
                  <img src={ellipsis} alt="..." />
                </p>
                <div className="hours-number">
                <h1 className="current-hours">
                  {card.timeframes[timingType].current}hrs
                </h1>
                <p className="prev-hours">
                  Last Week - {card.timeframes[timingType].previous}hrs
                </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
