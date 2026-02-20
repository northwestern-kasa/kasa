import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Suspense, lazy, useEffect } from "react";

// Keep home route eager for fastest first paint
import Home from "./pages/home";

// Lazy-load non-critical routes to cut initial JS
const Family = lazy(() => import("./pages/family"));
const FamilyDetail = lazy(() => import("./pages/familyDetail"));
const Events = lazy(() => import("./pages/events"));
const Apply = lazy(() => import("./pages/apply"));
const Contact = lazy(() => import("./pages/contact"));
const EventDetail = lazy(() => import("./pages/EventDetail"));
const Calculator = lazy(() => import("./pages/calculator"));
// import MemberForm from './pages/memberform';

// import Login from './pages/login';
// import Register from './pages/register';
// import Directory from './pages/directory';
// import Contact from './pages/contact';
// import Wip from './pages/wip';
// import { useState } from 'react';
// import api from './fetchApiService';
import Footer from "./components/Footer";

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
  useEffect(() => {
    // Warm route chunks shortly after load so navigation stays instant
    const timer = window.setTimeout(() => {
      void import("./pages/family");
      void import("./pages/familyDetail");
      void import("./pages/events");
      void import("./pages/apply");
      void import("./pages/contact");
      void import("./pages/EventDetail");
      void import("./pages/calculator");
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <Router basename="/">
      <Header />
      <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center">Loading…</div>}>
        <div className="kasa-page-fade">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/family" element={<Family />} />
            <Route path="/family/:familyId" element={<FamilyDetail />} />
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
        </div>
      </Suspense>
      <Footer />
    </Router>
  )
}
