import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import InteriorDesign from './pages/InteriorDesign';
import VideoEditing from './pages/VideoEditing';
import SoftwareServices from './pages/SoftwareServices';
import ClientsPage from './pages/ClientsPage';
import ContactPage from './pages/ContactPage';
import './index.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="interior-design" element={<InteriorDesign />} />
          <Route path="video-editing" element={<VideoEditing />} />
          <Route path="software-services" element={<SoftwareServices />} />
          <Route path="clients" element={<ClientsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
