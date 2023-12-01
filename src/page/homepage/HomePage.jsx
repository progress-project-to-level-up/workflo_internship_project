import { Navbar } from "../../component/navbar/Navbar";
import HeroCard from "./card/HeroCard";
import CreatorCard from "./creatorcard/CreatorCard";
import OngoingProject from "./activeproject/OngoingProject";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
  
      <div>
        {/* <Navbar /> */}
        <HeroCard />
        <CreatorCard />
        <OngoingProject />
      </div>
 
  );
};

export default HomePage;
