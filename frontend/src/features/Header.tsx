import Heading from "@components/Heading"

const Header = () => {
  return (
    <div className="header">
      <Heading text={"Chat Box App"} />
      <div className="right">Settings</div>
      <style jsx>{`
        .header {
          background: -webkit-linear-gradient(
            360deg,
            #fd6f46 10%,
            #fb9832 360%
          ); /* Chrome 10+, Saf5.1+ */
          background: -moz-linear-gradient(
            360deg,
            #fd6f46 10%,
            #fb9832 360%
          ); /* FF3.6+ */
          background: linear-gradient(360deg, #fd6f46 10%, #fb9832 360%);
          padding: 0.025% 1%;
          display: flex;
          justify-content: space-between;
        }
        .right {
        }
      `}</style>
    </div>
  )
}
export default Header
