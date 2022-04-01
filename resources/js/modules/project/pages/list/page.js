// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { projectListRequest, projectUpdateRequest, projectRemoveRequest } from '../../service'

// import components
import ProjectRow from './components/ProjectRow'
import Pagination from './components/Pagination'
import { Link } from 'react-router-dom'


class Page extends Component {
  static displayName = 'ProjectPage'
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

    dispatch(projectListRequest({}))
  }

  pageChange = (pageNumber) => {
    this.props.dispatch(projectListRequest({ pageNumber }))
  }

  handleRemove = (id) => {
    this.props.dispatch(projectRemoveRequest(id))
  }

  renderProjects() {
    return this.props.projects.map((project, index) => {
      return <ProjectRow key={index}
            project={project}
                         index={index}
                         handleRemove={this.handleRemove}/>
    })
  }
  
  render() {
    return <main className="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
      <h1>Projects</h1>
      <table className="table table-responsive table-striped">
      
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
        { this.renderProjects() }
        </tbody>
      </table>
      <Pagination meta={this.props.meta} onChange={this.pageChange}/>
      </main>
  }
}

export default Page
