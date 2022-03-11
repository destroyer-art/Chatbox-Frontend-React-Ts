interface IMessage {
  text: string
  time: string
}

interface IProps {
  message: IMessage
  bgColor?: string
  position: string
}

const DisplayText = ({ message, bgColor, position }: IProps) => {
  return (
    <div className="main">
      <div>{message.text}</div>
      <div className="child">{message.time}</div>
      <style jsx>{`
        .main {
          width: 30vw;
          padding: 2%;
          background-color: ${bgColor ? bgColor : "#A9A9A9"};
          border-radius: 18px;
          margin: 1% 0;
          float: ${position === "sent" ? "right" : "left"};
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
