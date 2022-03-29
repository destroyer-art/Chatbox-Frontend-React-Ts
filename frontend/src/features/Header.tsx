import Heading from "@components/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
interface IProps {
  handleShowContact: () => void;
}
const Header = ({ handleShowContact }: IProps) => {
  const header = "Chat Box";
  return (
    <div className="header">
      <div className="show-contact">
        <FontAwesomeIcon
          icon={faArrowCircleLeft}
          style={{ fontSize: "30px" }}
          onClick={handleShowContact}
        />
      </div>

      <Heading text={header} />
      <div className="right">
        <FontAwesomeIcon icon={faSliders} style={{ fontSize: "30px" }} />
      </div>

      <style jsx>{`
        .header {
          background-color: var(--dark-grey-bg);
          padding: 1%;
          display: flex;
          justify-content: flex-end;
          font-size: 20px;
          color: white;
        }

        .show-contact {
          display: none;
        }

        @media only screen and (max-width: 700px) {
          .header {
            padding: 5%;
          }

          .show-contact {
            display: block;
            position: absolute;
            padding: 0 1.2rem;
            left: 0;
          }
        }
      `}</style>
    </div>
  );
};
export default Header;
