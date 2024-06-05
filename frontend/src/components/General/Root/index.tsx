import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import Home from '../../pages/Home/Home';
import Download from '../../pages/Download/Download';
import Contact from '../../pages/Contacts';

const Root = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Root;
