import classes from "./Prophesy.module.css";

const Prophesy = (props) => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.prophet}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.profecy}</span>
        </div>
      </div>
    </li>
  );
};

export default Prophesy;
