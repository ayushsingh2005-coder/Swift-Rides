import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Home page Sections
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Works from './HowitWorks.jsx';
import PopularRoutes from './PopularRoutes.jsx';
import Footer from './Footer.jsx';
import Herosection from './Hero2.jsx';

// Pages section
import About from './Pages/AboutUs.jsx';
import Careers from './Pages/Careers.jsx';
import Contact from './Pages/Contact';
import TermsConditions from './Pages/TermsConditions.jsx';
import PriPoli from './Pages/PriPoli.jsx';
import Cookiepoli from './Pages/Cookiepoli.jsx';
import Faq from './Pages/Faq.jsx';
import Press from './Pages/FindyourRide.jsx';
import HelpCenter from './Pages/HelpCenter.jsx';
import FindRide from "./Header/FindRIde.jsx";
import OfferRide from './Header/OfferRide.jsx';
import Login from "./Header/Login.jsx";
import SignUp from './Header/SignUp.jsx';


// Home Page Content
function HomePage() {
  return (
    <>
      <Hero />
      
      <Works />
      <PopularRoutes />
      <Herosection />
    </>
  );
}

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/termsconditions" element={<TermsConditions />} />
        <Route path="/pripoli" element={<PriPoli />} />
        <Route path="/cookiepoli" element={<Cookiepoli />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/press" element={<Press />} />
        <Route path="/helpcenter" element={<HelpCenter />} />
        <Route path="/find-rides" element={<FindRide />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/offer-ride" element={<OfferRide />} />
        

      </Routes>

      <Footer />
    </>
  );
}

export default App;
