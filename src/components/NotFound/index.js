// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return isDarkTheme ? (
        <>
          <Navbar />
          <div className="not-found-container-dark">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className="not-found-heading-dark">Lost Your Way?</h1>
            <p className="not-found-description-dark">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <div className="not-found-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className="not-found-heading">Lost Your Way?</h1>
            <p className="not-found-description">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
