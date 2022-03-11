const Conversation = () => {
  return (
    <div className="conversation">
      {/* <User />
      <Message />
      <Typing /> */}
      <style jsx>{`
        .conversation {
          background: -webkit-linear-gradient(
            360deg,
            #1c1c1c 10%,
            #494949 360%
          );
          background: -moz-linear-gradient(360deg, #1c1c1c 10%, #494949 360%);
          background: linear-gradient(360deg, #1c1c1c 10%, #494949 360%);
          width: 80%;
        }
      `}</style>
    </div>
  )
}
export default Conversation
