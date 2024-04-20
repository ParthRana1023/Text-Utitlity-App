import React from "react";

function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          class={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alert.type}</strong>: {props.alert.message}
        </div>
      )}
    </div>
  );
}

export default Alert;
