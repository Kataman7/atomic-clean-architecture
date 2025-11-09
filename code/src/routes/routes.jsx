import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PagHome from '../pages/PagHome'
import PagProjectDetail from '../pages/PagProjectDetail'
import PagSkills from '../pages/PagSkills'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PagHome />} />
      <Route path="/skills" element={<PagSkills />} />
      <Route path="/project/:projectId" element={<PagProjectDetail />} />
      <Route path="*" element={<PagHome />} />
    </Routes>
  )
}

export default AppRoutes
