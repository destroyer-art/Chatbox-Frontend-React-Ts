interface IProps {
  text: string;
  handleClick: () => void;
}

const AuthAction = ({ text, handleClick }: IProps) => {
  const displayText = text.split("?");
  return (
    <p>
      {displayText[0] + "?"} <a onClick={handleClick}>{displayText[1]}</a>
      <style jsx>{`
        p {
          margin: 3.2% 0;
        }
        a {
          text-decoration: underline;
          color: blue;
          cursor: pointer;
        }
      `}</style>
    </p>
  );
};

export default AuthAction;
