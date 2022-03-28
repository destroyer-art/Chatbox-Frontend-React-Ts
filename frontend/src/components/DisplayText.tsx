interface IProps {
  message: {
    text: string;
    time: string;
    sent: boolean;
  };
}

const DisplayText = ({ message }: IProps) => {
  return (
    <div className="main">
      {message.text}
      <div className="child">{message.time}</div>
      <style jsx>{`
        .main {
          padding: 3%;
          background-color: ${message.sent ? "#F1F5F5" : "#A9A9A9"};
          border-radius: 18px;
          margin: 2%;
          position: relative;
          display: inline-block;
          min-width: 30%;
          float: ${message.sent ? "right" : "left"};
        }
        .child {
          color: grey;
          font-size: 0.8rem;
          position: absolute;
          right: 5%;
          bottom: 5%;
        }

        @media only screen and (max-width: 700px) {
          .main {
            min-width: 50%;
            font-size: 1.4rem;
          }
        }
      `}</style>
    </div>
  );
};
export default DisplayText;
