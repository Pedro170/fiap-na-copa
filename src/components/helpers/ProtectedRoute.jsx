import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const verificar = sessionStorage.getItem('usuario-validado')
  
  return verificar ? children :  <Navigate to='/home' />
}

export default ProtectedRoute