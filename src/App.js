import { Routes, Route } from 'react-router-dom';
import './App.css';
import './reset.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import MainPage from './pages/mainPage/MainPage';
import AboutPage from './pages/aboutPage/AboutPage';
import ConsultationPage from './pages/ConsultationPage';
import BooksPage from './pages/BooksPage';
import CardsPage from './pages/CardsPage';
import ContactsPage from './pages/contactsPage/ContactsPage';
import Modal from './components/modal/Modal';
import { useState } from 'react';

function App() {

  // const [modalActive, setModalActive] = useState(true);
  return (
    <div className="App">
        <Header />
        {/* <Modal isActive={modalActive} setIsActive={setModalActive}/> */}
        <Routes>
          <Route path="/" element={<MainPage/> } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/consultations" element={<ConsultationPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        <Footer/>

    </div>
  );
}

export default App;
