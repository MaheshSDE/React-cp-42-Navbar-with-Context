// Write your code here

import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickToggleTheme = () => {
        toggleTheme()
      }

      return isDarkTheme ? (
        <div className="navbar-container-dark">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
            alt="website logo"
            className="website-logo"
          />
          <ul className="list-container">
            <li className="style">
              <Link to="/" className="nav-link nav-link-dark">
                Home
              </Link>
            </li>
            <li className="style">
              <Link to="/about" className="nav-link nav-link-dark">
                About
              </Link>
            </li>
          </ul>
          <button
            data-testid="theme"
            type="button"
            className="theme-button"
            onClick={onClickToggleTheme}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              alt="theme"
              className="theme"
            />
          </button>
        </div>
      ) : (
        <div className="navbar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
            alt="website logo"
            className="website-logo"
          />
          <ul className="list-container">
            <li className="style">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="style">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
          <button
            data-testid="theme"
            type="button"
            className="theme-button"
            onClick={onClickToggleTheme}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              alt="theme"
              className="theme"
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
