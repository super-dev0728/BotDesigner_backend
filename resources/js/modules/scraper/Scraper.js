import moment from 'moment'
import Model from '../../utils/Model'
import User from '../user/User'

class Scraper extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }

  initialize(props) {
    super.initialize(props)

    this.name = props.name || ''
    this.startUrl = props.startUrl || ''
    this.is_single_post = props.is_single_post || ''
    this.initial_search_button_selector = props.initial_search_button_selector || ''
    this.initial_search_type = props.initial_search_type || ''
    this.initial_keyword_field_selector = props.initial_keyword_field_selector || ''
    this.initial_search_terms = props.initial_search_terms
    this.initial_min_value_field_selector = props.initial_min_value_field_selector
    this.initial_max_value_field_selector = props.initial_max_value_field_selector
    this.initial_max_values_terms = props.initial_max_values_terms
    this.result_search_button_selector = props.result_search_button_selector
    this.generated_code = props.generated_code
    this.next_page_selector = props.next_page_selector
    this.record_selector = props.record_selector
    this.link_details_page_selector = props.link_details_page_selector
    this.is_infinite_scroll = props.is_infinite_scroll
    this.is_details_page = props.is_details_page
    // relate user model
    this.user = props.user ? new User(props.user) : null
    this.project = props.project ? new User(props.project) : null
  }
}

export default Scraper