import { postAuth } from '@api/auth';
import { useAppDispatch } from '@app/hook';
import Heading from '@components/Heading';
import { fa0, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, useState } from 'react';
import AuthAction from './AuthAction';
import {
  AuthActionDescription,
  AuthActionEnum,
  AuthDataEnum,
} from './AuthConstant';
import AuthInput from './AuthInput';
import { set } from '@features/Auth/Slice';

const AuthForm = () => {
  const initialAuthObj = {
    title: AuthActionEnum.login,
    description: AuthActionDescription[AuthActionEnum.login],
  };
  const dispatch: Dispatch<any> = useAppDispatch();
  const [authObj, setAuthObj] = useState(initialAuthObj);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password ? event.target.password.value : '',
      type: authObj.title,
    };
    const response = await postAuth(data);
    if (response.accessToken) {
      dispatch(set({ username: response.email, token: response.accessToken }));
    } else {
      alert(response.message);
    }
  };

  const handleClick = () => {
    if (authObj.title === AuthActionEnum.login) {
      setAuthObj({
        title: AuthActionEnum.signup,
        description: AuthActionDescription[AuthActionEnum.signup],
      });
    } else {
      setAuthObj(initialAuthObj);
    }
  };
  const forgotPassword = () => {
    setAuthObj({
      title: AuthActionEnum.resetPassword,
      description: AuthActionDescription[AuthActionEnum.resetPassword],
    });
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <Heading text={`${authObj.title} Form`} />

      <AuthInput
        type={AuthDataEnum.email}
        icon={faUser}
        formType={authObj.title}
      />

      {authObj.title !== AuthActionEnum.resetPassword && (
        <AuthInput
          type={AuthDataEnum.password}
          formType={authObj.title}
          icon={faKey}
          handlePassword={forgotPassword}
        />
      )}

      <AuthInput type={'submit'} formType={authObj.title} icon={fa0} />
      <AuthAction text={authObj.description} handleClick={handleClick} />
      <style jsx>{`
        .auth-form {
          width: 50%;
          display: flex;
          flex-direction: column;
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
