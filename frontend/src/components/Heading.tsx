interface IProps {
  text: string
  size: number
}

const Heading = ({ text, size }: IProps) => {
  return (
    <div>
      <h1>{text}</h1>
      <style jsx>{`
        h1 {
          font-size: ${size}em;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
    </div>
  )
}
export default Heading
