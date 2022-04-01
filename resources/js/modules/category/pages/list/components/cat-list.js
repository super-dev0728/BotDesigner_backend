import '../App.css';
import '../component/project-list.css';
import React from 'react';
import InnerHeader from '../component/InnerHeader'
import TopSearch from '../component/top-serarch' 
import { Table } from 'reactstrap';
import Breadcrumbs from '../component/breadcrumbs'
import ReactTooltip from 'react-tooltip';
import {Link} from "react-router-dom";
import icon27 from '../images/icon27.svg';
import icon28 from '../images/icon28.svg';
import icon29 from '../images/icon29.svg';
import icon31 from '../images/icon31.svg';

function CatList(props) {
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
								<th>Creation date</th>
								<th>Nr. bots/scrapers</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div className="left-content">
										<div className="imgBlock"></div>
										<div className="item-info">
											<h6><Link to="/category-bots-list">Lead extracion</Link></h6>
											<span className="item-id">ID# 0005634</span>
											<p>Here, you can read the description of your extraction project. It can be a short sentence or a few paragraphs that help you identify the topic and objective.</p>
											<Link to="/category-bots-list" data-tip="Click here or on the title to see the list of bots under this category">Category details (bots/scrapers list)</Link>
											<ReactTooltip />
										</div>
									</div>
								</td>
								<td>
									<span className="font-20">3 August 2021</span>
								</td>
								<td>
									<span className="font-24">3</span>
								</td>
								<td>
									<div className="action-group">
										<Link to="/#0">
											<img src={icon27} alt="icon27" />
										</Link>
                    <Link to="/#0" data-tip="Export all bots/scrapers (without data sets)">
											<img src={icon29} alt="icon29" />
                      <ReactTooltip />
										</Link>
                    <Link data-tip="Import bots/scrapers (without datasets)" to="/#0">
											<img src={icon31} alt="icon31" />
											<ReactTooltip />
										</Link>
										<Link to="/#0">
											<img src={icon28} alt="icon28" />
										</Link>
                  </div>
								</td>
							</tr>
							<tr>
								<td>
									<div className="left-content">
										<div className="imgBlock"></div>
										<div className="item-info">
											<h6><Link to="/category-bots-list">Lead extracion</Link></h6>
											<span className="item-id">ID# 0005634</span>
											<p>Here, you can read the description of your extraction project. It can be a short sentence or a few paragraphs that help you identify the topic and objective.</p>
											<Link to="/category-bots-list" data-tip="Click here or on the title to see the list of bots and datasets">Category details (bots/scrapers list)</Link>
											<ReactTooltip />
										</div>
									</div>
								</td>
								<td>
									<span className="font-20">3 August 2021</span>
								</td>
								<td>
									<span className="font-24">3</span>
								</td>
								<td>
									<div className="action-group">
										<Link to="/#0">
											<img src={icon27} alt="icon27" />
										</Link>
                    <Link to="/#0" data-tip="Export all bots/scrapers (without data sets)">
											<img src={icon29} alt="icon29" />
                      <ReactTooltip />
										</Link>
                    <Link data-tip="Import bots/scrapers (without datasets)" to="/#0">
											<img src={icon31} alt="icon31" />
											<ReactTooltip />
										</Link>
										<Link to="/#0">
											<img src={icon28} alt="icon28" />
										</Link>
                  </div>
								</td>
							</tr>
              <tr>
								<td>
									<div className="left-content">
										<div className="imgBlock"></div>
										<div className="item-info">
											<h6><Link to="/project-detail-empty">Lead extracion</Link></h6>
											<span className="item-id">ID# 0005634</span>
											<p>Here, you can read the description of your extraction project. It can be a short sentence or a few paragraphs that help you identify the topic and objective.</p>
											<Link to="/project-detail-empty" data-tip="Click here or on the title to see the list of bots and datasets">Category details (bots/scrapers list)</Link>
											<ReactTooltip />
										</div>
									</div>
								</td>
								<td>
									<span className="font-20">3 August 2021</span>
								</td>
								<td>
									<span className="font-24">3</span>
								</td>
								<td>
									<div className="action-group">
										<Link to="/#0">
											<img src={icon27} alt="icon27" />
										</Link>
                    <Link to="/#0" data-tip="Export all bots/scrapers (without data sets)">
											<img src={icon29} alt="icon29" />
                      <ReactTooltip />
										</Link>
                    <Link data-tip="Import bots/scrapers (without datasets)" to="/#0">
											<img src={icon31} alt="icon31" />
											<ReactTooltip />
										</Link>
										<Link to="/#0">
											<img src={icon28} alt="icon28" />
										</Link>
                  </div>
								</td>
							</tr>
              <tr>
								<td>
									<div className="left-content">
										<div className="imgBlock"></div>
										<div className="item-info">
											<h6><Link to="/category-bots-list">Lead extracion</Link></h6>
											<span className="item-id">ID# 0005634</span>
											<p>Here, you can read the description of your extraction project. It can be a short sentence or a few paragraphs that help you identify the topic and objective.</p>
											<Link to="/category-bots-list" data-tip="Click here or on the title to see the list of bots and datasets">Category details (bots/scrapers list)</Link>
											<ReactTooltip />
										</div>
									</div>
								</td>
								<td>
									<span className="font-20">3 August 2021</span>
								</td>
								<td>
									<span className="font-24">3</span>
								</td>
								<td>
									<div className="action-group">
										<Link to="/#0">
											<img src={icon27} alt="icon27" />
										</Link>
                    <Link to="/#0" data-tip="Export all bots/scrapers (without data sets)">
											<img src={icon29} alt="icon29" />
                      <ReactTooltip />
										</Link>
                    <Link data-tip="Import bots/scrapers (without datasets)" to="/#0">
											<img src={icon31} alt="icon31" />
											<ReactTooltip />
										</Link>
										<Link to="/#0">
											<img src={icon28} alt="icon28" />
										</Link>
                  </div>
								</td>
							</tr>
              <tr>
								<td>
									<div className="left-content">
										<div className="imgBlock"></div>
										<div className="item-info">
											<h6><Link to="/category-bots-list">Lead extracion</Link></h6>
											<span className="item-id">ID# 0005634</span>
											<p>Here, you can read the description of your extraction project. It can be a short sentence or a few paragraphs that help you identify the topic and objective.</p>
											<Link to="/category-bots-list" data-tip="Click here or on the title to see the list of bots and datasets">Category details (bots/scrapers list)</Link>
											<ReactTooltip />
										</div>
									</div>
								</td>
								<td>
									<span className="font-20">3 August 2021</span>
								</td>
								<td>
									<span className="font-24">3</span>
								</td>
								<td>
									<div className="action-group">
										<Link to="/#0">
											<img src={icon27} alt="icon27" />
										</Link>
                    <Link to="/#0" data-tip="Export all bots/scrapers (without data sets)">
											<img src={icon29} alt="icon29" />
                      <ReactTooltip />
										</Link>
                    <Link data-tip="Import bots/scrapers (without datasets)" to="/#0">
											<img src={icon31} alt="icon31" />
											<ReactTooltip />
										</Link>
										<Link to="/#0">
											<img src={icon28} alt="icon28" />
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
    
    </>    
  );
}
export default CatList;