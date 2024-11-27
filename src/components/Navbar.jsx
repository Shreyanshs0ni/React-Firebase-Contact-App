import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="m-4 flex h-[60px] items-center justify-center gap-2 rounded-lg bg-[orange]">
      <img className="h-[30px] w-[30px]" src={Logo} alt="logo" />
      <h1>Contact App</h1>
    </div>
  );
};

export default Navbar;
