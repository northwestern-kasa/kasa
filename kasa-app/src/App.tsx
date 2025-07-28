import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import Family from './pages/family';
import Events from './pages/events';
import EventDetail from './pages/EventDetail';
import Apply from './pages/apply';
import Contact from './pages/contact';
// import MemberForm from './pages/memberform';

// import Login from './pages/login';
// import Register from './pages/register';
// import Directory from './pages/directory';
// import Contact from './pages/contact';
// import Wip from './pages/wip';
// import { useEffect, useState } from 'react';
// import api from './fetchApiService';
import { Toaster } from "@/components/ui/sonner"
import Footer from './components/Footer';

export default function App() {
  // const [user, setUser] = useState({});
  // const validateToken = async () => {
  //   try {
  //     const res = await api.get("/validateToken")
  //     setUser({
  //       userId: res.userId,
  //       role: res.role
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // useEffect(() => {
  //   validateToken()
  // }, [])
  return (
    <Router>
      <Header/>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/family" element={<Family />} />
        <Route path="/events" element={<Events />} />
        <Route path="/apply" element={<Apply />} />
        {/* <Route path="/memberform" element={<MemberForm user={user} />} /> */}
        {/* <Route path="/directory" element={<Directory />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path ="/events/:id" element={<EventDetail />} />
        {/* <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} /> */}
      </Routes>
      <Footer />
    </Router>
  )
}