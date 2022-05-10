import AuthForm from "@components/Auth/AuthForm";

const Auth = () => {
  return (
    <div className="auth-div">
      <AuthForm />
      <style jsx>{`
        .auth-div {
          width: 100%;
          margin: 10% 0;
        }
      `}</style>
    </div>
  );
};

export default Auth;
