import logo from './logo.svg';
import './App.css';
import "./input.css";
import { Routes, Route } from "react-router-dom"; //สำหรับRoutes ไว้ที่หน้าจอไหน
import LandingPage from './pages/LandingPage';
import DetailPage from './pages/DetailPage';
import Navbar from './components/Navbar';

function App() {
  return ( 
  <div className="bg-gradient-to-b from-[White] to-[#FF8C00] h-screen">
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/details" element={<DetailPage />} />
    </Routes>
  </div>
  );
}

export default App;
