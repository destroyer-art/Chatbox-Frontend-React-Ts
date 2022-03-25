import Conversation from "@features/Conversation/index";
import Contacts from "@features/Contacts";
import Header from "@features/Header";

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
          margin: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: calc(100% - 6rem);
        }

        .chatbox {
          display: flex;
          flex-direction: row;
          height: 100%;
        }

        @media only screen and (max-width: 700px) {
          .container {
            margin: 0%;
            height: calc(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
