interface IProps {
  message: {
    text: string;
    time: string;
    sent: boolean;
  };
}

const DisplayText = ({ message }: IProps) => {
  return (
    <div className={message.sent ? 'sent main' : 'received main'}>
      {message.text}
      <div className="child">{message.time}</div>
      <style jsx>{`
        .main {
          padding: 3%;
          background-color: ${message.sent
            ? 'var(--white-bg)'
            : 'var(--grey-bg)'};
          border-radius: ${!message.sent
            ? '25px 25px 25px 0'
            : '25px 25px 0 25px'};
          margin: 2%;
          position: relative;
          display: inline-block;
          min-width: 30%;
          float: ${message.sent ? 'right' : 'left'};
          line-height: 2;
        }

        .main::before {
          content: '';
          position: absolute;
          background-color: transparent;
          bottom: -50px;
          width: 25px;
          height: 50px;
          box-shadow: 0 -25px 0 0 ${message.sent ? 'var(--white-bg)' : 'var(--grey-bg)'};
        }

        .received::before {
          left: 0px;
          border-top-left-radius: 25px;
        }

        .sent::before {
          right: 0px;
          border-top-right-radius: 25px;
        }

        .child {
          color: ${message.sent ? 'grey' : 'white'};
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
