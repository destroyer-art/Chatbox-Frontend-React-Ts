import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
  text: string;
  handleClick: () => void;
  icon?: IconDefinition;
}

const AuthAction = ({ text, handleClick, icon }: IProps) => {
  const displayText = text.split('?');
  return (
    <span className="auth-action">
      {displayText[1] ? displayText[0] + '?' : displayText[0]}
      <a onClick={handleClick}>
        {displayText[1]}{' '}
        {icon ? (
          <FontAwesomeIcon
            icon={icon}
            style={{
              marginRight: '1rem',
            }}
          />
        ) : null}
      </a>
      <style jsx>{`
        a {
          text-decoration: underline;
          color: blue;
          cursor: pointer;
        }

        .auth-action {
          margin: 2% 0;
        }
      `}</style>
    </span>
  );
};

export default AuthAction;
