import React, { useEffect, useState } from 'react'
import ActiveProjectCard from '../homepage/activeproject/ActiveProjectCard'
import axios from 'axios';

const ProjectList = () => {
      const[projectList, setProjectList]=useState([]);
      
      useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await axios.get("http://localhost:8000/project");
            setProjectList(response.data);
          } catch (error) {
            console.error("Error fetching project list:", error);
          }
        };
      
        fetchProduct();
      }, []);
  
  return (
    <div>  
      {projectList.map((projects)=>(
      <ActiveProjectCard
      key={projects.id}
      projectImage={projects.image}
      projectName={projects.title}
      projectDescription={projects.description}
      roleDescription={projects.rolesNeed}
      />
      ))
      }
  
    </div>
  )
}

export default ProjectList
