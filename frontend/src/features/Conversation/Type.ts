import { IUserData } from '@components/UserLists';

export interface IConversationState {
  id: string;
  text: string;
  time: string;
  sent: boolean;
}

export interface IResponseState {
  message: string;
  statusCode: number;
}

export interface IStaticProps {
  conversationHistory: IConversationState[];
}

export interface IConversationProps extends IStaticProps {
  currentUser: IUserData;
}
