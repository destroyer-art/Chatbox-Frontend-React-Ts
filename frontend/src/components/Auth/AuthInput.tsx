import { useState } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { capitalizeString } from '@helper/common';

interface IProps {
  type: string;
  formType: string;
  icon: IconDefinition;
  handlePassword?: () => void;
  toggleType?: string;
}

const AuthInput = ({ type, formType, icon, toggleType }: IProps) => {
  const [input, setInput] = useState('');
  return (
    <div className="auth-input">
      {type !== 'submit' ? (
        <div className="auth-input-box">
          <input
            placeholder={`${capitalizeString(type)}`}
            type={toggleType || type}
            id={type}
            required
            defaultValue={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <FontAwesomeIcon
            icon={icon}
            style={{
              position: 'absolute',
              right: '5%',
              top: '40%',
              width: '25%',
              height: '25%',
            }}
          />
        </div>
      ) : (
        <div>
          <input value={capitalizeString(formType)} type={type} />
        </div>
      )}
      {/* {type === AuthDataEnum.password && formType === AuthActionEnum.login ? (
        <span onClick={handlePassword}>Forgot password</span>
      ) : null} */}
      <style jsx>{`
        @use 'src/styles/_mixin.module.scss' as mixin;
        .auth-input {
          margin: 0.4rem 0;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .auth-input-box {
          position: relative;
        }

        input {
          font-size: 1.2rem;
          padding: 5%;
          border: hidden;
          margin: 2% 0 0 0;
          width: 80%;
          font-family: inherit;
        }

        @include mixin.breakpoint(desktop) {
          input {
            font-size: 0.9rem;
          }
        }

        input[type='submit'] {
          background-color: #32de84;
          color: white;
          cursor: pointer;
          width: 90%;
        }

        span {
          margin-top: -1%;
          text-align: right;
          color: red;
          text-decoration: underline;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default AuthInput;
