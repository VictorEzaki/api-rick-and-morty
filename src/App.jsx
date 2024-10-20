import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Characters from './pages/Characters';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/personagens' element={<Characters />} />
      </Routes>
      <Footer />
    </>
  )
}