import React, { useState } from "react";
import Prophecy from "../Prophecy/Prophecy";
import Modal from "../UI/Modal";
import classes from "./Month.module.css";

const Month = (props) => {
  const [show, setShow] = useState(false);

  const showToogler = (event) => {
    setShow((prevShow) => !prevShow);
  };

  let prophecyList = <p>No Prophecy for you</p>;

  if (props.prophecies.length > 0) {
    prophecyList = (
      <ul className={classes["cart-items"]}>
        {props.prophecies.map((item) => {
          return (
            <Prophecy
              prophet={item.name}
              key={item.name}
              prophecy={item.prophecy}
            />
          );
        })}
      </ul>
    );
  }

  return (
    <React.Fragment>
      <li className={classes.month} onClick={showToogler}>
        <h3>{props.month}</h3>
      </li>
      {show ? <Modal onClose={showToogler}>{prophecyList}</Modal> : ""}
    </React.Fragment>
  );
};

export default Month;
