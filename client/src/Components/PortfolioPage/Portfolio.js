import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import TopBar from "./components/Topbar/Topbar";
import About from "./components/About/About";
import Pictures from "./components/PicturesOfEvents/Pictures";
import FAQs from "./components/FAQs/FAQs";
import ContactUs from "./components/ContactUs/ContactUs";
import SocialMediaHandles from "../SocialMediaHandles/SocialMediaHandles";
import Home from "./components/Home/Home";
import Modal from "./components/Modal/Modal";
import Services from "./components/Services/Services";
import axios from "axios";

function Portfolio() {
  const [isUser, setIsUser] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [companyId, setCompanyId] = useState("");
  const [company_details, setCompany_Details] = useState({});
  const [func, setFunc] = useState({
    f: () => 3,
  });
  const [type, setType] = useState("text");
  const [name, setName] = useState("name");
  const [section, setSection] = useState("section");
  useEffect(() => {
    const url = window.location.href;
    const values = url.split("/");
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/organisers/portfolio/${
          values[values.length - 1]
        }`
      )
      .then(function (res) {
        setCompany_Details(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    document.title = "Portfolio";
    const url = window.location.href;
    const values = url.split("/");
    setCompanyId(values[values.length - 1]);
    setIsUser(
      values[3] === values[5] || values[3] === "company" ? false : true
    );
  }, [companyId]);

  const getTypeForModal = (modalType) => {
    setType(modalType);
  };
  const getFunctionForModal = (fnctn) => {
    setFunc({ f: fnctn });
  };
  const getNameForModal = (name) => {
    setName(name);
  };
  const getSectionForModal = (section) => {
    setSection(section);
  };
  if (isLoading) {
    return (
      <div class="spinner-grow text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  } else {
    return (
      <div className="portfolioPage">
        {type === "" ? (
          ""
        ) : (
          <Modal
            function={func.f}
            type={type}
            name={name}
            section={section}
            id={companyId}
          />
        )}

        <div>
          <TopBar title={company_details.company_name} />
          <div id="homePage">
            <Home
              isUser={isUser}
              company={company_details}
              funct={getFunctionForModal}
              type={getTypeForModal}
              name={getNameForModal}
              section={getSectionForModal}
            />
          </div>

          <div id="aboutPage">
            <About
              isUser={isUser}
              company={company_details}
              funct={getFunctionForModal}
              type={getTypeForModal}
              name={getNameForModal}
              section={getSectionForModal}
            />
          </div>
          <div id="servicesPage">
            <Services
              isUser={isUser}
              company={company_details}
              funct={getFunctionForModal}
              type={getTypeForModal}
              name={getNameForModal}
              section={getSectionForModal}
            />
          </div>
          <div id="portfolioPage">
            <Pictures
              isUser={isUser}
              company={company_details}
              funct={getFunctionForModal}
              type={getTypeForModal}
              name={getNameForModal}
              section={getSectionForModal}
            />
          </div>

          <div id="faqsPage">
            <FAQs
              isUser={isUser}
              funct={getFunctionForModal}
              type={getTypeForModal}
              name={getNameForModal}
              section={getSectionForModal}
            />
          </div>

          <div id="contactUsPage">
            <ContactUs
              isUser={isUser}
              funct={getFunctionForModal}
              type={getTypeForModal}
              name={getNameForModal}
              section={getSectionForModal}
            />
          </div>

          <div style={{ background: "#e1e8f0" }}>
            <SocialMediaHandles />
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
