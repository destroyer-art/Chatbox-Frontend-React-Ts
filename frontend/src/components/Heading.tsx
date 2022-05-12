import { capitalizeString } from "@helper/common";

interface IProps {
  text: string;
}

const Heading = ({ text }: IProps) => {
  return (
    <div>
      {capitalizeString(text)}
      <style jsx>{`
        div {
          font-size: 2rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
};
export default Heading;
