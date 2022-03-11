import Conversation from "@features/Conversation"
import Contacts from "@features/Contacts"
import Header from "@features/Header"

const Index = () => {
  return (
    <div className="container">
      <Header />
      <div className="chatbox">
        <Contacts />
        <Conversation />
      </div>
      <style jsx>{`
        .container {
          height: 80vh;
          background-color: white;
          margin: 5%;
        }

        .chatbox {
          display: flex;
          flex-direction: row;
          height: 100%;
        }

        @media only screen and (max-width: 700px) {
          .container {
            height: 100vh;
            margin: auto;
          }
        }
      `}</style>
    </div>
  )
}

export default Index
