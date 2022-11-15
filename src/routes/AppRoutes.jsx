import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FigurinasInternacionais from '../components/figurinasInternacionais/FigurinasInternacionais'
import FigurinhasNacionais from '../components/figurinasNacionais/FigurinhasNacionais'
import NotFound from '../components/helpers/NotFound'
import ProtectedRoute from '../components/helpers/ProtectedRoute'
import Home from '../components/home/Home'
import Login from '../components/login/Login'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <Login /> } />
      <Route path='figurinhas-nacionais'
      element={
        <ProtectedRoute>
          <FigurinhasNacionais />
        </ProtectedRoute>
      }
      />

      <Route path='figurinhas-internacionais'
      element={
        <ProtectedRoute>
          <FigurinasInternacionais />
        </ProtectedRoute>
      }
      />
      <Route path='login' element={ <Login /> } />
      <Route path='home' element={ <Home /> } />
      <Route path='*' element={ <NotFound /> } />
    </Routes>
  )
}

export default AppRoutes
