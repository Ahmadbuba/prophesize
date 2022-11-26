import { Link } from "react-router-dom";
import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={classes.main}>
      <h2>
        Welcome <span className={classes.text}>To </span>
        <span className={classes.main_text}>Prophesize</span>
      </h2>
      <Link to="/main" className={classes.btn}>
        Proceed
      </Link>
    </div>
  );
};

export default Welcome;
