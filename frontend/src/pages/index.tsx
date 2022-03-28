import Conversation from "@features/Conversation/index";
import Header from "@features/Header";
import { getHistory } from "@api/get-message";
import { IStaticProps } from "@features/Conversation/State";
import dynamic from "next/dynamic";

const Index = ({ conversationHistory }: IStaticProps) => {
  const DynamicImportContact = dynamic(() => import("@features/Contact/Index"));
  return (
    <div className="container">
      <Header />
      <div className="chatbox">
        <DynamicImportContact />
        <Conversation conversationHistory={conversationHistory} />
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

export async function getStaticProps() {
  const initalProp = async () => await getHistory();
  return initalProp().then((res) => {
    return {
      props: {
        conversationHistory: res,
      },
    };
  });
}
export default Index;
