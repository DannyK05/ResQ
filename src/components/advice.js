import MedicalAdvice from "../data/medicalAdvice";
import React, { useState, useEffect } from "react";

const Advice = () => {
  const [currentAdvice, setCurrentAdvice] = useState("Have a beautiful day");

  useEffect(() => {
    let interval = 0;
    const adviceInterval = () => {
      if (interval < MedicalAdvice.length) {
        setCurrentAdvice(MedicalAdvice[interval]);
        interval += 1;
      } else {
        interval = 0;
      }
    };

    const pieceInterval = setInterval(adviceInterval, 5000);

    return () => clearInterval(pieceInterval);
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div className="home__advicebubble rounded-[20px] shadow shadow-black w-[90%] p-[5px] ml-2 my-[10px]">
      <h1>
        Res<span className="text-blue">Q</span> says
      </h1>
      <div className="w-[100%] h-[120px] advicebubble">
        <p className="w-[100%] text-blue">{currentAdvice}</p>
      </div>
    </div>
  );
};

export default Advice;
