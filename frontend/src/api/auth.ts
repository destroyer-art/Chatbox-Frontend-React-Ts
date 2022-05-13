import { AuthActionEnum, AuthDataEnum } from '@components/Auth/AuthConstant';
import { backendUrl } from './constant';

interface IUserData {
  email: string;
  password?: string;
  type: AuthActionEnum;
}

export async function postAuth(userData: IUserData) {
  if (!Object.values(AuthActionEnum)?.includes(userData.type)) {
    throw new Error('Invalid auth action');
  }
  const mapper = {
    [userData.type]: {
      validateKeyValue: [AuthDataEnum.email, AuthDataEnum.password],
      endpoint: `${backendUrl}auth/${userData.type}`,
    },
  };
  if (userData.type === AuthActionEnum.resetPassword) {
    mapper[AuthActionEnum.resetPassword].validateKeyValue = [
      AuthDataEnum.email,
    ];
  }
  const validationFieldArray = mapper[userData.type].validateKeyValue;
  for (let i = 0; i < validationFieldArray.length; i++) {
    if (
      validationFieldArray[i] in userData ||
      !userData[validationFieldArray[i]]
    ) {
      throw new Error(`${validationFieldArray[i]} field must not be empty!`);
    }
  }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  };

  const res = await fetch(mapper[userData.type].endpoint, options);
  const data = await res.json();
  return data;
}
