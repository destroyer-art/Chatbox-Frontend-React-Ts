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
  const [checkboxStatus, setCheckboxStatus] = useState(false);
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
      isRememberChosen:checkboxStatus
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

      <label>
        <input type={'checkbox'} defaultChecked={checkboxStatus} onChange={() => setCheckboxStatus(!checkboxStatus)} name='isRememberChosen'/>Remember Me
      </label>
      <AuthInput type={'submit'} formType={authObj.title} icon={fa0} />
      <AuthAction text={authObj.description} handleClick={handleClick} />
      <style jsx>{`
        @use 'src/styles/_mixin.module.scss' as mixin;
        .auth-form {
          width: 50%;
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
          padding: 5%;
        }

        a {
          text-decoration: underline;
          color: blue;
          cursor: pointer;
        }
        label {
          text-align: left;
          color: grey;
          font-size: 1.2rem;
          margin-left:3%;
        }
        @include mixin.breakpoint(phoneOnly) {
            .auth-form {
              width:100%;
          }
        }
      `}</style>
    </form>
  );
};

export default AuthForm;
