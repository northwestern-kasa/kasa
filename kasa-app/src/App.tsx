import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Suspense, lazy } from "react";
// Lazy pages that aren’t needed for first paint
const Events = lazy(() => import("./pages/events"));
const Calculator = lazy(() => import("./pages/calculator"));

import Home from './pages/home';
import Family from './pages/family';
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
    <Router basename="/">
      <Header/>
      <Toaster position="top-center" richColors />
      <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center">Loading…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/family" element={<Family />} />
          <Route path="/events" element={<Events />} />
          <Route path="/apply" element={<Apply />} />
          {/* <Route path="/memberform" element={<MemberForm user={user} />} /> */}
          {/* <Route path="/directory" element={<Directory />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* Easter egg route: hidden Drink Calculator */}
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/events/:id" element={<EventDetail />} />
          {/* <Route path="/wip" element={<Wip />} /> */}
          
          {/* Uncomment these routes when login and register pages are ready */}
          {/* <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} /> */}

        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}