import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={classes.main}>
      <h2>Welcome to Prophesize</h2>
      <button>Proceed</button>
    </div>
  );
};

export default Welcome;
