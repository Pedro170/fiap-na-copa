import React from 'react'
import { Box, P } from '../../../styles/components'
import { CInput, Label } from './input.styles'

const Input = ({ id, label, type, value, onChange, error, required  }) => {
  return (
    <Box mb={ 1 }>
      <Label htmlFor={ id } >{ label }</Label>
      <CInput
        id={ id }
        type={ type }
        value={ value }
        onChange={ onChange }
        error={ error }
        required={ required }
      />
      <P style={{ color: '#f00' }}>{ error }</P>
    </Box>
  )
}

export default Input
