import { runSocket } from "@api/socket";
import { useAppDispatch, useAppSelector } from "@app/hook";
import {
  faArrowRightFromBracket,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Dispatch } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { add, fetchHistory, reset, selectConversation } from "./Slice";
import TopBar from "@components/Conversation/TopBar";
import { unset } from "@features/Auth/Slice";
import MessageBar from "@components/Conversation/MessageBar";
import TypingBox from "@components/Conversation/TypingBox";

interface IProp {
  username: string;
  token: string;
}
const Conversation = ({ username, token }: IProp) => {
  const conversations = useAppSelector(selectConversation);
  const dispatch: Dispatch<any> = useAppDispatch();
  const [inputMsg, setInputMsg] = useState("");
  const socket = runSocket(token);
  const handleMessage = () => {
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

  const handleLogout = () => {
    dispatch(unset());
    dispatch(reset());
  };

  return (
    <div className="main">
      <TopBar
        username={username}
        handleLogout={handleLogout}
        icon={faArrowRightFromBracket}
      />
      <MessageBar conversations={conversations} />
      <TypingBox
        inputMsg={inputMsg}
        handleMessage={handleMessage}
        handleChange={handleChange}
        icon={faPaperPlane}
      />
      <style jsx>{`
        .main {
          position: relative;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Conversation;
