import Image from "next/image";
import { runSocket } from "@api/socket";
import { useAppDispatch, useAppSelector } from "@app/hook";
import DisplayText from "@components/DisplayText";
import InputBar from "@components/InputBar";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Dispatch } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { add, fetchHistory, selectConversation } from "./Slice";

interface IProp {
  username: string;
  token: string;
}
const Conversation = ({ username, token }: IProp) => {
  const conversations = useAppSelector(selectConversation);
  const dispatch: Dispatch<any> = useAppDispatch();
  const [inputMsg, setInputMsg] = useState("");
  const socket = runSocket(token);
  const handleMessage = async () => {
    if (!inputMsg) return;
    socket.emit("msgToServer", inputMsg);
    setInputMsg("");
  };

  useEffect(() => {
    dispatch(fetchHistory(token));
  }, []);
  useEffect(() => {
    const handler = (message: string) => dispatch(add(message));
    socket.on("msgToClient", handler);
    return () => {
      socket.off("msgToClient", handler);
    };
  }, [conversations]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputMsg(event.target.value);
  };

  return (
    <div>
      <div className="topBar">
        <Image
          src={"/photo.png"}
          className="rounded-circle"
          width={30}
          height={30}
          alt={"user profile picture"}
        />
        <span>{username}</span>
      </div>
      <div className="messageBar">
        {conversations.length > 0
          ? conversations.map((message, index) => (
              <div key={"displayText" + index}>
                <DisplayText message={message} />
              </div>
            ))
          : null}
      </div>
      <div className="inputBar">
        <InputBar
          placeholder={"Type new message ..."}
          type={"text"}
          bgColor={"var(--elegant-green-bg)"}
          icon={faPaperPlane}
          handleInput={handleMessage}
          handleChange={handleChange}
          inputVal={inputMsg}
        />
      </div>

      <style jsx>{`
        span {
          margin: 0 2%;
        }
        .topBar {
          background-color: var(--elegant-green-bg);
          display: flex;
          flex-direction: row;
          padding: 1%;
          align-items: center;
        }
        .inputBar {
          bottom: 0;
          position: absolute;
          width: 100%;
        }

        .messageBar {
          display: flex;
          flex-direction: column;
          margin: 2% 0;
        }
      `}</style>
    </div>
  );
};

export default Conversation;
