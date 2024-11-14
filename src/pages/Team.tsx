import React from "react";
import { Experience, HeaderArea, Team1, Breadcrumb } from "../components";

const Team: React.FC = () => {
  return (
    <>
      <HeaderArea />
      <Breadcrumb />
      <Experience />
      <Team1 type={true} />
    </>
  );
};

export default Team;
