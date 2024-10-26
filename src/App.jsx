import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/personagens' element={<Characters />} />
        <Route path='/episodios' element={<Episodes />} />
      </Routes>
      <Footer />
    </>
  )
}