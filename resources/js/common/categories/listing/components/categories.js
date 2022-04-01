import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Category from './Category'

class Categories extends Component {
  static displayName = 'Categories'
  static propTypes = {
    categories: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.state = {
      //
    }
  }
  
  renderCategories() {
    return this.props.categories.map((category, index) => {
      return <Category key={`category-${index}`}
                      index={index}
                      category={category}/>
    })
  }
  
  render() {
    return (<section id="components-categories">
      <div className="container">
        <div className="row">
          { this.props.categories && this.renderCategories() }
        </div>
      </div>
    </section>)
  }
}

export default Categories