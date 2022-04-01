import moment from 'moment'
import Model from '../../utils/Model'
import User from '../user/User'

class Dataset extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }


  initialize(props) {
    super.initialize(props)

    this.extraction_date = props.extraction_date || ''
    this.number_records = props.number_records || ''
    this.website = props.website || ''
    this.processed_urls = props.processed_urls || ''
    this.failed_urls = props.failed_urls;
    
    // relate user model
    this.user = props.user ? new User(props.user) : null
    this.scraper = props.scraper ? new Scraper(props.scraper) : null
  }
}

export default Dataset