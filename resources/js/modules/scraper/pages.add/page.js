// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { scraperAddRequest } from '../service'
import { Validator } from 'ree-validate'

// import components
import Form from './components/Form'

class Page extends Component {
  static displayName = 'AddScraper'
  static propTypes = {
    scraper: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.validator = new Validator({
      title: 'required|min:3',
      content: 'required|min:10',
      description: 'required|min:10',
    })
    
    const scraper = this.props.scraper.toJson()
    
    this.state = {
      scraper,
      errors: this.validator.errors
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  UNSAFE_componentWillReceiveProps(nextProps) {
    const scraper = nextProps.scraper.toJson()
    
    if (!_.isEqual(this.state.scraper, scraper)) {
      this.setState({ scraper })
    }
    
  }
  
  handleChange(name, value) {
    const { errors } = this.validator
  
    this.setState({ scraper: { ...this.state.scraper, [name]: value} })
  
    errors.remove(name)
  
    this.validator.validate(name, value)
      .then(() => {
        this.setState({ errors })
      })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const scraper = this.state.scraper
    const { errors } = this.validator
    
    this.validator.validateAll(scraper)
      .then((success) => {
        if (success) {
          this.submit(scraper)
        } else {
          this.setState({ errors })
        }
      })
  }
  
  submit(scraper) {
    this.props.dispatch(scraperAddRequest(scraper))
      .catch(({ error, statusCode }) => {
        const { errors } = this.validator
  
        if (statusCode === 422) {
          _.forOwn(error, (message, field) => {
            errors.add(field, message);
          });
        }
  
        this.setState({ errors })
      })
  }
  
  render() {
    return <div className="col-sm-9 ml-sm-auto col-md-10 pt-3">
      <h1>Create</h1>
      <Form {...this.state}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit} />
    </div>
  }
}

export default Page