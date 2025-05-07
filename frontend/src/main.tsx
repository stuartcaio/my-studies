import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyStudy from './components/MyStudy/my-study.tsx'
import OthersUsers from './components/OthersUsers/others-users.tsx'
import NewUser from './components/NewUser/new-user.tsx'

createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/my-study" element={<MyStudy />} />
      <Route path="/others-users" element={<OthersUsers />} />
      <Route path="/new-user" element={<NewUser />} />
    </Routes>
  </Router>
)
