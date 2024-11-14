import React from "react";
import { Link, useLocation } from "react-router-dom";

function generateBreadcrumbs(routePath: string): string {
  const route = routePath.split("/");
  const currPath = route[1];
  const idSlug: string | undefined = route[2];
  if (currPath === "about") {
    return "About Us";
  }
  const pathName = currPath.charAt(0).toUpperCase() + currPath.slice(1);

  return idSlug ? pathName + " Details" : pathName;
}

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const routePath = location.pathname;

  const pageTitle: string = generateBreadcrumbs(routePath) || "";

  return (
    <div className="breadcrumb-area dark-bg">
      <div className="breadcrumb-inner">
        <h2 className="text-white">{pageTitle}</h2>
        <h6 className="text-white">
          <Link to="/">Główna</Link> / {pageTitle}
        </h6>
      </div>
    </div>
  );
};

export default Breadcrumb;
