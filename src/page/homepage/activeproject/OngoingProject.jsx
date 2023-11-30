import React from "react";
import ActiveProjectCard from "./ActiveProjectCard";
import PictureCard1 from "../../../asset/svg/picturecard1.svg";
import pictureCard2 from "../../../asset/svg/picturecard2.svg";
import pictureCard3 from "../../../asset/svg/picturecard3.svg";
import "../../homepage/activeproject/activeproject.css";

const OngoingProject = () => {
  return (
    <div>
      <div className="main-project-container">
        <div className="active-project-text">
          <h1>Active Project</h1>
          <div className="main-card-container">

            <ActiveProjectCard
              projectImage={PictureCard1}
              projectName="Elaxar"
              projectDescription="Elaxar is an augmented reality web application\n that allows user experience art in 'real' or physical\n world — it imposes digital data onto realistic view."
              roleDescription="Mobile App Developer, Writer\n 
            Technical Director(Dev), Researcher"
            />
            <ActiveProjectCard
              projectImage={pictureCard2}
              projectName="sheBuilds"
              projectDescription="A social impact movement that aims to empower \n the girl child. With a variety of products, we are\n changing the world one girl at a time."
              roleDescription="ponsors, Developers,\n
            Technical people and Role Models."
            />
            <ActiveProjectCard
              projectImage={pictureCard3}
              projectName="Peer to Pea"
              projectDescription="Leveraging on the power of blockchain, Peer to\n Pea seeks to demystifies the undetectability in \nthe system. Let’s create a new economic system"
              roleDescription="Blockchain developers, researchers\n,
              backend Engineers.. "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default OngoingProject;
