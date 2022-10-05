import { postAuth } from '@api/auth';
import { useAppDispatch } from '@app/hook';
import Heading from '@components/Heading';
import {
  fa0,
  faKey,
  faUser,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Dispatch, useState } from 'react';
import AuthAction from './AuthAction';
import {
  AuthActionDescription,
  AuthActionEnum,
  AuthDataEnum,
} from './AuthConstant';
import AuthInput from './AuthInput';
import { set } from '@features/Auth/Slice';
import { logInWithGoogle } from 'src/services/firebase';

const AuthForm = () => {
  const [checkboxStatus, setCheckboxStatus] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
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
      isRememberChosen: checkboxStatus,
    };
    const response = await postAuth(data);
    if (response.accessToken) {
      dispatch(set({ username: response.email, token: response.accessToken }));
    } else {
      alert(response.message);
    }
  };

  const handleSignUp = () => {
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

  const handleGoogleLogin = async () => {
    const googleUserCredential = await logInWithGoogle();
    dispatch(set(googleUserCredential));
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
          toggleType={passwordShown ? 'text' : AuthDataEnum.password}
        />
      )}
      <div className="password-handler">
        <label>
          <input
            type={'checkbox'}
            defaultChecked={passwordShown}
            onChange={() => setPasswordShown(!passwordShown)}
          />
          Show Password
        </label>
        <label>
          <input
            type={'checkbox'}
            defaultChecked={checkboxStatus}
            onChange={() => setCheckboxStatus(!checkboxStatus)}
            name="isRememberChosen"
          />
          Remember Me
        </label>
      </div>

      <AuthInput type={'submit'} formType={authObj.title} icon={fa0} />

      <div className="google-option">
        <div className={'horizontal-line'}></div>
        <div className={'middle-word'}>OR</div>
        <div className={'horizontal-line'}></div>
      </div>
      <AuthAction
        text={'Log In With Google '}
        handleClick={handleGoogleLogin}
        icon={faGoogle as IconDefinition}
      />
      <AuthAction text={authObj.description} handleClick={handleSignUp} />
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
        .password-handler {
          color: grey;
          font-size: 1.2rem;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        @include mixin.breakpoint(tabletLandscape) {
          .auth-form {
            width: 100%;
          }
        }

        .google-option {
          display: flex;
          justify-content: space-around;
          flex-flow: row wrap;
          align-items: stretch;
          width: 100%;
          margin-top: 10%;
        }

        .horizontal-line {
          flex-grow: 1;
          flex-shrink: 1;
          height: 1px;
          position: relative;
          top: 0.45em;
          background-color: grey;
          margin: 0 5%;
        }
      `}</style>
    </form>
  );
};

export default AuthForm;
