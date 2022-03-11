import SearchInput from "@components/SearchInput"
import UserLists from "@components/UserLists"

const Contacts = () => {
  const users = [
    {
      icon: "",
      nickName: "Anna Bru",
      quote: "Love beach",
    },
    {
      icon: "",
      nickName: "Bathman",
      quote: "Love life",
    },
  ]

  return (
    <div className="contact">
      <SearchInput />
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
          width: 20%;
          background: white;
        }

        input {
          width: 80%;
        }
      `}</style>
    </div>
  )
}

export default Contacts
