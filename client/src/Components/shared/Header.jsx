function Header({ text, bgColor }) {
  return (
    <>
      <div className={`w-100 bg-${bgColor}`}>
        <div className="mx-5 my-2">
          <h3>{text}</h3>
        </div>
      </div>
    </>
  );
}
Header.defaultProps = {
  text: "Intereact",
  bgColor: "none",
};
export default Header;
