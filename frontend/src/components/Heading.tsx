interface IProps {
  text: string;
}

const Heading = ({ text }: IProps) => {
  return (
    <div>
      {text}
      <style jsx>{`
        div {
          font-size: 2rem;
          padding: 0 5%;
        }
      `}</style>
    </div>
  );
};
export default Heading;
