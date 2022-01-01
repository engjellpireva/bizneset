import React from "react";
import { Link } from "react-router-dom";

export default function NavLink(props) {
  return (
    <li className="text-gray-300 hover:text-white transition duration-500 ease-in-out">
      <Link to={props.link}>{props.name}</Link>
    </li>
  );
}
