import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Table, Modal, ModalHeader,ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import Breadcrumbs from '../component/breadcrumbs'
import ReactTooltip from 'react-tooltip';
import Img1 from '../images/img1.svg';
import Img1 from '../images/img1.svg';
import icon28 from '../images/icon28.svg';
import icon36 from '../images/icon36.svg';
import downloadIcon from '../images/downloadIcon.png';
import shareIcon from '../images/shareIcon.png';
import blueDownload from '../images/blueDownload.png';
import eyeIcon from '../images/eyeIconNew.png';

const displayName = 'DatasetRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  dataset: PropTypes.object.isRequired,
  handleProcessedUrl: PropTypes.func.isRequired,
  handleDatasetInfo: PropTypes.func.isRequired
}
const DatasetRow = ({ index, dataset, handleRemove }) => {
  return (
    <tr>
    <td width="160">
        <div className="left-content">
            <div className="left-content-inner">
<h6>{dataset.created}</h6>  
<span>ID# { dataset.id}</span>
</div>										
        </div>
    </td>
<td>
<span>{dataset.nrecords}</span>
</td>
<td>
        <img onClick={handleDatasetInfo} data-tip="Click to see the data set info: processing time, website, nr. processed URLs, failed Urls" src={Img1} alt="Img" />
        <ReactTooltip />
    </td>
<td>
        <img onClick={handleProcessedUrl} data-tip="Click to see the list of processed URLs" src={icon36} alt="Img" />
        <ReactTooltip />
    </td>								
    <td>
        <div className="action-group">
<Link to="/#0">
                <img src={blueDownload} alt="blueDownload" />
            </Link>										
<Link to="/#0">
                <img src={shareIcon} alt="shareIcon" />
            </Link>                    
            <Link to="/#0">
                <img src={icon28} alt="icon28" />
            </Link>
        </div>
    </td>
</tr>
  )
}
DatasetRow.displayName = displayName
DatasetRow.propTypes = propTypes
export default DatasetRow