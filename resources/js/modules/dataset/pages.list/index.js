// import libs
import { connect } from 'react-redux'
import Dataset from '../../Dataset'

// import components
import Page from './Page'

const mapStateToProps = state => {
  const {data, ...meta} = state.datasets
  
  return {
    datasets: data?.map((dataset) => new Dataset(dataset)),
    meta: Object.assign({}, meta)
  }
}

export default connect(mapStateToProps)(Page)