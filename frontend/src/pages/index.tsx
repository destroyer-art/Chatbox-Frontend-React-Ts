import { getConversationHistory } from "@api/get-message";
import Auth from "@features/Auth";
import Chatbox from "@features/Chatbox/Index";
import { IStaticProps } from "@features/Conversation/Type";
import { useEffect, useState } from "react";
import { getCookie } from "src/helper/cookies";

const Index = ({ conversationHistory }: IStaticProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // check if user cookie is valid, will show conversation
    getCookie("username") ? setIsLoggedIn(true) : null;
  });
  return (
    <div className="container">
      {isLoggedIn ? (
        <Chatbox conversationHistory={conversationHistory} />
      ) : (
        <Auth />
      )}

      <style jsx>{`
        .container {
          margin: 3rem;
          justify-content: center;
          height: calc(100% - 6rem);
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

export async function getStaticProps() {
  const conversation = await getConversationHistory();
  return {
    props: {
      conversationHistory: conversation,
    },
  };
}

export default Index;
