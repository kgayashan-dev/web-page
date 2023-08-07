
import Activity from "./components/Activity";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Top from "./components/Top";


function App() {
  return (
    <div className="bg-gray-300">
      <Top />
      <Navbar className=""/>
      <Hero/>
      <Activity/>
      <Booking/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
