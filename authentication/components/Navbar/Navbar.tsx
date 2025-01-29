import Link from "next/link";

const Navbar = () => {
  return (
    <div className="all-links">
      <Link href={"/"}>Home</Link>
      <Link href={"/signup"}>SignUp</Link>
      <Link href={"/login"}>Login</Link>
    </div>
  );
};

export default Navbar;
