import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Table, Modal, ModalHeader,ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import Breadcrumbs from '../component/breadcrumbs'
import ReactTooltip from 'react-tooltip';
import Img1 from '../images/img1.svg';
import icon27 from '../images/icon27.svg';
import icon28 from '../images/icon28.svg';
import icon29 from '../images/icon29.svg';
import icon30 from '../images/icon30.svg';

const displayName = 'ScraperRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  category: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
}
const ScraperRow = ({ index, scraper, handleRemove }) => {
  return (
    <tr>
    <td width="160">
        <div className="left-content">
            <div className="left-content-inner">
<h6><Link to="/single-bot-datasets">{scraper.name}</Link></h6>  
<span>ID# {scraper.id}</span>
</div>										
        </div>
    </td>
<td width="580">
<div className="item-info">
<p>{scraper.description}</p>
<Link to="/single-bot-datasets" data-tip="Click here or on the title to see the list of bots and datasets">Bot/scraper details/data sets</Link>
<ReactTooltip />
</div>
</td>
    <td>
        <img onClick={toggle1} data-tip="Click to see project info: creation date, latest extraction, scheduled start &amp; end date, nr. scrapers, nr. data sets, nr. records this month." src={Img1} alt="Img" />
        <ReactTooltip />
    </td>
    <td>
        <div className="action-group">
            <Link to="/designer-simple-filters">
                <img src={icon27} alt="icon27" />
            </Link>
<Link data-tip="Duplicate" to="/#0">
                <img src={icon30} alt="icon30" />
                <ReactTooltip />
            </Link>
            <Link to="#0">
                <img src={icon28} alt="icon28" />
            </Link>
            <span className="hover-tool">
                <img src={icon29} alt="icon29" />
                <div className="action-option">
                    <span>Export all data sets</span>
                    <span>Export latest data set</span>
                    <span>Export bot/scraper only</span>
                    <ReactTooltip />
                    <ReactTooltip />
                </div>
            </span>
        </div>
    </td>
</tr>
  )
}
ScraperRow.displayName = displayName
ScraperRow.propTypes = propTypes
export default ScraperRow