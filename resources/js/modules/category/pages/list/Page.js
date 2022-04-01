// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { categoryListRequest, categoryUpdateRequest, categoryRemoveRequest } from '../../service'

// import components
import CategoryRow from './components/CategoryRow'
import Pagination from './components/Pagination'
import { Link } from 'react-router-dom'


class Page extends Component {
  static displayName = 'CategoryPage'
  static propTypes = {
    meta: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(categoryListRequest({}))
  }

  pageChange = (pageNumber) => {
    this.props.dispatch(categoryListRequest({ pageNumber }))
  }

  handleRemove = (id) => {
    this.props.dispatch(categoryRemoveRequest(id))
  }

  renderCategories() {
    return this.props.categories.map((category, index) => {
      return <CategoryRow key={index}
            category={category}
                         index={index}
                         handleRemove={this.handleRemove}/>
    })
  }
  
  render() {
    return <main className="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
      <h1>Categories</h1>
      <table className="table table-responsive table-striped">
      
        <thead>
              <tr>
                <th>Name/ID/Description</th>
								<th>Creation date</th>
								<th>Nr. bots/scrapers</th>
								<th>Actions</th>
							</tr>
						</thead>

        <tbody>
        { this.renderCategories() }
        </tbody>
      </table>
      <Pagination meta={this.props.meta} onChange={this.pageChange}/>
      </main>
  }
}

export default Page
