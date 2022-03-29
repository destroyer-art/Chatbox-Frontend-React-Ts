import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingPage = () => {
  return (
    <div className="landing">
      <FontAwesomeIcon icon={faFaceFrown} style={{ fontSize: "10rem" }} />
      <h1>No user is selected</h1>
      <p>Click any user to view conversation</p>
      <style jsx>{`
        .landing {
          text-align: center;
          margin: 50% auto;
        }
      `}</style>
    </div>
  );
};
export default LandingPage;
