import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import CategoryPage from './pages/CategoryPage';
import AboutLayout from './components/AboutLayout';
import WhyUs from './pages/WhyUs';
import OurPartners from './pages/OurPartners';
import OurDesigners from './pages/OurDesigners';
import CSR from './pages/CSR';
import ContactUs from './pages/ContactUs';
import Workshop from './pages/Workshop';
import Quote from './pages/Quote';
import Videos from './pages/Videos';
import Blogs from './pages/Blogs';
import Services from './pages/Services';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:categoryId" element={<CategoryPage />} />
          <Route path="about" element={<AboutLayout />}>
            <Route index element={<Navigate to="why-us" replace />} />
            <Route path="why-us" element={<WhyUs />} />
            <Route path="partners" element={<OurPartners />} />
            <Route path="designers" element={<OurDesigners />} />
          </Route>
          <Route path="workshop" element={<Workshop />} />
          <Route path="services" element={<Services />} />
          <Route path="videos" element={<Videos />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="csr" element={<CSR />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="quote" element={<Quote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
