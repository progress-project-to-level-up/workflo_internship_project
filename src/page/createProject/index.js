import React from 'react';
import CreateProject from './CreateProject';
import { Navbar } from '../../component/navbar/Navbar';

function CreatePageMain() {
  return (
    <>
      <Navbar />
      <CreateProject />
    </>
  )
}

export default CreatePageMain