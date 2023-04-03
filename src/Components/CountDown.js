import React, { useEffect, useState, useRef } from "react";

const CountDown = () => {
  const [countDays, setCountDays] = useState("00");
  const [countHour, setCountHour] = useState("00");
  const [countMinute, setCountMinute] = useState("00");
  const [countSeconds, setCountSeconds] = useState("00");

  let interval = useRef();

  const countDownTimer = () => {
    const countDownDate = new Date("january 1, 2024 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const Days = Math.floor(distance / (1000 * 24 * 60 * 60));
      const Hours = Math.floor(
        (distance % (1000 * 24 * 60 * 60)) / (1000 * 60 * 60)
      );
      const Minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const Seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setCountDays(Days);
        setCountHour(Hours);
        setCountMinute(Minutes);
        setCountSeconds(Seconds);
      }
    });
  };
  useEffect(() => {
    countDownTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <section className="countDown">
      <div className="counts">
        <h1>{countDays}</h1>
        <h1>Days</h1>
      </div>
      <div className="counts">
        <h1>{countHour}</h1>
        <h1>Hours</h1>
      </div>
      <div className="counts">
        <h1>{countMinute}</h1>
        <h1>Minute</h1>
      </div>
      <div className="counts">
        <h1>{countSeconds}</h1>
        <h1>Seconds</h1>
      </div>
    </section>
  );
};

export default CountDown;
