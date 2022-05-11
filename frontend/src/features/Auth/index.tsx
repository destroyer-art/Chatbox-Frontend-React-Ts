import AuthForm from "@components/Auth/AuthForm";

const Auth = () => {
  return (
    <div className="auth-div">
      <AuthForm />
      <style jsx>{`
        .auth-div {
          width: 100%;
          margin: 20% 0;
        }

        @media only screen and (max-width: 600px) {
          .auth-div {
            margin: 50% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Auth;
