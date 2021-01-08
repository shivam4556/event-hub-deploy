import React, { useState, useEffect } from "react";
import axios from "axios";

function Modal(props) {
  const [saved, setSaved] = useState(false);
  const [value, setValue] = useState(null);
  useEffect(() => {});

  const handleSave = () => {
    setSaved(true);
    props.function(value);
    if (
      props.name === "AllEvents" ||
      props.name === "Engagement" ||
      props.name === "Birthday" ||
      props.name === "Wedding" ||
      props.name === "Reception"
    ) {
      axios
        .patch(
          `${process.env.REACT_APP_BACKEND_URL}/organisers/setStates/${props.name}/${props.id}`,
          { [props.name]: value }
        )
        .then((res) => {
          console.log(res);
        });
    } else {
      axios
        .patch(
          `${process.env.REACT_APP_BACKEND_URL}/organisers/portfolio/${props.section}/${props.name}/${props.id}`,
          { [props.name]: value }
        )
        .then((res) => {
          console.log(res);
        });
    }
  };
  const handleTextChange = (e) => {
    setValue(e.target.value);
  };
  const onCloseModal = () => {
    setSaved(false);
  };
  const propsText = () => {
    return (
      <form>
        <div className="form-group">
          <label for="message-text" className="col-form-label">
            Write your text here :
          </label>
          <textarea
            className="form-control"
            id="message-text"
            placeholder=""
            onChange={handleTextChange}
          ></textarea>
        </div>
      </form>
    );
  };
  const handleChange = (event) => {
    setValue(URL.createObjectURL(event.target.files[0]));
  };
  const propsFile = () => {
    return (
      <div>
        <input type="file" onChange={handleChange} />
        <img src={value} alt="inputImage" width="100%" height="100%" />
      </div>
    );
  };
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              id="exampleModalLabel"
              style={{ color: "black" }}
            >
              Edit
            </h5>
          </div>
          <div className="modal-body">
            {props.type === "text" ? propsText() : ""}
            {props.type === "file" ? propsFile() : ""}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={onCloseModal}
            >
              Close
            </button>
            <button
              type="button"
              className={`btn btn-primary ${saved ? "d-none" : ""}`}
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
