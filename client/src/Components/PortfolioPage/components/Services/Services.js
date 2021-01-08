import React, { useState, useEffect } from "react";
import "./Services.css";
import ManipulateIcons from "../ManipulateItems/manipulateicons";
import add from "../../../../pictures/add.png";

function Services(props) {
  const [servicesDesc, setServicesDesc] = useState(
    props.company.portfolio_services.description
  );
  const [states, setStates] = useState(["Hello"]);
  const [mouseClickOnList, setMouseClickOnList] = useState("1");
  const [mouseHoverOnList, setMouseHoverOnList] = useState("0");
  const eventsArray = Object.keys(props.company.events);
  useEffect(() => {
    switch (parseInt(mouseClickOnList)) {
      case 1: {
        setStates(props.company.events.AllEvents);
        break;
      }
      case 2: {
        setStates(props.company.events.Birthday);
        break;
      }
      case 3: {
        setStates(props.company.events.Wedding);
        break;
      }
      case 4: {
        setStates(props.company.events.Reception);
        break;
      }
      case 5: {
        setStates(props.company.events.Engagement);
        break;
      }
      default: {
        console.log("Default Case");
      }
    }
  }, [states]);
  const handleServicesDescClick = () => {
    props.funct(setServicesDesc);
    props.type("text");
    props.name("description");
    props.section("Services");
  };
  const handleEventsClick = (num) => {
    props.funct(setStates);
    props.type("text");
    props.name(eventsArray[num - 1]);
    props.section("Services");
  };
  const addMore = () => {
    return (
      <div>
        {!props.isUser ? (
          <div
            style={{
              position: "relative",
              marginLeft: "auto",
              marginRight: "0px",
              textAlign: "end",
            }}
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => handleEventsClick(parseInt(mouseClickOnList))}
          >
            <div className="portfolio_services__body__right__card animate__animated animate__rollIn d-flex flex-column">
              <img src={add} alt="addImage" width="20%" />
              Add State
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  };
  return (
    <div className="portfolio_services">
      <h1 className="portfolio_services__title">Services</h1>
      <div className="portfolio_services__contentBox">
        {!props.isUser ? (
          <div
            style={{
              position: "relative",
              marginLeft: "auto",
              marginRight: "0px",
              textAlign: "end",
            }}
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={handleServicesDescClick}
          >
            <ManipulateIcons color="black" />
          </div>
        ) : (
          ""
        )}
        <p className="portfolio_about__content">{servicesDesc}</p>
      </div>
      <div className="portfolio_services__body">
        <div className="portfolio_services__body__left">
          <ul>
            <li
              onMouseEnter={() => setMouseHoverOnList("1")}
              onMouseLeave={() => setMouseHoverOnList("0")}
              onClick={() => setMouseClickOnList("1")}
              style={{
                backgroundColor: `${
                  mouseClickOnList === "1" || mouseHoverOnList === "1"
                    ? "#198dfa"
                    : ""
                }`,
                color: `${
                  mouseClickOnList === "1" || mouseHoverOnList === "1"
                    ? "#fff"
                    : "#198dfa"
                }`,
              }}
            >
              All Events
            </li>
            <li
              onMouseEnter={() => setMouseHoverOnList("2")}
              onMouseLeave={() => setMouseHoverOnList("0")}
              onClick={() => setMouseClickOnList("2")}
              style={{
                backgroundColor: `${
                  mouseClickOnList === "2" || mouseHoverOnList === "2"
                    ? "#198dfa"
                    : ""
                }`,
                color: `${
                  mouseClickOnList === "2" || mouseHoverOnList === "2"
                    ? "#fff"
                    : "#198dfa"
                }`,
              }}
            >
              Birthday
            </li>
            <li
              onMouseEnter={() => setMouseHoverOnList("3")}
              onMouseLeave={() => setMouseHoverOnList("0")}
              onClick={() => setMouseClickOnList("3")}
              style={{
                backgroundColor: `${
                  mouseClickOnList === "3" || mouseHoverOnList === "3"
                    ? "#198dfa"
                    : ""
                }`,
                color: `${
                  mouseClickOnList === "3" || mouseHoverOnList === "3"
                    ? "#fff"
                    : "#198dfa"
                }`,
              }}
            >
              Reception
            </li>
            <li
              onMouseEnter={() => setMouseHoverOnList("4")}
              onMouseLeave={() => setMouseHoverOnList("0")}
              onClick={() => setMouseClickOnList("4")}
              style={{
                backgroundColor: `${
                  mouseClickOnList === "4" || mouseHoverOnList === "4"
                    ? "#198dfa"
                    : ""
                }`,
                color: `${
                  mouseClickOnList === "4" || mouseHoverOnList === "4"
                    ? "#fff"
                    : "#198dfa"
                }`,
              }}
            >
              Engagement
            </li>
            <li
              onMouseEnter={() => setMouseHoverOnList("5")}
              onMouseLeave={() => setMouseHoverOnList("0")}
              onClick={() => setMouseClickOnList("5")}
              style={{
                backgroundColor: `${
                  mouseClickOnList === "5" || mouseHoverOnList === "5"
                    ? "#198dfa"
                    : ""
                }`,
                color: `${
                  mouseClickOnList === "5" || mouseHoverOnList === "5"
                    ? "#fff"
                    : "#198dfa"
                }`,
              }}
            >
              Wedding
            </li>
          </ul>
        </div>
        <div className="portfolio_services__body__right animate__animated animate__rollIn">
          {props.company.states.length !== 0
            ? props.company.states.map((state, index) => {
                return (
                  <div
                    key={index}
                    className="portfolio_services__body__right__card animate__animated animate__rollIn"
                  >
                    {state}
                  </div>
                );
              })
            : ""}
          {addMore()}
        </div>
      </div>
    </div>
  );
}
export default Services;
