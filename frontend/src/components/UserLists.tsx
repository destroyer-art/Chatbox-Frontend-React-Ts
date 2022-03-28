import { defaultImageUrl } from "@api/get-contact";

interface IUserLists {
  icon: string;
  nickName: string;
  quote: string;
}

const UserLists = ({ icon, nickName, quote }: IUserLists) => {
  const imageUrl = icon ? icon : defaultImageUrl;
  return (
    <div>
      <div className="contact">
        <img src={imageUrl} alt="profilePic" />
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
          max-width: 20%;
        }
        .contact-details {
          margin: 8% 1%;
          max-width: 20vw;
        }
        .name {
          font-size: 1.5rem;
          margin-bottom: 5%;
        }
        .desc {
          color: grey;
        }
        @media only screen and (max-width: 700px) {
          .desc {
            font-size: 1.5rem;
          }

          .contact-details {
            max-width: 60vw;
          }

          img {
            height: 20%;
          }
        }
      `}</style>
    </div>
  );
};
export default UserLists;
