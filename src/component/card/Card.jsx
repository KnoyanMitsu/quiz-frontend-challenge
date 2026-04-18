import React from 'react'
import PropTypes from 'prop-types'

Card.prototype = {
  children: PropTypes.node.isRequired,
}

function Card({children}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5">
      {children}
    </div>
  )
}

export default Card 