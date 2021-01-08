import React from "react";

function Popover(props) {
  const handleContinue = () => {
    window.location.reload(false);
  };
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="1000"
      role="dialog"
      data-backdrop="false"
      data-keyboard="true"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered " role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {props.title}
            </h5>
          </div>
          <div className="modal-body">{props.body}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss={props.title === "Logout" ? "modal" : "modal"}
              onClick={handleContinue}
            >
              Continue..
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popover;
