import AuthCover from '@components/Auth/AuthCover';
import AuthForm from '@components/Auth/AuthForm';

const Auth = () => {
  return (
    <div className="auth-div">
      <AuthCover/>
      <AuthForm />
      <style jsx>{`
        .auth-div {
          background-color: white;
          display: flex;
          flex-direction: row;
          text-align: center;
          box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          border-radius: var(--rounded-edge);
          overflow: hidden;
          margin: 10% 5%;
        }
      `}</style>
    </div>
  );
};

export default Auth;
