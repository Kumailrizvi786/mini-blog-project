import { Link } from "react-router-dom";
import Create from "./Create";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Rizvi Blog </h1>
            <div className="links">
                <Link to = "./"> Home </Link>
                <Link to = "/Create"> Create a new Blog</Link>
                <Link to = "./BlogDetail/"> Blogs By Id</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;
