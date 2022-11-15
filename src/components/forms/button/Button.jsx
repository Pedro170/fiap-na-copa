import React from 'react'
import { CButton } from './button.styles'

const Button = ({ text="Enviar", w, bold, ...props }) => {
  return (
  <CButton
    fontWeight={ bold }
    w={ w }
    { ...props }
  >
    { text }
  </CButton>)
}

export default Button