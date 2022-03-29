import Image from "next/image";
export interface IUserLists {
  icon: string;
  nickName: string;
  quote: string;
}
interface IUserListsProps extends IUserLists {
  handleClick: () => void;
}

const UserLists = ({ icon, nickName, quote, handleClick }: IUserListsProps) => {
  return (
    <div>
      <div className="contact" onClick={handleClick}>
        <Image
          src={icon || "/photo.png"}
          className="rounded-circle"
          width={80}
          height={10}
          priority
          alt={"user profile picture"}
        />
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
          cursor: pointer;
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
