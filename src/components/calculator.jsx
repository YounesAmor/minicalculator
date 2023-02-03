import logo from "../assets/images/logo.svg";
import dollar from "../assets/images/icon-dollar.svg";
import person from "../assets/images/icon-person.svg";
import { useState } from "react";

const Calculator = () => {
  const validNumber = new RegExp("[0-9]*.?[0-9]+([eE][-+]?[0-9]+)?$");
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [numPeople, setNumPeople] = useState(1);

  const handleBillChange = (e) => {
    if (validNumber.test(e.target.value)) {
      setBill(parseInt(e.target.value));
    } else {
      setBill(0);
      setTotalBill(0);
    }
    if (tip > 0 && bill > 0) {
      setTotalBill(bill + (bill * tip) / 100);
    }
  };
  const setTipManually = (tip) => {
    setTip(tip);
    if (bill > 0) {
      setTotalBill(bill + (bill * tip) / 100);
    }
  };
  const handleTipCustom = (e) => {
    if (validNumber.test(e.target.value)) {
      setTip(parseInt(e.target.value));
    } else {
      setTip(0);
    }
    if (bill > 0) {
      setTotalBill(bill + (bill * tip) / 100);
    }
  };
  const resetAll = () => {
    setBill(0);
    setTip(0);
    setTotalBill(0);
    setNumPeople(1);
  };
  const handleNumPeople = (e) => {
    if (validNumber.test(e.target.value)) {
      setNumPeople(parseInt(e.target.value));
    } else {
      setNumPeople(1);
    }
  };
  return (
    <div className="grid auto-rows-min grid-cols-1">
      <div className="gap- grid w-full place-content-center py-[4.5rem]">
        <img src={logo} alt="logo" />
      </div>
      <div className="grid space-y-6 rounded-t-lg border bg-white py-10 px-5 font-spaceMono sm:grid-cols-1 lg:grid-cols-2 lg:space-x-5">
        <div>
          <div className="space-y-2 text-left">
            <label className=" text-black">Bill</label>
            <div
              className="relative text-right focus:rounded-lg focus:border-2 focus:border-darkCyan"
              tabIndex="1"
            >
              <input
                className="w-full rounded-lg border bg-veryLightGrayishCyan p-2 text-right text-2xl text-darkCyan"
                type="text"
                onChange={(e) => handleBillChange(e)}
                value={bill === 0 ? "" : bill}
              />
              <img
                src={dollar}
                alt="dollar sign"
                className="absolute bottom-3 left-5 lg:bottom-4"
              />
            </div>
          </div>
          <div className="space-y-2 text-left">
            <label className="mb-4">Select % Tip</label>
            <div className="grid gap-3 text-white sm:grid-cols-2">
              <div
                className="focus:bg- cursor-pointer rounded-lg border border-transparent bg-darkCyan p-3 text-center focus:bg-strongCyan"
                tabIndex="1"
                onClick={() => setTipManually(5)}
              >
                <p className="text-xl">5%</p>
              </div>
              <div
                className="cursor-pointer rounded-lg border border-transparent bg-darkCyan p-3 text-center focus:bg-strongCyan"
                tabIndex="1"
                onClick={() => setTipManually(10)}
              >
                <p className="text-xl">10%</p>
              </div>
              <div
                className="cursor-pointer rounded-lg border border-transparent bg-darkCyan p-3 text-center focus:bg-strongCyan"
                tabIndex="1"
                onClick={() => setTipManually(15)}
              >
                <p className="text-xl">15%</p>
              </div>
              <div
                className="cursor-pointer rounded-lg border border-transparent bg-darkCyan p-3 text-center focus:bg-strongCyan"
                tabIndex="1"
                onClick={() => setTipManually(25)}
              >
                <p className="text-xl">25%</p>
              </div>
              <div
                className="cursor-pointer rounded-lg border border-transparent bg-darkCyan p-3 text-center focus:bg-strongCyan"
                tabIndex="1"
                onClick={() => setTipManually(50)}
              >
                <p className="text-xl">50%</p>
              </div>
              <div
                className="cursor-pointer rounded-lg border border-transparent bg-veryLightGrayishCyan text-center focus:bg-strongCyan"
                tabIndex="1"
              >
                <input
                  type="text"
                  className="w-full bg-veryLightGrayishCyan p-3 text-center text-2xl text-darkCyan"
                  placeholder="Custom"
                  onChange={(e) => handleTipCustom(e)}
                />
              </div>
            </div>
          </div>
          <div className="space-y-2 text-left">
            <label className=" text-black">Number of people</label>
            <div className="relative text-right focus:rounded-lg focus:border-2 focus:border-darkCyan">
              <input
                className="w-full rounded-lg border bg-veryLightGrayishCyan p-2 text-right text-2xl text-darkCyan"
                type="text"
                onChange={(e) => handleNumPeople(e)}
                value={numPeople === 0 ? 1 : numPeople}
              />
              <img
                src={person}
                alt="person sign"
                className="absolute bottom-4 left-5"
              />
            </div>
          </div>
        </div>
        <div className=" space-y-10 rounded-lg border border-transparent bg-darkCyan py-10 px-6">
          <div className="flex justify-between">
            <div className="flex flex-col justify-center text-left text-veryLightGrayishCyan">
              <p className="">Tip Amount</p>
              <p className="opacity-60">/ person</p>
            </div>
            <p className="text-right text-4xl text-strongCyan">
              ${((bill * tip) / 100 / numPeople).toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col justify-center text-left text-veryLightGrayishCyan">
              <p className="">Total</p>
              <p className="opacity-60">/ person</p>
            </div>
            <p className="text-right text-4xl text-strongCyan">
              $
              {bill === 0 ? (0).toFixed(2) : (totalBill / numPeople).toFixed(2)}
            </p>
          </div>
          <button
            className="w-full rounded-lg border border-transparent bg-strongCyan p-2 text-xl text-darkCyan"
            onClick={resetAll}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
