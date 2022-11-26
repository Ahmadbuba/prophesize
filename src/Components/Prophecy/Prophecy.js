import classes from "./Prophecy.module.css";

const Prophesy = (props) => {
  return (
    <li className={classes["item"]}>
      <h2>{props.prophet}</h2>
      <div className={classes.summary}>
        <span className={classes.text}>{props.prophecy}</span>
      </div>
    </li>
  );
};

export default Prophesy;
