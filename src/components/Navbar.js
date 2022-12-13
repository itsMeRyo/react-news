import { DownSquareOutlined } from "@ant-design/icons";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ background: "black", color: "white" }}
    >
      <a className="navbar-brand " href="/">
        <span className="logo h1">papers.id</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <DownSquareOutlined />
      </button>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav sp-font h5">
          <li className="nav-item mx-2">
            <a className="nav-link" href="/Business">
              Business
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="/Entertainment">
              Entertainment
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="/Health">
              Health
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="/Science">
              Science
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="/Sports">
              Sports
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="/Technology">
              Technology
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
