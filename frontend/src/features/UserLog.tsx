import UserLists from "@components/UserLists"

const UserLog = () => {
  const users = [
    {
      icon: "A",
      nickName: "A",
      quote: "Love life",
    },
    {
      icon: "A",
      nickName: "B",
      quote: "Love beach",
    },
  ]
  return (
    <div className="userLog">
      <input type="text" name="user" id="user" placeholder="Search users" />
      {users.map((user, index) => (
        <UserLists
          icon={user.icon}
          nickName={user.nickName}
          quote={user.quote}
          key={"userLists-" + index}
        />
      ))}
      <style jsx>{`
        .userLog {
          width: 20%;
          border-right: solid grey;
        }

        input {
          width: 80%;
        }
      `}</style>
    </div>
  )
}

export default UserLog
