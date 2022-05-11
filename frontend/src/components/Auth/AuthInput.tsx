import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { capitalizeString } from "@helper/common";
import { useState } from "react";
import { AuthActionEnum, AuthDataEnum } from "./AuthConstant";

interface IProps {
  type: string;
  formType: string;
  icon: IconDefinition;
  handlePassword?: () => void;
}

const AuthInput = ({ type, formType, icon, handlePassword }: IProps) => {
  const [input, setInput] = useState("");
  return (
    <div className="auth-input">
      {type !== "submit" ? (
        <div className="auth-input-box">
          <input
            placeholder={`Enter your ${type}`}
            type={type}
            id={type}
            required
            defaultValue={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <FontAwesomeIcon
            icon={icon}
            style={{
              position: "absolute",
              right: "-12%",
              top: "30%",
              width: "40%",
              height: "40%",
            }}
          />
        </div>
      ) : (
        <input value={capitalizeString(formType)} type={type} />
      )}
      {type === AuthDataEnum.password && formType === AuthActionEnum.login ? (
        <span onClick={handlePassword}>Forgot password</span>
      ) : null}
      <style jsx>{`
        .auth-input {
          margin: 0.4rem 0;
          display: flex;
          flex-direction: column;
        }

        .auth-input-box {
          position: relative;
        }

        input {
          font-size: 1.2rem;
          box-sizing: border-box;
          padding: 3%;
          border: hidden;
          width: 100%;
          margin: 3% 0;
        }

        input[type="submit"] {
          background-color: #04aa6d;
          color: white;
          cursor: pointer;
          margin: 5% 0 0 0;
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
