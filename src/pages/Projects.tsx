import React from "react";
import { HeaderArea, Project1, Breadcrumb } from "../components";

const Projects: React.FC = () => {
  return (
    <>
      <HeaderArea />
      <Breadcrumb />
      <Project1 type={true} />
    </>
  );
};

export default Projects;
