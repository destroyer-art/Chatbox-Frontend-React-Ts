import DisplayText from '@components/DisplayText';
import { IConversationState } from '@features/Conversation/Type';

interface IProps {
  conversations: IConversationState[];
}

const MessageBar = ({ conversations }: IProps) => {
  return (
    <div className="messageBar">
      {conversations.length > 0
        ? conversations.map((message, index) => (
            <div key={'displayText' + index}>
              <DisplayText message={message} />
            </div>
          ))
        : null}
      <style jsx>{`
        .messageBar {
          display: flex;
          flex-direction: column;
          margin: 2% 0;
        }
      `}</style>
    </div>
  );
};
export default MessageBar;
