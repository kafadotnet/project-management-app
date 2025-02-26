import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div>
          <Link className="logo" to="/">Pro<span>M.</span></Link>
        </div>
        <nav className="nav-menu">
            <NavLink className="nav-menu--links" to="/projects/create">Create Project</NavLink>
            <NavLink className="nav-menu--links" to="/projects">All Projects</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header;