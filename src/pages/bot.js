import ResQBot from "../assets/icons/MessageBot.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Bot = () => {
  const [userReply, setUserReply] = useState("");
  const [dialogue, setDialogue] = useState([
    { speaker: "bot", message: "How may I help you?" },
  ]);
  const [isDisabled, setDisabled] = useState(true);

  const handleValidation = (e) => {
    const value = e.target.value.trim();
    setDisabled(value === "");
    handleChange(e);
  };

  const handleChange = (e) => {
    setUserReply(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDialogue([...dialogue, { speaker: "user", message: userReply }]);
    setUserReply("");
  };

  return (
    <main className="lg:flex h-[100vh] p-2 lg:items-center lg:justify-center">
      <div className="w-full relative lg:rounded-lg lg:shadow-lg lg:w-2/5 h-full">
        <header className="flex align-center py-[5px] px-[5px]">
          <Link to="/">
            <ion-icon size="large" name="arrow-back-outline"></ion-icon>
          </Link>
          {/*Change Link address to home when Login page is ready*/}
          <h1 className="ml-20">
            Res<span className="text-blue">Q</span> Bot
          </h1>
        </header>
        <div className="dialogue">
          {dialogue.map((item, index) => (
            <div
              key={index}
              className={`flex ${
                item.speaker === "bot" ? "flex-row" : "flex-row-reverse"
              }  justify-between align-center my-5 px-[20px] ${
                item.speaker === "bot" ? "bot-message" : "user-message"
              }`}
            >
              {item.speaker === "bot" ? (
                <img src={ResQBot} alt="avatar" />
              ) : (
                <ion-icon name="person"></ion-icon>
              )}
              <span
                className={`${
                  item.speaker === "bot"
                    ? "bg-blue text-white"
                    : "bg-white text-blue"
                } p-[5px] w-5/6 shadow shadow-black rounded-[6px]`}
              >
                <p>{item.message}</p>
              </span>
            </div>
          ))}
        </div>
        <form
          onSubmit={handleSubmit}
          className="absolute w-full flex bottom-1 align-center justify-center"
        >
          <div className="flex align-center border-inherit space-between w-full p-2 border hover:border-[#2592F6] rounded-lg ">
            <textarea
              className="p-2 h-[40px] mr-2 w-4/6 "
              onChange={handleValidation}
              value={userReply}
              placeholder="Ask ResQ bot"
            ></textarea>
            <button
              className={` border-neutral-400 ${
                isDisabled ? "active:bg-white active:text-blue" : ""
              } rounded-xl bg-blue p-2 w-2/6 text-white`}
              type="submit"
              disabled={isDisabled}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Bot;
