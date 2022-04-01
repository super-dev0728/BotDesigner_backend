import moment from 'moment'
import Model from '../../utils/Model'
import User from '../user/User'

class Category extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }

  initialize(props) {
    super.initialize(props)

    this.name = props.name || ''
    this.description = props.description || ''
    
    // relate user model
    this.user = props.user ? new User(props.user) : null
  }
}

export default Category