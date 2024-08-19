import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className={`navbar navbar-expand-lg py-3 ${styles.navbar}`}>
      <div className="container">
        <Link className={`navbar-brand ${styles.brand}`} to="/">
          MyBrand
        </Link>
        <button
          className="navbar-toggler mb-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{backgroundColor:"white", }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className={`mx-auto ${styles.searchBarContainer}`}>
            <SearchBar />
          </div>
          <div className={`d-flex align-items-center ${styles.actions}`}>
            <Link to="/profile" className={`text-white ${styles.greeting}`}>
              Hi, Clinton
            </Link>
            <Link className={`btn ${styles.actionButton}`} to="/login">Login</Link>
            <Link className={`btn ${styles.actionButton}`} to="/signup">Register</Link>
            <Link className={`btn ${styles.createButton}`} to="/add-note">Create</Link>
            <Link className={`btn ${styles.logoutButton}`} href="#logout">Logout</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;