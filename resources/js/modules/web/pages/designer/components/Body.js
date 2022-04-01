import React, { useLayoutEffect } from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"; 
import { } from 'reactstrap';
import Icon12 from '../images/icon12.svg'
import Icon13 from '../images/icon13.svg'
import Icon14 from '../images/icon14.svg'
import Icon15 from '../images/icon15.svg'
import Icon16 from '../images/icon16.svg'
import Icon4 from '../images/icon4.svg'

function Body(props) {
    return (
      <>    
      <section className="loginMain">
        <div className="loginWrap style-two">
          <h2>Welcome to WebRobot Self-Service Web Scraping Platform!</h2>
          <h3>From here, you can control your proﬁle, manage your plans, payment, data extraction projects, and look for help.</h3>
          <ul>
            <li>
              <Link to="/">
                <img src={Icon12} alt="Icon" />
                <span className="login-text">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/#0">
                <img src={Icon13} alt="Icon" />
                <span className="login-text">Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/#0">
                <img src={Icon14} alt="Icon" />
                <span className="login-text">Plans</span>
              </Link>
            </li>
            <li>
              <Link to="/#0">
                <img src={Icon15} alt="Icon" />
                <span className="login-text">Orders</span>
              </Link>
            </li>
            <li>
              <Link to="/new-project">
                <img src={Icon16} alt="Icon" />
                <span className="login-text">Projects</span>
              </Link>
            </li>
            <li>
              <Link to="/#0">
                <img src={Icon4} alt="Icon" />
                <span className="login-text">Help</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={Icon12} alt="Icon" />
                <span className="login-text">LogOut</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      
      </>    
    );
  }
  export default Body;