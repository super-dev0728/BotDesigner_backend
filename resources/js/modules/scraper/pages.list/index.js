// import libs
import { connect } from 'react-redux'
import Scraper from '../../Scraper'

// import components
import Page from './Page'

const mapStateToProps = state => {
  const {data, ...meta} = state.scrapers
  
  return {
    scrapers: data?.map((scraper) => new Scraper(scraper)),
    meta: Object.assign({}, meta)
  }
}

export default connect(mapStateToProps)(Page)