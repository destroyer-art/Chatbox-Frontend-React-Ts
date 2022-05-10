import { postAuth } from "@api/auth";
import Heading from "@components/Heading";
import { fa0, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AuthAction from "./AuthAction";
import { AuthActionEnum } from "./AuthConstant";
import AuthInput from "./AuthInput";

const AuthForm = () => {
  const initialAuthObj = {
    title: AuthActionEnum.login,
    description: "Not registered? Create an account",
  };

  const [authObj, setAuthObj] = useState(initialAuthObj);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password ? event.target.password.value : "",
      type: authObj.title,
    };
    postAuth(data);
  };

  const handleClick = () => {
    if (authObj.title === "Login") {
      setAuthObj({
        title: AuthActionEnum.signup,
        description: "Already has account? Lets log in",
      });
    } else {
      setAuthObj(initialAuthObj);
    }
  };
  const forgotPassword = () => {
    setAuthObj({
      title: AuthActionEnum.resetPassword,
      description: "Already has account? Lets log in",
    });
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <Heading text={`${authObj.title} Form`} />

      <AuthInput type={"email"} icon={faUser} />

      {authObj.title !== AuthActionEnum.resetPassword && (
        <AuthInput
          type={"password"}
          formType={authObj.title}
          icon={faKey}
          handlePassword={forgotPassword}
        />
      )}

      <AuthInput type={"submit"} formType={authObj.title} icon={fa0} />
      <AuthAction text={authObj.description} handleClick={handleClick} />
      <style jsx>{`
        .auth-form {
          width: 50%;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          align-content: center;
          margin: 0 auto;
        }

        a {
          text-decoration: underline;
          color: blue;
          cursor: pointer;
        }
      `}</style>
    </form>
  );
};

export default AuthForm;
