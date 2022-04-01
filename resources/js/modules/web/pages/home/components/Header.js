import React from "react"
import React, {useState} from 'react';
import { Row, Col, Modal, ModalHeader, ModalBody, Label, Form, FormGroup, Input} from 'reactstrap';
import {Link} from "react-router-dom";
import innerlogo from '../../../../../images/innerlogo.png'
import Icon2 from '../../../../../images/icon2.svg'
import Icon3 from '../../../../../images/icon3.svg'
import Icon7 from '../../../../../images/icon7.svg'
import Icon8 from '../../../../../images/icon8.svg'
import Icon9 from '../../../../../images/icon9.svg'
import Icon10 from '../../../../../images/icon10.svg'
import Icon11 from '../../../../../images/icon11.svg'
import Icon17 from '../../../../../images/icon17.svg'
import Icon17Hover from '../../../../../images/icon17-hover.svg'
import Icon18 from '../../../../../images/icon18.svg'
import Icon18Hover from '../../../../../images/icon18-hover.svg'
import Icon19 from '../../../../../images/icon19.svg'
import Icon19Hover from '../../../../../images/icon19-hover.svg'
import Icon20 from '../../../../../images/icon20.svg'
import Icon20Hover from '../../../../../images/icon20-hover.svg'
import Icon21 from '../../../../../images/icon21.svg'
import Icon21Hover from '../../../../../images/icon21-hover.svg'
import count from '../../../../../images/Counter-Icon.svg'
import uplaodIcon from '../../../../../images/Upload-Icon.svg'


function Header(props) {
	// for add or remove class onm click
	const handelClick = (e)=>{
		Array.from(document.getElementsByClassName('forRemoveClass')).forEach((el) => {
			el.classList.remove('active')
		})
		e.target.parentElement.classList.add('active')
	}


  const navWrap=()=>{
    document.body.classList=''    
    document.body.classList.add('navigation-open')
  }
  const closeIcon=()=>{
    document.body.classList=''    
    document.body.classList.remove('navigation-open')
  }
  // const closeNavWrap=()=>{
  //     document.body.classList=''
  //     document.body.classList.remove('navigation-open')
  // }

  const fillterWrap=()=>{
    document.body.classList=''    
    document.body.classList.add('fillter-open')
  }

  const Closefillter=()=>{
    document.body.classList=''    
    document.body.classList.remove('fillter-open')
  }

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
		<>
			<header className="headerTwo">
				<Row className="justify-content-between align-items-center">
					<Col lg="4" sm="3" className="col-6">
            <Link to="/">
							<img src={innerlogo} alt="Logo" />
						</Link>
					</Col>
					<Col lg="3" sm="6" className="d-none d-sm-block">
            <ul className="count-wrap">
              <li>
                <span>Beginner</span>
                <div className="countIcon">
                  <img src={count} alt="Count" />
                </div>
                <span className="count">20K</span>
              </li>
              <li>
                <span>Business</span>
                <div className="countIcon">
                  <img src={count} alt="Count" />
                </div>
                <span className="count">505K</span>
              </li>
              <li>
                <span>Big Data</span>
                <div className="countIcon">
                  <img src={count} alt="Count" />
                </div>
                <span className="count">25M</span>
              </li>
              <li>
                <span>Custom</span>
                <div className="countIcon">
                  <img src={count} alt="Count" />
                </div>
                <span className="count">14.2B</span>
              </li>
            </ul>
					</Col>
					<Col lg="5" sm="3" className="col-6">
            <div className="header-right">
              <ul>
                <li className="close-icon-block">
                  <span className="close-icon" onClick={closeIcon}></span>
                </li>
                <li>
                  <Link to="/" className="topMenu active">
                    <img src={Icon7} alt="Icon" />
                    <span className="login-text">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="#0" className="topMenu">
                      <img src={Icon8} alt="Icon" />
                      <span className="login-text">Profile</span>
                  </Link>
                </li>
                <li>
                  <Link to="#0" className="topMenu">
                      <img src={Icon9} alt="Icon" />
                      <span className="login-text">Plans</span>
                  </Link>
                </li>
                <li>
                  <Link to="#0" className="topMenu">
                      <img src={Icon10} alt="Icon" />
                      <span className="login-text">Orders</span>
                  </Link>
                </li>
                <li>
                  <Link to="/project-list" className="topMenu">
                      <img src={Icon11} alt="Icon" />
                      <span className="login-text">Projects</span>
                  </Link>
                </li>
                
                <li>
                  <Link to="#0" className="topMenu">
                      <img src={Icon3} alt="Icon" />
                      <span className="login-text">Help</span>
                  </Link>
                </li>
                <li>
                  <Link to="#0" className="topMenu">
                      <img src={Icon2} alt="Icon" />
                      <span className="login-text">LogOut</span>
                    </Link>
                </li>
              </ul>
              <span className="toggleGroup"  onClick={navWrap}><span className="toggleIcon"></span></span>
            </div>
            
					</Col>
				</Row>
				<div className="header-menu">
					<ul>
            <li className="close-icon-block">
              <span onClick={Closefillter} className="close-icon"></span>
            </li>
						<li  onClick={handelClick}>
							<Link className="forRemoveClass active" to="/new-project">
                <img src={Icon17} alt="Icon" className="default-img" />
                <img src={Icon17Hover} alt="Icon" className="hover-img"/>
								<span className="menu-name">Projects</span>
							</Link>
						</li>
						<li onClick={handelClick}>
							<Link className="forRemoveClass" to="/new-project">
                <img src={Icon18} alt="Icon" className="default-img" />
                <img src={Icon18Hover} alt="Icon" className="hover-img"/>
								<span className="menu-name">New Project</span>
							</Link>
						</li>
						<li >
              <Link className="forRemoveClass" to="/new-categories">
                <img src={Icon19} alt="Icon" className="default-img" />
                <img src={Icon19Hover} alt="Icon" className="hover-img"/>
								<span className="menu-name">Scrapers</span>
							</Link>
						</li>
						<li>
              <Link onClick={toggle} className="forRemoveClass" to="#0">
                <img src={Icon20} alt="Icon" className="default-img"/>
                <img src={Icon20Hover} alt="Icon" className="hover-img"/>
								<span className="menu-name">New Category</span>
							</Link>
						</li>
						<li>
							<Link className="forRemoveClass" to="/new-scarper">
                <img src={Icon21} alt="Icon" className="default-img"/>
                <img src={Icon21Hover} alt="Icon" className="hover-img"/>
								<span className="menu-name">New Scraper</span>
							</Link>
						</li>
					</ul>
          <span className="menu-close" onClick={fillterWrap}>Projects/Scrapers</span>
				</div>
			</header>



      <Modal isOpen={modal} toggle={toggle} className="modalWrap header-modal">
          <ModalHeader>
            <span className="modalTitle">New Category - Creation Panel</span>
            <span className="closeButton" onClick={toggle}></span>
          </ModalHeader>          
          <ModalBody>
            <div className="modalBodyContent">
              <Form>
                <FormGroup>
                  <Label>Category name:</Label>                  
                  <Input placeholder="Write your extration project name here" type="text" />
                </FormGroup>
                <FormGroup>
                  <Label>Description:</Label>                  
                  <Input placeholder="Write a brief description of your extration project here" type="textarea" />
                </FormGroup>
                <FormGroup>
                  <Label>Upload image:</Label>                  
                  <span className="uploadIcon">
                    <Input type="file" />
                    <img src={uplaodIcon} alt="Upload" />
                  </span>
                </FormGroup>
                <div className="btn-block">
                  <Link to="#0" onClick={toggle}>CANCEL</Link>
                  <Link to="/categories-list" className="style-two">SAVE</Link>
                </div>
              </Form>
            </div>
          </ModalBody>
        </Modal>
		</>
	);
}

export default Header;

