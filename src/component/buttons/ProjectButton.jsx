import React from 'react';
import { Link } from 'react-router-dom';
import '../../component/buttons/projectbutton.css';



const ProjectButton = () => {
  return (
    <Link to='/create-project'>
      <button className='create-project'>Create Project</button>
    </Link>
  )
}

export default ProjectButton
