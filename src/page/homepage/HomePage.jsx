import HeroCard from "./card/HeroCard";
import CreatorCard from "./creatorcard/CreatorCard";
import OngoingProject from "./activeproject/OngoingProject";
import VisionHeroCard from "./visionherocard/VisionHeroCard";
import ContributorCard from "./ContributorCard/ContributorCard";
import SponsorCard from "./SponsorCard/SponsorCard";
import Footer from "../../component/Footer/Footer";
import { Navbar } from "../../component/navbar/Navbar";



const HomePage = () => {
  return (
    <div>
      <Navbar />
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
