import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
interface IProps {
  username: string;
  handleLogout: () => void;
  icon: IconDefinition;
}

const TopBar = ({ username, handleLogout, icon }: IProps) => {
  return (
    <div className="topBar">
      <Image
        src={"/photo.png"}
        className="rounded-circle"
        width={30}
        height={30}
        alt={"user profile picture"}
      />
      <span>{username}</span>
      <FontAwesomeIcon
        icon={icon}
        style={{
          position: "absolute",
          right: "2%",
        }}
        onClick={handleLogout}
      />
      <style jsx>{`
        span {
          margin: 0 2%;
        }
        .topBar {
          background-color: var(--elegant-green-bg);
          display: flex;
          flex-direction: row;
          padding: 1%;
          align-items: center;
          position: relative;
        }
      `}</style>
    </div>
  );
};
export default TopBar;
