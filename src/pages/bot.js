import ResQBot from "../assets/icons/MessageBot.svg";
import Profile from "../assets/icons/MaleUser.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Bot = () => {
    const [userReply, setUserReply] = useState('');
    const [dialogue, setDialogue] = useState([
        { speaker: 'bot', message: 'How may I help you?' }
    ]);

    const handleChange = (e) => {
        setUserReply(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDialogue([...dialogue, { speaker: 'user', message: userReply }]);
        setUserReply('');
    }

    return (
        <main>
            <header className="flex justify-between align-center py-[5px] px-[5px]">
                <Link to="/home"><ion-icon size="large" name="arrow-back-outline"></ion-icon></Link>
                <h1>Res<span className="text-blue">Q</span> Bot</h1>
            </header>
            <div className="dialogue">
                {dialogue.map((item, index) => (
                    <div key={index} className={`flex ${item.speaker === 'bot' ? 'flex-row' : 'flex-row-reverse'}  justify-between align-center my-[16px] px-[20px] ${item.speaker === 'bot' ? 'bot-message' : 'user-message'}`}>
                        <img src={item.speaker === 'bot' ? ResQBot : Profile} alt="avatar" />
                        <span className={`${item.speaker === 'bot' ? 'bg-blue text-white' : 'bg-white text-blue'} p-[5px] w-[60%] shadow shadow-black rounded-[6px]`}>
                            <p >{item.message}</p>
                        </span>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="fixed flex align-center space-between w-[100%] bottom-0">
                <textarea
                    className="border-[1px] rounded-l border-[#E7DDDD] p-[5px] hover:border-[#2592F6] h-[40px]  mx-[5px] w-5/6 "
                    onChange={handleChange}
                    value={userReply}
                    placeholder="Ask ResQ bot">
                </textarea>
                <button
                    className="active:bg-white active:text-blue border-neutral-400 rounded-xl bg-blue m-[5px] px-[5px] py-[5px] h-[40px] w-1/6 text-white"
                    type="submit">
                    Send
                </button>
            </form>
        </main>
    );
}

export default Bot;
