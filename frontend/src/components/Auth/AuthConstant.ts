/* eslint-disable */
export enum AuthActionEnum {
  resetPassword = 'resetPassword',
  login = 'login',
  signup = 'register',
}

export enum AuthDataEnum {
  email = 'email',
  password = 'password'
}

export const AuthActionDescription = {
  [AuthActionEnum.signup]: 'Already has account? Lets log in',
  [AuthActionEnum.login]: 'Not registered? Create an account',
  [AuthActionEnum.resetPassword]:
    'Remember your password? Return back to login',
};

export enum AuthTokenEnum {
  bearerToken = 'Bearer',
}

export const AuthCoverTitle = 'Chat Box App';
