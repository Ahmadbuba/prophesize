import logo from "./logo.svg";
import "./App.css";
import Month from "./Components/Month/Month";
import Header from "./Components/Layout/Header";

function App() {
  const DUMMY_PROPHESIES = [
    {
      month: "January",
      prophesis: [
        { name: "Prophet Adeboye", prophesy: "you will see grace" },
        { name: "Prophet Job", prophesy: "you will see good health" },
      ],
    },
    {
      month: "February",
      prophesis: [
        { name: "Prophet Micheal", prophesy: "you will see fufilment" },
      ],
    },
    {
      month: "March",
      prophesis: [
        {
          name: "Propeht David",
          prophesy: "just be careful with cars while crossing please",
        },
      ],
    },
    {
      month: "April",
      prophesis: [
        {
          name: "Prophet Oyedepo",
          prophesy:
            "You will win something next month, keep working hard please",
        },
      ],
    },
    {
      month: "May",
      prophesis: [],
    },
    {
      month: "June",
      prophesis: [],
    },
    {
      month: "July",
      prophesis: [],
    },
    {
      month: "August",
      prophesis: [{ name: "Prophet Micheal", prophesy: "Farms shall bloosom" }],
    },
    {
      month: "September",
      prophesis: [],
    },
    {
      month: "October",
      prophesis: [],
    },
    {
      month: "November",
      prophesis: [
        {
          name: "Prophet Micheal",
          prophesy: "your brother shall gain promotion",
        },
      ],
    },
    {
      month: "December",
      prophesis: [
        { name: "Prophet Micheal", prophesy: "you will see fufilment" },
        {
          name: "Prophet David",
          prophesy: "just be careful with cars while crossing please",
        },
      ],
    },
  ];

  const month = DUMMY_PROPHESIES.map((item) => (
    <Month key={item.month} name={item.month} prophesy={item.prophesis} />
  ));

  return (
    <div>
      <Header />
      {month}
    </div>
  );
}

export default App;
