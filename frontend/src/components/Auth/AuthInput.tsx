import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface IProps {
  type: string;
  formType?: string;
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
        <input value={formType} type={type} />
      )}
      {type === "password" && formType === "Login" ? (
        <a onClick={handlePassword}>Forgot password</a>
      ) : null}
      <style jsx>{`
        .auth-input {
          margin: 0.4rem 0;
          display: flex;
          flex-direction: column;
          position: relative;
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
          margin: 5% 0;
        }

        a {
          margin-top: -2%;
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
