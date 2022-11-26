import React, { useState } from "react";
import Prophesy from "../Prophesy/Prophesy";
import Modal from "../UI/Modal";
import classes from "./Month.module.css";

const Month = (props) => {
  const [show, setShow] = useState(false);

  const showToogler = (event) => {
    setShow((prevShow) => !prevShow);
  };

  let prophecies = <p>No Prophecy for you</p>;

  if (props.prophesy.length > 0) {
    prophecies = (
      <ul className={classes["cart-items"]}>
        {props.prophesy.map((profs) => {
          return (
            <Prophesy
              prophet={profs.name}
              key={profs.name}
              profecy={profs.prophesy}
            />
          );
        })}
      </ul>
    );
  }

  return (
    <React.Fragment>
      <li className={classes.month} onClick={showToogler}>
        <h3>{props.name}</h3>
      </li>
      {show ? <Modal onClose={showToogler}>{prophecies}</Modal> : ""}
    </React.Fragment>
  );
};

export default Month;
