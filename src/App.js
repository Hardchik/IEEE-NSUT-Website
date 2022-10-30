import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousel/Carousel';
import About from './components/about/About';
import Events from './components/events/Events';
import Team from './components/team/Team';
import Couns from './components/team/Couns';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolio/Portfolio';
import Awards from './components/awards/Awards';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Carousel/>
      <About/>
      <Services/>
      <Events/>
      <Couns/>
      <Team/>
      <Awards/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
