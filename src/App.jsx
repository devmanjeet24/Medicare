import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Component/About';
import Contact from './Component/Contact';
import Service from './Component/Service';
import News from './Component/News';
import Home from './Component/Home';
import Navbarm from './Component/Navbarm';
import Footer from './Component/Footer';






function App() {
  return (
    <>

      <div className='section'>

        <Router>

          <Navbarm />

          <Routes>

            <Route path='/contact' element={<Contact />} ></Route>

            <Route path='/service' element={<Service />}></Route>

            <Route path='/news' element={<News />}></Route>

            <Route path='/about' element={<About />}></Route>

            <Route path='/' element={<Home />}></Route>

          </Routes>

          <Footer />

        </Router>

      </div>

    </>
  );
}

export default App;
