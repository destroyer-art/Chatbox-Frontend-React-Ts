import { users } from "@api/get-contact";
import InputBar from "@components/InputBar";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import { ChangeEvent, useState } from "react";

const Contacts = () => {
  const [input, setInput] = useState("");
  // todo search function
  const handleInput = () => {
    setInput("");
  };
  const DynamicImportUserList = dynamic(() => import("@components/UserLists"));

  return (
    <div className="contact">
      <InputBar
        placeholder={"Search User ..."}
        type={"search"}
        icon={faSearch}
        bgColor="#F5F5F5"
        handleInput={handleInput}
        handleChange={(event: ChangeEvent<HTMLInputElement>) =>
          setInput(event.target.value)
        }
        inputVal={input}
      />
      {users.map((user, index) => (
        <DynamicImportUserList
          icon={user.icon}
          nickName={user.nickName}
          quote={user.quote}
          key={`"dynamicImportUserList"${index}`}
        />
      ))}
      <style jsx>{`
        .contact {
          width: 40%;
          height: 100%;
          background-color: white;
        }
        @media only screen and (max-width: 700px) {
          .contact {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Contacts;
