import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import Family from './pages/family';
import Events from './pages/events';
import Apply from './pages/apply';
import MemberForm from './pages/memberform';
import Contact from './pages/contact';
import Login from './pages/login';
import Register from './pages/register';
import Directory from './pages/directory';
import Wip from './pages/wip';
import { useEffect, useState } from 'react';
import api from './fetchApiService';

export default function App() {
  const [user, setUser] = useState({});
  const validateToken = async () => {
    try {
      const res = await api.get("/validateToken")
      setUser({
        userId: res.userId,
        role: res.role
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    validateToken()
  }, [])
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Wip/>} />
        <Route path="/family" element={<Wip/>} />
        <Route path="/events" element={<Wip/>} />
        <Route path="/apply" element={<Apply/>} />
        <Route path="/memberform" element={<MemberForm user={user} />} />
        <Route path="/directory" element={<Wip/>} />
        <Route path="/contact" element={<Wip/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  )
}