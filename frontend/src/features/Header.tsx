import Heading from "@components/Heading"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSliders } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  const header = "Chat Box"
  return (
    <div className="header">
      <Heading text={header} />
      <div className="right">
        <FontAwesomeIcon icon={faSliders} style={{ fontSize: "30px" }} />
      </div>
      <style jsx>{`
        .header {
          background-color: #282a35;
          padding: 1%;
          display: flex;
          justify-content: flex-end;
          font-size: 20px;
          color: white;
        }

        @media only screen and (max-width: 700px) {
          .header {
            padding: 5%;
          }
        }
      `}</style>
    </div>
  )
}
export default Header
