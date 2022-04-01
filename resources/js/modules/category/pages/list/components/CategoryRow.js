import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import icon27 from '../../../images/icon27.svg';
import icon28 from '../images/icon28.svg';
import icon29 from '../images/icon29.svg';
import icon31 from '../images/icon31.svg';
import ReactTooltip from 'react-tooltip';
const displayName = 'CategoryRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  category: PropTypes.object.isRequired,
  togglePublish: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
}
const CategoryRow = ({ index, category, handleRemove }) => {
  return (
	<tr>
								<td>
									<div className="left-content">
										<div className="imgBlock"></div>
										<div className="item-info">
											<h6><Link to="/category-bots-list">{category.name}</Link></h6>
											<span className="item-id">{index+1}</span>
											<p>{category.description}</p>
											<Link to="/category-bots-list" data-tip="Click here or on the title to see the list of bots under this category">Category details (bots/scrapers list)</Link>
											<ReactTooltip />
										</div>
									</div>
								</td>	
								<td>
									<span className="font-20">{category.createdAt && category.createdAt.format('MMMM, DD YYYY')}</span>
								</td>
								<td>
									<span className="font-24">3</span>
								</td>
								<td>
									
									<div className="action-group">
									<Link className="btn btn-primary" to={`categories/${category.id}/edit`}>Edit</Link>
        							<button className="btn btn-danger" onClick={() => handleRemove(category.id)}>Delete</button>
    
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

  )
}
CategoryRow.displayName = displayName
CategoryRow.propTypes = propTypes
export default CategoryRow