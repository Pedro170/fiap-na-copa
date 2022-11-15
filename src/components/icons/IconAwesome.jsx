import React from 'react'

const IconsAwesome = ({ s='s', icon }) => {
  return <i className={`fa${s} fa-${icon}`}></i>
}

export default IconsAwesome