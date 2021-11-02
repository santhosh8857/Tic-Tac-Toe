import React from "react";
import { FaPen, FaRegCircle, FaTimes } from "react-icons/fa";

const Icons = (props) => {
  switch (props.item) {
    case "circle":
      return <FaRegCircle className="icon" />;
    case "cross":
      return <FaTimes className="icon" />;
    default:
      return <FaPen className="icon" />;
  }
};

export default Icons;
