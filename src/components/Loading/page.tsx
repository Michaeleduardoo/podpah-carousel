import { useState, useEffect } from "react";

function Loading() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading">
      <div className="spinner-container">
        <div className="spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
      </div>
      <p>Carregando{dots}</p>
    </div>
  );
}

export default Loading;
