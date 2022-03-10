interface IUserLists {
  icon: string
  nickName: string
  quote: string
}

const Conversation = ({ icon, nickName, quote }: IUserLists) => {
  return (
    <div className="conversation">
      <h1>Conversation</h1>
      <style jsx>{``}</style>
    </div>
  )
}
export default Conversation
