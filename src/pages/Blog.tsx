import React from "react";
import { HeaderArea, Blog1, Breadcrumb } from "../components";

const Blog: React.FC = () => {
  return (
    <>
      <HeaderArea />
      <Breadcrumb />
      <Blog1 type={true} />
    </>
  );
};

export default Blog;
