interface IUserLists {
  icon: string
  nickName: string
  quote: string
}

const UserLists = ({ icon, nickName, quote }: IUserLists) => {
  const imageUrl = icon
    ? icon
    : "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
  return (
    <div>
      <div className="contact">
        <img src={imageUrl} />
        <div className="contact-details">
          <div className="name">{nickName}</div>
          <div className="desc">{quote}</div>
        </div>
      </div>
      <hr />
      <style jsx>{`
        .contact {
          display: flex;
          flex-direction: row;
          margin: 8% 3%;
          margin-bottom: 1px solid red;
        }
        img {
          border-radius: 50%;
          width: 30%;
        }
        .contact-details {
          margin: 8%;
          word-wrap: break-word;
          width: 50%;
        }
        .name {
          font-size: 1.5rem;
          margin-bottom: 5%;
        }
        .desc {
          color: #d3d3d3;
        }
      `}</style>
    </div>
  )
}
export default UserLists
