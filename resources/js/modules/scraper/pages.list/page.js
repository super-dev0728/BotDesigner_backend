// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Table, Modal, ModalHeader,ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import { scraperListRequest, scraperUpdateRequest, scraperRemoveRequest } from '../../service'

// import components
import ScraperRow from './components/ScraperRow'
import ScraperStats from './components/ScraperStats';
import Pagination from './components/Pagination'
import { Link } from 'react-router-dom'

class Page extends Component {
	
  static displayName = 'ScraperPage'
  static propTypes = {
    meta: PropTypes.object.isRequired,
    scrapers: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(scraperListRequest({}))
  }

  pageChange = (pageNumber) => {
    this.props.dispatch(scraperListRequest({ pageNumber }))
  }

  handleRemove = (id) => {
    this.props.dispatch(scraperRemoveRequest(id))
  }

  renderScrapers() {
    return this.props.categories.map((category, index) => {
      return <ScraperRow key={index}
            category={category}
                         index={index}
                         handleRemove={this.handleRemove}/>
    })
  }
  
  render() {
	const [modal1, setModal1] = useState(false);
	const toggle1 = () => setModal1(!modal1);
    return <main className="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
      <h1>Scrapers</h1>
      <table className="table table-responsive table-striped">
      
          <thead>
              <tr>
                <th>Name/ID</th>
								<th>Description</th>
								<th>Statistics</th>
								<th>Actions</th>
							</tr>
						</thead>

        <tbody>
        { this.renderScrapers() }
        </tbody>
      </table>
      <Pagination meta={this.props.meta} onChange={this.pageChange}/>


      <Modal isOpen={modal1} toggle={toggle1} className="modalWrap project-static">
			<ModalHeader>
				<span className="modalTitle">Bot/Scraper Statistics</span>
				<span className="closeButton" onClick={toggle1}></span>
			</ModalHeader>          
			<ModalBody>
				<ScraperStats handle_close_modal={toggle1}></ScraperStats>
			</ModalBody>
		</Modal>

      </main>
  }
}

export default Page
