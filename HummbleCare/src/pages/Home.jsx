import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import NavBar from "../components/NavBar";
import Community from "../components/Community";

function Home() {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <Services/>
      <Community/>
    </div>
  );
}

export default Home;
