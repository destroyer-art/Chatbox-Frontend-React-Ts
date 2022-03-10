interface IUserLists {
  icon: string
  nickName: string
  quote: string
}

const UserLists = ({ icon, nickName, quote }: IUserLists) => {
  return (
    <div>
      <div className="userLists">
        <img src="favicon.ico"></img>
        <span>{nickName}</span>
        <p>{quote}</p>
      </div>

      <style jsx>{`
        img {
          width: 40%;
        }

        span {
          color: black;
        }
        @media (max-width: 600px) {
          .userLists {
            background: black;
          }
        }
      `}</style>
    </div>
  )
}
export default UserLists
