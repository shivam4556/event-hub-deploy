import React, { useState } from "react";
import ManipulateIcons from "../ManipulateItems/manipulateicons";
import "./Card.css";

function Card(props) {
  const [photo, setPhoto] = useState("");
  const handlePhotoClick = () => {
    props.funct(setPhoto);
    props.type("file");
  };

  return (
    <div
      className="card p-2 m-2"
      style={{
        width: "20rem",
        height: "auto",
        overflow: "none",
        background: "white",
      }}
    >
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
          onClick={handlePhotoClick}
        >
          <ManipulateIcons color="black" />
        </div>
      ) : (
        ""
      )}
      <img
        className="card-img-top"
        src={photo}
        alt="CardImageCap"
        style={{ width: "100%", height: "15rem" }}
      />
    </div>
  );
}

export default Card;
