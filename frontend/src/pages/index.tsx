import { useAppSelector } from '@app/hook';
import { AuthTokenEnum } from '@components/Auth/AuthConstant';
import Auth from '@features/Auth';
import { selectUser } from '@features/Auth/Slice';
import Conversation from '@features/Conversation';

const Index = () => {
  const currentUser = useAppSelector(selectUser);
  return (
    <div className="container">
      {currentUser.username ? (
        <Conversation
          username={currentUser.username}
          token={`${AuthTokenEnum.bearerToken} ${currentUser.token} `}
        />
      ) : (
        <Auth />
      )}
      <style jsx>{`
        .container {
          margin: 3rem;
          justify-content: center;
          height: calc(100% - 6rem);
        }

        @media only screen and (max-width: 700px) {
          .container {
            margin: 0%;
            height: calc(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
