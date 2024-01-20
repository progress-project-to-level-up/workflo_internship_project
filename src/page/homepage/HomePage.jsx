// import { Navbar } from "../../component/navbar/Navbar";
import HeroCard from "./card/HeroCard";
import CreatorCard from "./creatorcard/CreatorCard";
import OngoingProject from "./activeproject/OngoingProject";
// import { Link } from "react-router-dom";
import VisionHeroCard from "./visionherocard/VisionHeroCard";
import ContributorCard from "./ContributorCard/ContributorCard";
import SponsorCard from "./SponsorCard/SponsorCard";
import Footer from "../../component/Footer/Footer";



const HomePage = () => {
  return (
  
      <div>
        {/* <Navbar /> */}
        <HeroCard />
        <CreatorCard />
        <OngoingProject />
        <ContributorCard />
        <VisionHeroCard />
        <SponsorCard />
        <Footer />
      </div>
 
  );
};

export default HomePage;
