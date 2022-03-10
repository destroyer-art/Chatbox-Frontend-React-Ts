import Conversation from "@features/Conversation"
import UserLog from "@features/UserLog"

const Index = () => {
  return (
    <div className="index">
      <UserLog />
      <Conversation icon={""} nickName={""} quote={""} />
      <style jsx>{`
        .index {
          display: flex;
          flex-direction: row;
          margin: 5%;
        }
      `}</style>
    </div>
  )
}

export default Index
