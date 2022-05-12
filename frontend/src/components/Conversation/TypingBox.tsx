import InputBar from "@components/InputBar";
import { IConversationState } from "@features/Conversation/Type";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  inputMsg: string;
  handleMessage: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon: IconDefinition;
}

const TypingBox = ({ icon, inputMsg, handleMessage, handleChange }: IProps) => {
  return (
    <div className="typing-box">
      <InputBar
        placeholder={"Type new message ..."}
        type={"text"}
        bgColor={"var(--elegant-green-bg)"}
        icon={icon}
        handleInput={handleMessage}
        handleChange={handleChange}
        inputVal={inputMsg}
      />
      <style jsx>{`
        .typing-box {
          position: absolute;
          bottom: 0;
          width: 100%;
        }
      `}</style>
    </div>
  );
};
export default TypingBox;
