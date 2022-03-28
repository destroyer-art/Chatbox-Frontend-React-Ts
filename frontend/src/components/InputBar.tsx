import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  placeholder: string;
  type: string;
  icon: IconDefinition;
  bgColor?: string;
  handleInput: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputVal: string;
}

const InputBar = ({
  placeholder,
  type,
  icon,
  bgColor,
  handleInput,
  handleChange,
  inputVal,
}: IProps) => {
  return (
    <div className="main">
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={inputVal}
      />
      <FontAwesomeIcon
        icon={icon}
        style={{
          position: "absolute",
          right: "5%",
          top: "30%",
        }}
        onClick={handleInput}
      />

      <style jsx>{`
        .main {
          position: relative;
        }
        input {
          font-size: 1.2rem;
          box-sizing: border-box;
          padding: 3%;
          border: hidden;
          background-color: ${bgColor ? bgColor : "transparent"};
          width: 100%;
        }
        input:hover {
          border: 3px solid green;
        }
      `}</style>
    </div>
  );
};
export default InputBar;
