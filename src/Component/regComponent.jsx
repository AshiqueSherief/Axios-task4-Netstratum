import React from "react";

function regComponent({ children }) {
  return (
    <div>
      <table class="zigzag">
        <thead>
          <tr>
            <th>sl.no</th>
            <th>Name</th>
            <th>Phone no</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export default regComponent;
