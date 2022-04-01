import '../App.css';
import '../component/project-list.css';
import React, {useState} from 'react';
import InnerHeader from '../component/InnerHeader'
import TopSearch from '../component/top-serarch' 
import { Row, Col, Table, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import Breadcrumbs from '../component/breadcrumbs'
import ReactTooltip from 'react-tooltip';
import {Link} from "react-router-dom";
import Img1 from '../images/img1.svg';
import icon25 from '../images/icon25.svg';
import icon26 from '../images/icon26.svg';
import icon27 from '../images/icon27.svg';
import icon28 from '../images/icon28.svg';
import icon29 from '../images/icon29.svg';
import icon30 from '../images/icon30.svg';
import icon31 from '../images/icon31.svg';
import icon32 from '../images/icon32.svg';
import Img_1 from '../images/img-1.png';
import uplaodIcon from '../images/Upload-Icon.svg';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';



function ProjectList(props) {

	const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

	const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);

  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal2(!modal2);



  const options = [
	{ label: 'KCOM Colourpages UK', value: 1},
	{ label: 'Yellow Pages Spain', value: 2},
	{ label: 'Comments on G20 Twitter', value: 3},
  { label: 'Walmart Smart TVs', value: 4},
	{ label: 'Opinions on Jesus "catholicforum.com"', value: 5},
  { label: 'Smart TVs on Amazon.it', value: 6},
  ];


  return (
    <>
    
    <InnerHeader/>

    <section className="project-list">
      <Breadcrumbs />
      <TopSearch />
      <div className="project-items">
        <div className="table-responsive">
          <Table borderless>
            <thead>
              <tr>
                <th>Name/ID/Description</th>
								<th>Frequency</th>
								<th>Status</th>
								<th>Statistics</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div className="left-content">
										<div className="imgBlock"></div>
										<div className="item-info">
											<h6><Link to="/project-bots-list">Smart TVs price comparison</Link></h6>
											<span className="item-id">ID# 0001234</span>
											<p>Here, you can read the description of your extraction project. It can be a short sentence or a few paragraphs that help you identify the topic and objective.</p>
											<Link to="/project-bots-list" data-tip="Click here or on the title to see the list of bots and datasets">Project details</Link>
											<ReactTooltip />
										</div>
									</div>
								</td>
								<td>
									<span className="blue-btn">Daily</span>
								</td>
								<td>
									<span className="gray-btn">Empty</span>
								</td>
								<td>
									<span className="projectInfoBtn" onClick={toggle}><img data-tip="Click to see project info: creation date, latest extraction, scheduled start &amp; end date, nr. scrapers, nr. data sets, nr. records this month." src={Img1} alt="Img" /></span>
									<ReactTooltip />
								</td>
								<td>
									<div className="action-group">
										<Link to="/#0">
											<img src={icon25} alt="icon25" />
										</Link>
										<Link to="/#0">
											<img src={icon26} alt="icon26" />
										</Link>
										<Link to="/#0">
											<img src={icon27} alt="icon27" />
										</Link>
										<Link to="/#0">
											<img src={icon28} alt="icon28" />
										</Link>
										<br/>
                    <span className="hover-tool">
											<img src={icon29} alt="icon29" />
											<div className="action-option">
												<span data-tip="It opens the import /associate bot modal" >Export project data sets</span>
												<span data-tip="It opens the 'New Scraper' tab">Export project bots/scrapers</span>
												<ReactTooltip />
												<ReactTooltip />
											</div>
										</span>
										<Link data-tip="Duplicate" to="/#0">
											<img src={icon30} alt="icon30" />
											<ReactTooltip />
										</Link>
										<span onClick={toggle1}  data-tip="Import bots/scrapers (without datasets)">
											<img src={icon31} alt="icon31" />
											<ReactTooltip />
										</span>
										<span className="hover-tool">
											<img src={icon32} alt="icon32" />
											<div className="action-option">
												<span onClick={toggle2} data-tip="It opens the import /associate bot modal" >Existing bots/scrapers</span>
												<span data-tip="It opens the 'New Scraper' tab">New bots/scrapers</span>
												<ReactTooltip />
												<ReactTooltip />
											</div>
										</span>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div className="left-content">
										<div className="imgBlock"></div>
										<div className="item-info">
											<h6>Social comments on G20</h6>
											<span className="item-id">ID# 0001234</span>
											<p>Here, you can read the description of your extraction project. It can be a short sentence or a few paragraphs that help you identify the topic and objective.</p>
											<Link to="/#0" data-tip="Click here or on the title to see the list of bots and datasets">Project details</Link>
											<ReactTooltip />
										</div>
									</div>
								</td>
								<td>
									<span className="blue-btn">Daily</span>
								</td>
								<td>
									<span className="gray-btn">Empty</span>
								</td>
								<td>
								<span className="projectInfoBtn" onClick={toggle}><img data-tip="Click to see project info: creation date, latest extraction, scheduled start &amp; end date, nr. scrapers, nr. data sets, nr. records this month." src={Img1} alt="Img" /></span>
									<ReactTooltip />
								</td>
								<td>
									<div className="action-group">
										<Link to="/#0">
											<img src={icon25} alt="icon25" />
										</Link>
										<Link to="/#0">
											<img src={icon26} alt="icon26" />
										</Link>
										<Link to="/#0">
											<img src={icon27} alt="icon27" />
										</Link>
										<Link to="/#0">
											<img src={icon28} alt="icon28" />
										</Link>
										<br/>
										<Link to="/#0">
											<img src={icon29} alt="icon29" />
											<div className="action-option">
												<span data-tip="It opens the import /associate bot modal" >Existing bots/scrapers</span>
												<span data-tip="It opens the 'New Scraper' tab">New bots/scrapers</span>
												<ReactTooltip />
												<ReactTooltip />
											</div>
										</Link>
										<Link data-tip="Duplicate" to="/#0">
											<img src={icon30} alt="icon30" />
											<ReactTooltip />
										</Link>
										<Link data-tip="Import bots/scrapers (without datasets)" to="/#0">
											<img src={icon31} alt="icon31" />
											<ReactTooltip />
										</Link>
										<Link to="/#0">
											<img src={icon32} alt="icon32" />
											<div className="action-option">
												<span data-tip="It opens the import /associate bot modal" >Existing bots/scrapers</span>
												<span data-tip="It opens the 'New Scraper' tab">New bots/scrapers</span>
												<ReactTooltip />
												<ReactTooltip />
											</div>
										</Link>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div className="left-content">
										<div className="imgBlock"></div>
										<div className="item-info">
											<h6>Customer reviews on hospitals (France)</h6>
											<span className="item-id">ID# 0001234</span>
											<p>Here, you can read the description of your extraction project. It can be a short sentence or a few paragraphs that help you identify the topic and objective.</p>
											<Link to="/#0" data-tip="Click here or on the title to see the list of bots and datasets">Project details</Link>
											<ReactTooltip />
										</div>
									</div>
								</td>
								<td>
									<span className="blue-btn">Daily</span>
								</td>
								<td>
									<span className="gray-btn">Empty</span>
								</td>
								<td>
								<span className="projectInfoBtn" onClick={toggle}><img data-tip="Click to see project info: creation date, latest extraction, scheduled start &amp; end date, nr. scrapers, nr. data sets, nr. records this month." src={Img1} alt="Img" /></span>
									<ReactTooltip />
								</td>
								<td>
									<div className="action-group">
										<Link to="/#0">
											<img src={icon25} alt="icon25" />
										</Link>
										<Link to="/#0">
											<img src={icon26} alt="icon26" />
										</Link>
										<Link to="/#0">
											<img src={icon27} alt="icon27" />
										</Link>
										<Link to="/#0">
											<img src={icon28} alt="icon28" />
										</Link>
										<br/>
										<Link to="/#0">
											<img src={icon29} alt="icon29" />
											<div className="action-option">
												<span data-tip="It opens the import /associate bot modal" >Existing bots/scrapers</span>
												<span data-tip="It opens the 'New Scraper' tab">New bots/scrapers</span>
												<ReactTooltip />
												<ReactTooltip />
											</div>
										</Link>
										<Link data-tip="Duplicate" href="/#0">
											<img src={icon30} alt="icon30" />
											<ReactTooltip />
										</Link>
										<Link data-tip="Import bots/scrapers (without datasets)" href="/#0">
											<img src={icon31} alt="icon31" />
											<ReactTooltip />
										</Link>
										<Link to="/#0">
											<img src={icon32} alt="icon32" />
											<div className="action-option">
												<span data-tip="It opens the import /associate bot modal" >Existing bots/scrapers</span>
												<span data-tip="It opens the 'New Scraper' tab">New bots/scrapers</span>
												<ReactTooltip />
												<ReactTooltip />
											</div>
										</Link>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div className="left-content">
										<div className="imgBlock"></div>
										<div className="item-info">
											<h6>What people think about religions worldwide</h6>
											<span className="item-id">ID# 0001234</span>
											<p>Here, you can read the description of your extraction project. It can be a short sentence or a few paragraphs that help you identify the topic and objective.</p>
											<Link to="/#0" data-tip="Click here or on the title to see the list of bots and datasets">Project details</Link>
											<ReactTooltip />
										</div>
									</div>
								</td>
								<td>
									<span className="blue-btn">Daily</span>
								</td>
								<td>
									<span className="gray-btn">Empty</span>
								</td>
								<td>
								<span className="projectInfoBtn" onClick={toggle}><img data-tip="Click to see project info: creation date, latest extraction, scheduled start &amp; end date, nr. scrapers, nr. data sets, nr. records this month." src={Img1} alt="Img" /></span>
									<ReactTooltip />
								</td>
								<td>
									<div className="action-group">
										<Link to="/#0">
											<img src={icon25} alt="icon25" />
										</Link>
										<Link to="/#0">
											<img src={icon26} alt="icon26" />
										</Link>
										<Link to="/#0">
											<img src={icon27} alt="icon27" />
										</Link>
										<Link to="/#0">
											<img src={icon28} alt="icon28" />
										</Link>
										<br/>
										<Link to="/#0">
											<img src={icon29} alt="icon29" />
											<div className="action-option">
												<span data-tip="It opens the import /associate bot modal" >Existing bots/scrapers</span>
												<span data-tip="It opens the 'New Scraper' tab">New bots/scrapers</span>
												<ReactTooltip />
												<ReactTooltip />
											</div>
										</Link>
										<Link data-tip="Duplicate" href="/#0">
											<img src={icon30} alt="icon30" />
											<ReactTooltip />
										</Link>
										<Link data-tip="Import bots/scrapers (without datasets)" href="/#0">
											<img src={icon31} alt="icon31" />
											<ReactTooltip />
										</Link>
										<Link to="/#0">
											<img src={icon32} alt="icon32" />
											<div className="action-option">
												<span data-tip="It opens the import /associate bot modal" >Existing bots/scrapers</span>
												<span data-tip="It opens the 'New Scraper' tab">New bots/scrapers</span>
												<ReactTooltip />
												<ReactTooltip />
											</div>
										</Link>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div className="left-content">
										<div className="imgBlock"></div>
										<div className="item-info">
											<h6>Cryptocurrencies price and trends</h6>
											<span className="item-id">ID# 0001234</span>
											<p>Here, you can read the description of your extraction project. It can be a short sentence or a few paragraphs that help you identify the topic and objective.</p>
											<Link to="/#0" data-tip="Click here or on the title to see the list of bots and datasets">Project details</Link>
											<ReactTooltip />
										</div>
									</div>
								</td>
								<td>
									<span className="blue-btn">Daily</span>
								</td>
								<td>
									<span className="gray-btn">Empty</span>
								</td>
								<td>
								<span className="projectInfoBtn" onClick={toggle}><img data-tip="Click to see project info: creation date, latest extraction, scheduled start &amp; end date, nr. scrapers, nr. data sets, nr. records this month." src={Img1} alt="Img" /></span>
									<ReactTooltip />
								</td>
								<td>
									<div className="action-group">
										<Link to="/#0">
											<img src={icon25} alt="icon25" />
										</Link>
										<Link to="/#0">
											<img src={icon26} alt="icon26" />
										</Link>
										<Link to="/#0">
											<img src={icon27} alt="icon27" />
										</Link>
										<Link to="/#0">
											<img src={icon28} alt="icon28" />
										</Link>
										<br/>
										<Link to="/#0">
											<img src={icon29} alt="icon29" />
											<div className="action-option">
												<span data-tip="It opens the import /associate bot modal" >Existing bots/scrapers</span>
												<span data-tip="It opens the 'New Scraper' tab">New bots/scrapers</span>
												<ReactTooltip />
												<ReactTooltip />
											</div>
										</Link>
										<Link data-tip="Duplicate" href="/#0">
											<img src={icon30} alt="icon30" />
											<ReactTooltip />
										</Link>
										<Link data-tip="Import bots/scrapers (without datasets)" href="/#0">
											<img src={icon31} alt="icon31" />
											<ReactTooltip />
										</Link>
										<Link to="/#0">
											<img src={icon32} alt="icon32" />
											<div className="action-option">
												<span data-tip="It opens the import /associate bot modal" >Existing bots/scrapers</span>
												<span data-tip="It opens the 'New Scraper' tab">New bots/scrapers</span>
												<ReactTooltip />
												<ReactTooltip />
											</div>
										</Link>
									</div>
								</td>
							</tr>
						</tbody>
					</Table>
      	</div>
    	</div>
			<div className="pagination-block">
				<nav aria-label="Page navigation example">
					<ul class="pagination">
						<li class="page-item"><a class="page-link" href="#"><span data-tip="First page">&laquo;</span> Previous</a></li>
						<li class="page-item active"><a class="page-link" href="#">1</a></li>
						<li class="page-item"><a class="page-link" href="#">2</a></li>
						<li class="page-item"><a class="page-link" href="#">3</a></li>
						<li class="page-item"><a class="page-link" href="#">4</a></li>
						<li class="page-item"><a class="page-link" href="#">5</a></li>
						<li class="page-item"><a class="page-link" href="#">Next <span data-tip="Last page">&raquo;</span></a></li>
					</ul>
					<ReactTooltip/>
					<ReactTooltip/>
				</nav>
			</div>
  	</section>

		<Modal isOpen={modal} toggle={toggle} className="modalWrap project-static">
			<ModalHeader>
				<span className="modalTitle">Project Statistics</span>
				<span className="closeButton" onClick={toggle}></span>
			</ModalHeader>          
			<ModalBody>
				<div className="modalBodyContent">
					<div className="modalBodyTop">
						<h6>Smart TVs price comparison</h6>
						<span>ID# 0001234</span>
						<div className="img-block">
							<img src={Img_1} alt="Item" />
						</div>
					</div>
					<div className="modalBottomContent">
						<Row>
							<Col lg="4" sm="6">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Creation date</h5>
									</div>
									<div className="card-block-body">
										<span>28 July, <span className="font-42">2021</span></span>
									</div>
								</div>
							</Col>
							<Col lg="4" sm="6">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Latest extraction</h5>
									</div>
									<div className="card-block-body">
										<span>15 October, <span className="font-42">2021</span></span>
									</div>
								</div>
							</Col>
							<Col lg="4" sm="6">
								<div className="card-block">
									<div className="card-block-header">
										<h5>End date</h5>
									</div>
									<div className="card-block-body">
										<span>28 December, <span className="font-42">2021</span></span>
									</div>
								</div>
							</Col>
							<Col lg="4" sm="6">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Nr. bots/scrapers</h5>
									</div>
									<div className="card-block-body">
										<span>15</span>
									</div>
								</div>
							</Col>
							<Col lg="4" sm="6">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Data sets created</h5>
									</div>
									<div className="card-block-body">
										<span>42</span>
									</div>
								</div>
							</Col>
							<Col lg="4" sm="6">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Records extracted <span>( current month )</span></h5>
									</div>
									<div className="card-block-body">
										<span>355,890</span>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</ModalBody>
		</Modal>

		<Modal isOpen={modal1} toggle={toggle1} className="modalWrap existing-bot">
			<ModalHeader>
				<span className="closeButton" onClick={toggle1}></span>
				<span className="modalTitle">Import or Associate Existing Bots/Scrapers to the<span>Extraction Project<span className="blue-text">"Smart TVs price comparison"</span></span></span>			
			</ModalHeader>          
			<ModalBody>
				<div className="modalBodyContent">
				<Form>
					<FormGroup>
					<Label>Import extraction bots/scrapers<span>Select one or more bots from your computer</span></Label>                  
					<span className="uploadIcon">
						<Input type="file" />
						<img src={uplaodIcon} alt="Upload" />
					</span>
					</FormGroup>
					<FormGroup>
					<Label>Associate an existing bot/scraper:<span>Select one or ore bots from the dropdown list</span></Label>                  
					<div className="multi-select-box">
            <div className="search-box">
              <Label><Input type="checkbox" />Select all</Label>
              <div className="searchInput">
                <span className="search-icon">
                  <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-search fa-w-16 fa-2x"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" class=""></path></svg>
                </span>
                <Input type="text" placeholder="Search bot/scraper"  />
                <span className="close-icon">
                  <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-times-circle fa-w-16 fa-2x"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" class=""></path></svg>
                </span>
              </div>
            </div>
					  <ReactMultiSelectCheckboxes options={options} />
					</div>
					</FormGroup>
					<div className="btn-block">
					<Link to="#0" onClick={toggle}>CANCEL</Link>
					<Link to="/project-bots-list" className="style-two">SAVE</Link>
					</div>
					
				</Form>
				</div>
			</ModalBody>
		</Modal>

		<Modal isOpen={modal2} toggle={toggle2} className="modalWrap existing-bot">
			<ModalHeader>
				<span className="closeButton" onClick={toggle2}></span>
				<span className="modalTitle">Import or Associate Existing Bots/Scrapers to the<span>Extraction Project<span className="blue-text">"Smart TVs price comparison"</span></span></span>			
			</ModalHeader>          
			<ModalBody>
				<div className="modalBodyContent">
				<Form>
					<FormGroup>
					<Label>Import extraction bots/scrapers<span>Select one or more bots from your computer</span></Label>                  
					<span className="uploadIcon">
						<Input type="file" />
						<img src={uplaodIcon} alt="Upload" />
					</span>
					</FormGroup>
					<FormGroup>
					<Label>Associate an existing bot/scraper:<span>Select one or ore bots from the dropdown list</span></Label>                  
					<div className="multi-select-box">
            <div className="search-box">
              <Label><Input type="checkbox" />Select all</Label>
              <div className="searchInput">
                <span className="search-icon">
                  <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-search fa-w-16 fa-2x"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" class=""></path></svg>
                </span>
                <Input type="text" placeholder="Search bot/scraper"  />
                <span className="close-icon">
                  <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-times-circle fa-w-16 fa-2x"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" class=""></path></svg>
                </span>
              </div>
            </div>
					  <ReactMultiSelectCheckboxes options={options} />
					</div>
					</FormGroup>
					<div className="btn-block">
					<Link to="/project-bots-list">CANCEL</Link>
					<Link to="/project-bots-list" className="style-two">SAVE</Link>
					</div>
					
				</Form>
				</div>
			</ModalBody>
		</Modal>

    
    
    </>    
  );
}
export default ProjectList;