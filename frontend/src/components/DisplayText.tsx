interface IMessage {
  text: string
  time: string
}

interface IProps {
  message: IMessage
  position: string
  bgColor?: string
}

const DisplayText = ({ message, position, bgColor }: IProps) => {
  return (
    <div>
      {message.text} {message.time}
      <style jsx>{`
        div {
          font-size: 30px;
          padding: 2%;
          float: ${position === "left" ? "left" : "right"};
          background-color: ${bgColor ? bgColor : "#A9A9A9"};
          border-radius: 15px;
          margin: 0 0 2% 0;
        }
      `}</style>
    </div>
  )
}
export default DisplayText
