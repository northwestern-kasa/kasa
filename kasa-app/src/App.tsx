import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import Family from './pages/family';
import Events from './pages/events';
import Apply from './pages/apply';
import Contact from './pages/contact';
import Login from './pages/login';
import Register from './pages/register';
import Directory from './pages/directory';

export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/family" element={<Family/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/apply" element={<Apply/>} />
        <Route path="/directory" element={<Directory/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  )
}