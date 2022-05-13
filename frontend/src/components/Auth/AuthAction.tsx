interface IProps {
  text: string;
  handleClick: () => void;
}

const AuthAction = ({ text, handleClick }: IProps) => {
  const displayText = text.split('?');
  return (
    <span>
      {displayText[0] + '?'} <a onClick={handleClick}>{displayText[1]}</a>
      <style jsx>{`
        a {
          text-decoration: underline;
          color: blue;
          cursor: pointer;
        }
      `}</style>
    </span>
  );
};

export default AuthAction;
