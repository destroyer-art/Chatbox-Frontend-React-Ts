import { IConversationState } from "@features/Conversation/State"

interface IProps {
  message: IConversationState
}

const DisplayText = ({ message }: IProps) => {
  return (
    <div className="main">
      <div>{message.text}</div>
      <div className="child">{message.time}</div>
      <style jsx>{`
        .main {
          width: 30vw;
          padding: 2%;
          background-color: ${message.type === "sent" ? "#F1F5F5" : "#A9A9A9"};
          border-radius: 18px;
          margin: 1% 0;
          float: ${message.type === "sent" ? "right" : "left"};
        }
        .child {
          color: grey;
          float: right;
          font-size: 0.8rem;
        }
      `}</style>
    </div>
  )
}
export default DisplayText
