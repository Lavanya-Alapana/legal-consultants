import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat';
import Footer from './components/Footer/Footer';
import Disclaimer from './components/Disclaimer/Disclaimer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import MatrimonialPage from './pages/MatrimonialPage';
import CivilRevenuePage from './pages/CivilRevenuePage';
import CriminalPage from './pages/CriminalPage';
import CareerPage from './pages/CareerPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Disclaimer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/matrimonial" element={<MatrimonialPage />} />
          <Route path="/services/civil-revenue" element={<CivilRevenuePage />} />
          <Route path="/services/criminal" element={<CriminalPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
