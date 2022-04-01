import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import icon27 from '../../../images/icon27.svg';
import icon28 from '../images/icon28.svg';
import icon29 from '../images/icon29.svg';
import icon31 from '../images/icon31.svg';
import ReactTooltip from 'react-tooltip';
import Project from '../../../Project';
const displayName = 'ProjectRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  project: PropTypes.object.isRequired,
  togglePublish: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
}
const ProjectRow = ({ index, project, handleRemove }) => {
  return (
	<tr>
								<td>
									<div className="left-content">
										<div className="imgBlock"></div>
										<div className="item-info">
											<h6><Link to="/project-bots-list">{project.name}</Link></h6>
											<span className="item-id">ID# {index}</span>
											<p>{project.description}</p>
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
  )
}
ProjectRow.displayName = displayName
ProjectRow.propTypes = propTypes
export default ProjectRow