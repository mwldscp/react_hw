import { useEffect, useState } from "react";
import "./timer.css"

export function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (isActive) {
        setSeconds((prev) => prev + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div>
      <h2>Таймер</h2>
      <p>"Прошло: {seconds} сек"</p>
      <button onClick={() => setIsActive(true)} disabled={isActive} className="start-btn">
        Старт
      </button>
      <button onClick={() => setIsActive(false)} disabled={!isActive} className="stop-btn">
        Стоп
      </button>
    </div>
  );
}
