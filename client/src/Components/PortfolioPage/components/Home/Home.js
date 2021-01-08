import React, { useEffect, useState } from "react";
import "./Home.css";
import Five from "../../../../pictures/five.png";
import ManipulateIcons from "../ManipulateItems/manipulateicons";
import { Link } from "react-router-dom";

function Home(props) {
  const [title, setTitle] = useState(props.company.portfolio_home.title);
  const [head, setHead] = useState(props.company.portfolio_home.description);
  const [website, setWebsite] = useState(props.company.portfolio_home.website);

  useEffect(() => {}, [props]);

  const handleTitleClick = () => {
    props.funct(setTitle);
    props.type("text");
    props.name("title");
    props.section("Home");
  };
  const handleHeadClick = () => {
    props.funct(setHead);
    props.type("text");
    props.name("description");
    props.section("Home");
  };
  const handleWebsiteClick = () => {
    props.funct(setWebsite);
    props.type("text");
    props.name("website");
    props.section("Home");
  };
  if (props.company !== undefined) {
    return (
      <div className="portfolio_home">
        <div className="portfolio_home__left">
          {!props.isUser ? (
            <div
              style={{
                position: "relative",
                marginLeft: "auto",
                marginRight: "0px",
              }}
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={handleTitleClick}
            >
              <ManipulateIcons />
            </div>
          ) : (
            ""
          )}
          <h1 className="portfolio_home__left__title">{title}</h1>
          {!props.isUser ? (
            <div
              style={{
                position: "relative",
                marginLeft: "auto",
                marginRight: "0px",
              }}
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={handleHeadClick}
            >
              <ManipulateIcons />
            </div>
          ) : (
            ""
          )}
          <p className="portfolio_home__left__home">{head}</p>
          <div className="portfolio_home__left__button">
            {!props.isUser ? (
              <div
                style={{
                  position: "relative",
                  marginLeft: "auto",
                  marginRight: "0px",
                }}
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={handleWebsiteClick}
              >
                <ManipulateIcons />
              </div>
            ) : (
              ""
            )}
            <Link onClick={() => window.open(website, "_blank")}>
              <button className="goToWebsiteButton">Go to our Website</button>
            </Link>
          </div>
        </div>
        <div className="portfolio_home__right">
          <img className="rightImage" src={Five} alt="portfolioImage" />
        </div>
      </div>
    );
  } else {
    return "";
  }
}

export default Home;
