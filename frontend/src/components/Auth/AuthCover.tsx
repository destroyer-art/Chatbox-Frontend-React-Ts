import { AuthCoverTitle } from "./AuthConstant";
const AuthCover = () => {
  const authTitle: string[] = AuthCoverTitle.split(' ');
  return (
    <div className="main">
      {authTitle.map((word: string, index: number) => (
        <div key={'authTitle' + index} className='auth-title'>
          {word.toUpperCase()} <br />
        </div>))
      }
      <style jsx>{`
        @use 'src/styles/_mixin.module.scss' as mixin;
        .main {
          background: url("cover.png") no-repeat center bottom;
          width: 50%;
          margin-top: 6%;
          padding:0 5%;
          @include mixin.breakpoint(phoneOnly) {
            display: none;
          }
        }
        .auth-title {
          text-shadow: 3px 3px 0px lightblue;
          margin: 0 auto;
          font-size: 4rem;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default AuthCover;
