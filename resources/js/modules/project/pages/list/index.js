// import libs
import { connect } from 'react-redux'
import Project from '../../Project'

// import components
import Page from './Page'

const mapStateToProps = state => {
  const {data, ...meta} = state.projects
  
  return {
    projects: data?.map((project) => new Project(project)),
    meta: Object.assign({}, meta)
  }
}

export default connect(mapStateToProps)(Page)