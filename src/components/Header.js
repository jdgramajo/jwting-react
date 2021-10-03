import { useSelector } from "react-redux";

import logo from "../jwt.svg";

const Header = () => {
  const { userInfo } = useSelector((store) => store);

  const menuElements = userInfo?.nameName ? (
    <ul className="navbar-nav">
      <li key="active" className="nav-item align-self-end">
        <a href="/?status=active" className="nav-link active">Active</a>
      </li>
      <li key="inactive" className="nav-item align-self-end">
        <a href="/?status=inactive" className="nav-link">Inactive</a>
      </li>
    </ul>
  ) : (
    <></>
  );

  return (
    <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="" width="60pem" height="35pem" />
        </a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-md-end" id="navbarCollapse">
          {menuElements}
        </div>
      </div>
    </nav>
  )
}

export default Header;
