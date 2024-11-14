import React from "react";
import {
  HeaderArea,
  ContactSection,
  ContactInfo,
  Breadcrumb,
} from "../components";

const Contact: React.FC = () => {
  return (
    <>
      <HeaderArea />
      <Breadcrumb />
      <ContactSection />
      <ContactInfo />
    </>
  );
};

export default Contact;
