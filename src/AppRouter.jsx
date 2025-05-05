import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

export default function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}>
      </Route>
    </Routes>
  )
}
