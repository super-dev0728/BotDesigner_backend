import moment from 'moment'
import Model from '../../utils/Model'
import User from '../user/User'


class Project extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }

  initialize(props) {
    super.initialize(props)

    this.name = props.name || ''
    this.description = props.description || ''
    this.frequency = props.frequency || ''
    this.start_date = props.start_date || ''
    this.end_date = props.end_date || ''
    this.creation_date = props.creation_date || ''
    this.last_extraction = props.last_extraction
    this.nbot = props.nbot
    this.datasets_created = props.datasets_created
    this.records_extracteds = props.records_extracteds
    // relate user model
    this.user = props.user ? new User(props.user) : null
  }
}

export default Project