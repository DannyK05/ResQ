import { useState, useEffect } from "react";

import MedicalAdvice from "../../../data/medicalAdvice";

const Advice = ({ className }) => {
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
    <div
      className={`${
        className !== undefined ? className : ""
      }  home__advicebubble rounded-md shadow-md border border-[#fafa] p-2 my-2.5`}
    >
      <h1>
        Res<span className="text-blue">Q</span> says
      </h1>

      <div className="w-full h-24 advicebubble">
        <p className="w-full text-blue">{currentAdvice}</p>
      </div>
    </div>
  );
};

export default Advice;
