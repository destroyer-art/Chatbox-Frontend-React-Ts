import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface IProps {
  placeholder: string
  type: string
  icon: IconDefinition
  bgColor?: string
}

const InputBar = ({ placeholder, type, icon, bgColor }: IProps) => {
  return (
    <div className="main">
      <input type={type} placeholder={placeholder} />
      <FontAwesomeIcon
        icon={icon}
        style={{
          fontSize: "30px",
          position: "absolute",
          right: "5%",
          top: "30%",
        }}
      />

      <style jsx>{`
        .main {
          display: flex;
          flex-direction: row;
          position: relative;
          max-height: 10vh;
        }
        input {
          font-size: 2rem;
          width: 100%;
          padding: 3%;
          border: hidden;
          background-color: ${bgColor ? bgColor : "transparent"};
        }
        input:hover {
          border: 5px solid red;
        }
      `}</style>
    </div>
  )
}
export default InputBar
