import { Link, Outlet } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="flex justify-between items-center p-5 bg-[#282c34]">
        <nav>
          <ul className="list-none inline">
            <li className="inline mx-[10px] text-white">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link className="inline mx-[10px] text-white" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="inline mx-[10px] text-white" to="/portfolio">
                Portfolio
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default Header;
