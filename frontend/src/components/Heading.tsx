interface IProps {
  text: string
}

const Heading = ({ text }: IProps) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}
export default Heading
