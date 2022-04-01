import React, {useState} from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import icon22 from '../../images/icon22.svg'
import icon23 from '../../images/icon23.svg'
import icon24 from '../../images/icon24.svg'
import ExportModel from './modals/ExportModal';
import ImportModel from './modals/ImportModal';
const propTypes = {
  categories: PropTypes.number.isRequired,
  projectsbots: PropTypes.object.isRequired,
  bots: PropTypes.func.isRequired,
  }

const TopSearch = ({ categories, projectsbots, bots}) => {

  const fields = { groupBy: 'category', text: 'vegetable', value: 'id' };

  const [modal1, setModal1] = useState(false);
  const handle_cancel = () => setModal1(!modal1);

  const [modal2, setModal2] = useState(false);
  const handle_cancel2 = () => setModal2(!modal2);

  return (
		<>
     
      <div className="project-search">        
        <ul>
          <li>
            <a onClick={handle_cancel} TopCenter data-tip="Export bots in bulk (no datasets)">
              <img src={icon22} alt="Icon22"/>
            </a>
            <ReactTooltip/>
          </li>
          <li>
            <a onClick={handle_cancel2} TopCenter data-tip="Import bots in bulk">
              <img src={icon23} alt="Icon23"/>
            </a>
            <ReactTooltip/>
          </li>
          <li>
            <Link data-tip="Notiﬁcations &amp; announcements" href="#0">
              <img src={icon24} alt="Icon24"/>
            </Link>
            <ReactTooltip/>
          </li>
          <li>
            <Form>
              <FormGroup>
                <span className="search-icon">
                  <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-search fa-w-16 fa-2x"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" class=""></path></svg>
                </span>
                <Input type="text" placeholder="Search" />
                <span className="close-icon">
                  <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-times-circle fa-w-16 fa-2x"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" class=""></path></svg>
                </span>
              </FormGroup>
             
            </Form>
          </li>
        </ul>
      </div>
      <Modal isOpen={modal1} toggle={handle_cancel} className="modalWrap export-bots-datasets existing-bot">
			<ModalHeader>
				<span className="closeButton" onClick={handle_cancel}></span>
				<span className="modalTitle">Export Your Bots/Scrapers or Data Sets</span>	
        <span className="sub-title">Bulk Download</span>		
			</ModalHeader>          
			<ModalBody>
       <ExportModel categories={categories} projectsbots={projectsbots} handle_cancel={handle_cancel} ></ExportModel>
			</ModalBody>
		</Modal>
    <Modal isOpen={modal2} toggle={handle_cancel2} className="modalWrap export-bots-datasets existing-bot">
			<ModalHeader>
				<span className="closeButton" onClick={handle_cancel2}></span>
				<span className="modalTitle">Import or Associate an Existing Bot/Scraper</span>	
			</ModalHeader>          
			<ModalBody>
				<ImportModel bots={bots} projects={projects}  categories={categories} handle_cancel={handle_cancel2}></ImportModel>
			</ModalBody>
		</Modal>
    </>
  );
}

export default TopSearch;
