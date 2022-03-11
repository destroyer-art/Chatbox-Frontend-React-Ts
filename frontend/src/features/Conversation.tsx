import { defaultImageUrl } from "@api/get-contact"
import { messages } from "@api/get-message"
import DisplayText from "@components/DisplayText"
import InputBar from "@components/InputBar"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"

const Conversation = () => {
  return (
    <div className="conversation">
      <div className="topBar">
        <img src={defaultImageUrl} alt="User pictures" />
        <span>User A</span>
      </div>
      <div className="messageBar">
        {messages.map((message, index) => (
          <div className={message.type}>
            <DisplayText message={message} key={"displayText" + index} />
          </div>
        ))}
      </div>
      <div className="inputBar">
        <InputBar
          placeholder={"Type new message ..."}
          type={"text"}
          bgColor={"#cccfbc"}
          icon={faArrowRightFromBracket}
        />
      </div>

      <style jsx>{`
        .conversation {
          background-color: #ededed;
          width: 80%;
          position: relative;
        }
        .topBar {
          background-color: #cccfbc;
          display: flex;
          flex-direction: row;
          padding: 1%;
          max-height: 10vh;
        }
        img {
          width: 5%;
          border-radius: 50%;
        }
        span {
          margin: 2%;
        }
        .inputBar {
          position: absolute;
          bottom: 0;
          width: 100%;
        }

        .messageBar {
          padding: 1%;
          diplay: flex;
          flex-direction: column;
          word-wrap: break-word;
        }

        @media only screen and (max-width: 700px) {
          .conversation {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
export default Conversation
