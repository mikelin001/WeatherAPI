import {Link, Outlet} from 'react-router-dom'

const Layout = () =>
{
    return (
        <div>
        <nav>
          <ul>
            <li className="home-link" key="home-button">
              <Link style={{ color: "White" }} to="/">
                Home
              </Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    )
}

export default Layout