import React from "react";
import ActiveProjectCard from "./ActiveProjectCard";
import PictureCard1 from "../../../asset/svg/picturecard1.png";
import pictureCard2 from "../../../asset/svg/picturecard2.png";
import pictureCard3 from "../../../asset/svg/peer-pea.png";
import { FaRegFolder } from "react-icons/fa6";
import FolderIcon from "../../../asset/svg/projectsbtnicon.svg";
import "../../homepage/activeproject/activeproject.css";
import { Link } from "react-router-dom";

const OngoingProject = () => {
  const projectCard = [
    {
      id: 1,
      img: PictureCard1,
      proName: 'Elaxar',
      proTitle: 'Augmented Reality, Tech Art',
      proDesc: `Elaxar is an augmented reality web application that allows user experience art in 'real' or physical world — it imposes digital data onto realistic view.`,
      proRole: `Mobile App Developer, Writer 
      Technical Director(Dev), Researcher`
    },
    {
      id: 2,
      img: pictureCard2,
      proName: 'SheBuilds',
      proTitle: 'SDG - Female Empowerment, Business',
      proDesc: `A social impact movement that aims to empower the girl child. With a variety of products, we are changing the world one girl at a time.`,
      proRole: `Sponsors, Developers,
      Technical people and Role Models.`
    },
    {
      id: 3,
      img: pictureCard3,
      proName: 'Peer To Pea',
      proTitle: 'Blockchain Technology, Finance',
      proDesc: `Leveraging on the power of blockchain, Peer to Pea seeks to demystifies the undetectability in the system. Let’s create a new economic system.`,
      proRole: `Blockchain developers, researchers,
      backend Engineers.. `
    }
  ]
  return (
    <div className="main-project-container">
      <div className="active-project-text">
        <div className="active-project-head">
          <h1>Active Projects</h1>
        </div>
        <div className="main-card-container">
          {
            projectCard.map((project, ind) => (
              <ActiveProjectCard
                projectImage={project.img}
                projectName={project.proName}
                projectTitle={project.proTitle}
                projectDescription={project.proDesc}
                projectRole={project.proRole}
              />
            ))
          }
        </div>

        <Link to="/projects" className="viewLink">
          <FaRegFolder className="folder-icon"/>
          <span className="seeAll-Project">See All Projects</span>
        </Link>
      </div>
    </div>
  );
};
export default OngoingProject;
