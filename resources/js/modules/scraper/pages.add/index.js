import { connect } from 'react-redux'
import Scraper from '../../Scraper'

// import components
import Page from './Page'

const mapStateToProps = () => {
  const scraper = new Scraper({})
  return {
    scraper
  }
}

export default connect(mapStateToProps)(Page)