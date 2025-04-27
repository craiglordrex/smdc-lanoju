import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import Properties from './pages/Properties'
import AboutMe from './pages/About Me'
import Articles from './pages/Articles'
import Faqs from './pages/Faqs'
import Inquire from './pages/Inquire'
import InnerFAQS from './pages/InnerFAQS'
import FAQBody from "./sections/FAQBody";
import InnerFAQSBody from "./sections/InnerFAQSBody";

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/properties" element={<Properties/>}/>
            <Route path="/aboutme" element={<AboutMe/>}/>
            <Route path="/articles" element={<Articles/>}/>
            <Route path="/faqs" element={<Faqs/>}/>
            <Route path="/inquirenow" element={<Inquire/>}/>
            <Route path="/InnerFAQ" element={<InnerFAQS />} />
            <Route path="/inner-faqs" element={<InnerFAQSBody title="" question="" />} />
            <Route path="/faq" element={<FAQBody />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
