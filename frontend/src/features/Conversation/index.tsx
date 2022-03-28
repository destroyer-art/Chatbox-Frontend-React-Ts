import { defaultImageUrl } from "@api/get-contact";
import { socket } from "@api/socket";
import { useAppDispatch, useAppSelector } from "@app/hook";
import DisplayText from "@components/DisplayText";
import InputBar from "@components/InputBar";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Dispatch } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { add, selectConversation } from "./Slice";
import { IStaticProps } from "./State";

const Conversation = ({ conversationHistory }: IStaticProps) => {
  const msgText = useAppSelector(selectConversation);
  const dispatch: Dispatch<any> = useAppDispatch();
  const [inputMsg, setInputMsg] = useState("");
  const handleMessage = async () => {
    socket.emit("msgToServer", inputMsg);
    setInputMsg("");
  };

  useEffect(() => {
    const handler = (message: string) => dispatch(add(message));
    socket.on("msgToClient", handler);
    return () => {
      socket.off("msgToClient", handler);
    };
  }, [msgText]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) return;
    setInputMsg(event.target.value);
  };
  return (
    <div className="conversation">
      <div className="topBar">
        <img src={defaultImageUrl} alt="User pictures" />
        <span>User A</span>
      </div>
      <div className="messageBar">
        {[...conversationHistory, ...msgText].length > 0
          ? [...conversationHistory, ...msgText].map((message, index) => (
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
          bgColor={"#cccfbc"}
          icon={faPaperPlane}
          handleInput={handleMessage}
          handleChange={handleChange}
          inputVal={inputMsg}
        />
      </div>

      <style jsx>{`
        .conversation {
          background-color: #ededed;
          width: 80%;
          position: relative;
          height: 100%;
        }
        .topBar {
          background-color: #cccfbc;
          display: flex;
          flex-direction: row;
          padding: 1%;
          align-items: center;
        }
        img {
          width: 5%;
          border-radius: 50%;
          margin: 0% 3%;
        }

        .inputBar {
          bottom: 0;
          position: absolute;
          width: 100%;
        }

        .messageBar {
          display: flex;
          flex-direction: column;
        }

        @media only screen and (max-width: 700px) {
          .conversation {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Conversation;
