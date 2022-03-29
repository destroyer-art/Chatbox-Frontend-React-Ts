import Chatbox from "@features/Chatbox/Index";
import { getHistory } from "@api/get-message";
import { IStaticProps } from "@features/Conversation/Type";

const Index = ({ conversationHistory }: IStaticProps) => {
  return (
    <div className="container">
      <Chatbox conversationHistory={conversationHistory} />
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
