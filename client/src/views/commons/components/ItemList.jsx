import React from "react";
import { NavLink } from "react-router-dom";

export default function ItemList(props) {
  return (
    <div className="d-flex position-relative">
      <img
        src={props.img}
        className="flex-shrink-0 me-3 hover-shadow"
        style={{ maxWidth: "15rem" }}
        alt="..."
      />
      <div>
        <h5 className="mt-0">
          {" "}
          {props.title} {props.time}
        </h5>
        <p className="hover-shadow">{props.txt}</p>
        <NavLink to={props.url} className="stretched-link">
          Abstract
        </NavLink>
      </div>
    </div>
  );
}
