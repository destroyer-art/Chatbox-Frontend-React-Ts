import UserLists from "@components/UserLists";
import InputBar from "@components/InputBar";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useState } from "react";
import { selectUserList } from "./Slice";
import { useAppSelector } from "@app/hook";
import { IUserListState } from "./Type";
import Conversation from "@features/Conversation";
import { getHistory } from "@api/get-message";
import { IStaticProps } from "@features/Conversation/Type";
import Header from "@features/Header";
import LandingPage from "@features/LandingPage";

const Chatbox = ({ conversationHistory }: IStaticProps) => {
  const users = useAppSelector(selectUserList);
  const [input, setInput] = useState("");
  const [currentUser, setCurrentUser] = useState({} as IUserListState);

  // todo search function
  const handleInput = () => {
    setInput("");
  };

  return (
    <div className="content">
      <Header handleShowContact={() => setCurrentUser({} as IUserListState)} />
      <div className="content-bar">
        <div className="contact">
          <InputBar
            placeholder={"Search User ..."}
            type={"search"}
            icon={faSearch}
            bgColor="var(--light-grey-bg)"
            handleInput={handleInput}
            handleChange={(event: ChangeEvent<HTMLInputElement>) =>
              setInput(event.target.value)
            }
            inputVal={input}
          />
          {users.map((user, index) => (
            <UserLists
              icon={user.icon}
              nickName={user.nickName}
              quote={user.quote}
              key={`"dynamicImportUserList"${index}`}
              handleClick={() => setCurrentUser(user)}
            />
          ))}
        </div>
        <div className="conversation">
          {currentUser.nickName ? (
            <Conversation
              conversationHistory={conversationHistory}
              currentUser={currentUser}
            />
          ) : (
            <LandingPage />
          )}
        </div>
      </div>
      <style jsx>{`
        .content {
          display: flex;
          height: 100%;
          flex-direction: column;
          width: 100%;
        }
        .content-bar {
          display: flex;
          height: 100%;
        }
        .contact {
          width: 40%;
          background-color: white;
        }
        .conversation {
          background-color: var(--light-green-bg);
          width: 80%;
          position: relative;
        }
        @media only screen and (max-width: 700px) {
          .contact {
            width: ${!currentUser.nickName ? "100%" : "0"};
          }

          .conversation {
            display: ${currentUser.nickName ? "block" : "none"};
            width: ${currentUser.nickName ? "100%" : "none"};
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

export default Chatbox;
