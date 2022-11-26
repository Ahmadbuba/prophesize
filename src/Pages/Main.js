import React from "react";
import Month from "../Components/Month/Month";
import Header from "../Components/Layout/Header";
import classes from "./Main.module.css";
const Main = () => {
  const DUMMY_PROPHESIES = [
    {
      month: "January",
      prophecies: [
        { name: "Prophet Adeboye", prophecy: "you will see grace" },
        { name: "Prophet Job", prophecy: "you will see good health" },
      ],
    },
    {
      month: "February",
      prophecies: [
        { name: "Prophet Micheal", prophecy: "you will see fufilment" },
      ],
    },
    {
      month: "March",
      prophecies: [],
    },
    {
      month: "April",
      prophecies: [
        {
          name: "Prophet Oyedepo",
          prophecy:
            "You will win something next month, keep working hard please",
        },
      ],
    },
    {
      month: "May",
      prophecies: [],
    },
    {
      month: "June",
      prophecies: [
        {
          name: "Propeht David",
          prophecy: "just be careful with cars while crossing please",
        },
      ],
    },
    {
      month: "July",
      prophecies: [],
    },
    {
      month: "August",
      prophecies: [
        { name: "Prophet Micheal", prophesy: "Farms shall bloosom" },
      ],
    },
    {
      month: "September",
      prophecies: [],
    },
    {
      month: "October",
      prophecies: [],
    },
    {
      month: "November",
      prophecies: [
        {
          name: "Prophet Micheal",
          prophecy: "your brother shall gain promotion",
        },
      ],
    },
    {
      month: "December",
      prophecies: [
        { name: "Prophet Micheal", prophecy: "you will see fufilment" },
        {
          name: "Prophet David",
          prophecy: "just be careful with cars while crossing please",
        },
      ],
    },
  ];

  const month = DUMMY_PROPHESIES.map((item) => (
    <Month key={item.month} month={item.month} prophecies={item.prophecies} />
  ));

  return (
    <div className={classes.pt}>
      <Header />
      {month}
    </div>
  );
};

export default Main;
