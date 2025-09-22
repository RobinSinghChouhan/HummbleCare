import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import NavBar from "../components/NavBar";
import Community from "../components/Community";
import Testimonials from "../components/Testimonials";
import CareInformation from "../components/CareInformation";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
       <Services/>
       <Community/> 
      {/* <Testimonials/> */}
      <CareInformation/> 
      <Footer/>
    </div>
  );
}

export default Home;
