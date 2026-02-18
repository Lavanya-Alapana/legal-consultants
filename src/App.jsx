import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WhyChoose from './components/WhyChoose/WhyChoose';
import HowWeWork from './components/HowWeWork/HowWeWork';

import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <WhyChoose />
      <HowWeWork />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
