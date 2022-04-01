import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap';
const displayName = 'ScraperStats'
const propTypes = {
  scraper: PropTypes.object.isRequired,
  handle_close_modal: PropTypes.func.isRequired,
}
const ScraperStats = ({  scraper }) => {
  return (
    <div className="modalBodyContent">
					<div className="modalBodyTop">
						<h6>{scraper.name}</h6>
						<span>ID# {scraper.id}</span>
					</div>
					<div className="modalBottomContent">
						<Row>
							<Col sm="4">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Creation date</h5>
									</div>
									<div className="card-block-body">
										<span>{scraper.createdAt}</span>
									</div>
								</div>
							</Col>
							<Col sm="4">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Latest edit</h5>
									</div>
									<div className="card-block-body">
										<span>{scraper.lastEdit}</span>
									</div>
								</div>
							</Col>
							<Col sm="4">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Latest data set</h5>
									</div>
									<div className="card-block-body">
										<span>{scraper.lastDataset}</span>
									</div>
								</div>
							</Col>
							<Col sm="4">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Nr. data sets created</h5>
									</div>
									<div className="card-block-body">
										<span>{scraper.nDatasetCreated}</span>
									</div>
								</div>
							</Col>
              <Col sm="4">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Tot. records extracted</h5>
									</div>
									<div className="card-block-body">
										<span>{scraper.totRecords}</span>
									</div>
								</div>
							</Col>
              <Col sm="4">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Nr. records<span>(current month)</span></h5>
									</div>
									<div className="card-block-body">
										<span>{scraper.totRecordsCurrentMonth}</span>
									</div>
								</div>
							</Col>
						</Row>            
					</div>
          <div className="btn-block">
              <a href="#0" onClick={handle_close_modal}>Close</a>
            </div>
				</div>
  )
}
ScraperStats.displayName = displayName
ScraperStats.propTypes = propTypes
export default ScraperStats