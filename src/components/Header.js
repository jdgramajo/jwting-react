import logo from "../jwt.svg";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark">
      <div className="container">
        <a href="#" className="navbar-brand">
          <img src={logo} alt="" width="60pem" height="35pem" />
        </a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-md-end" id="navbarCollapse">
          <ul className="navbar-nav">
            <li className="nav-item align-self-end">
              <a href="#" className="nav-link active">Active</a>
            </li>
            <li className="nav-item align-self-end">
              <a href="#" className="nav-link">Inactive</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;
