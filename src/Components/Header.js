import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setStartTask } from "../redux/taskSlice";

function Header() {
  const dispatch = useDispatch();

  const location = useLocation();

  const pathname = location.pathname;

  return (
    <div className="headercontainer">
      <Link to="/">
        <div className="logoContainer">
          <div className="logo-icon"></div>
          <p className="logo-text">Doist</p>
        </div>
      </Link>

      <div className="routes">
        <Link to="/">
          <p>Home</p>
        </Link>

        {pathname === "/" && (
          <Link to="/main">
            <button className="btn btn-header">try</button>
          </Link>
        )}
        {pathname === "/main" && (
          <button
            onClick={() => dispatch(setStartTask())}
            className="btn btn-header"
          >
            Add new Task
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
