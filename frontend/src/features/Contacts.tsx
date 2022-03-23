import { users } from "@api/get-contact"
import InputBar from "@components/InputBar"
import UserLists from "@components/UserLists"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Contacts = () => {
  // todo search function
  const handleInput = () => console.log("search")
  return (
    <div className="contact">
      <InputBar
        placeholder={"Search User ..."}
        type={"search"}
        icon={faSearch}
        bgColor="#F5F5F5"
        handleInput={() => handleInput}
        handleChange={() => handleInput}
      />
      {users.map((user, index) => (
        <UserLists
          icon={user.icon}
          nickName={user.nickName}
          quote={user.quote}
          key={"userLists-" + index}
        />
      ))}
      <style jsx>{`
        .contact {
          width: 40%;
          height: 100%;
          background-color: white;
        }
        @media only screen and (max-width: 700px) {
          .container {
            height: 100vh;
            margin: auto;
            background-color: white;
            margin: auto;
          }
          .contact {
            width: 100%;
          }

          .conversation {
            width: 0%;
          }
        }
      `}</style>
    </div>
  )
}

export default Contacts
