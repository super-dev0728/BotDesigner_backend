// import libs
import React from 'react'
import PropTypes from 'prop-types'

// import components
import { Link } from 'react-router-dom'

const displayName = 'CategoryComponent'
const propTypes = {
  index: PropTypes.number.isRequired,
  category: PropTypes.object.isRequired,
}

// const renderAuthor = (article) => {
//   return article.user && `By ${ article.user.name }`
// }

const renderPublishedAt = (category) => {
  return category.publishedAt && `at ${category.publishedAt.format('MMMM D, YYYY')}`
}

function render ({ category }) {
  return <div className="col-12 col-sm-9 mb-5 mx-auto">
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{category.title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{renderPublishedAt(category)}</h6>
        <p className="card-text">{ category.description }</p>
        <Link to={`blog/${category.slug}`} className="card-link">Read More</Link>
      </div>
    </div>
  </div>
}

render.displayName = displayName
render.propTypes = propTypes

export default render
