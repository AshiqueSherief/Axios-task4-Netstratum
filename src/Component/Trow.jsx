import React, { Fragment } from "react";

function Trow(props) {
  return (
    <Fragment>
      <tr>
        <td>{props.sl_no}</td>
        <td>{props.name}</td>
        <td>{props.phone}</td>
      </tr>
    </Fragment>
  );
}

export default Trow;
