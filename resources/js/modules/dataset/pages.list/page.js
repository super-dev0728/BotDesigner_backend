// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { datasetListRequest, datasetUpdateRequest, datasetRemoveRequest } from '../../service'

// import components
import DatasetRow from './components/DatasetRow'
import Pagination from './components/Pagination'
import { Link } from 'react-router-dom'


class Page extends Component {
  static displayName = 'DatasetPage'
  static propTypes = {
    meta: PropTypes.object.isRequired,
    datasets: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(datasetListRequest({}))
  }

  pageChange = (pageNumber) => {
    this.props.dispatch(datasetListRequest({ pageNumber }))
  }

  handleRemove = (id) => {
    this.props.dispatch(datasetRemoveRequest(id))
  }

  renderDatasets() {
    return this.props.datasets.map((dataset, index) => {
      return <DatasetRow key={index}
            dataset={dataset}
                         index={index}
                         handleRemove={this.handleRemove}/>
    })
  }
  
  render() {
    return <main className="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
      <h1>Datasets</h1>
      <table className="table table-responsive table-striped">
      
            <thead>
              <tr>
                <th>Extraction date</th>
								<th>Nr. of Records</th>
								<th>Statistics</th>
								<th>URLs List</th>
                <th>Actions</th>
							</tr>
						</thead>

        <tbody>
        { this.renderDatasets() }
        </tbody>
      </table>
      <Pagination meta={this.props.meta} onChange={this.pageChange}/>
      </main>
  }
}

export default Page
