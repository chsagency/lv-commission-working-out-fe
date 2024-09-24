import "./App.css";
import { useState } from "react";
// import Popup from "reactjs-popup";
//import useSWR from "swr";
// import Chart from "./Chart.jsx";

//const url = "https://lv-commission-calculator.test/wp-json/wp/v2/tool-option/14";
// const url = "https://cc-cms.lv.chs.agency/wp-json/wp/v2/tool-option/14";
// const fetcher = (...args) => fetch(...args).then((res) => res.json());
// const labels = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"];

function App() {
  const [totalpremium, setTotalPremium] = useState(100);
  const [commissionPercentage, setCommissionPercentage] = useState(40);
  // const [yearlyMortgages, setYearlyMortgages] = useState(100);
  // const [conversionRate, setConversionRate] = useState(75);
  // const { data: result, error } = useSWR(url, fetcher);

  // if (error) return <h1>Something went wrong!</h1>;
  // if (!result) return <h1>Loading...</h1>;

  //Calculations
  // const monthlyMortgages = yearlyMortgages / 12;
  // const giCase = monthlyMortgages * (conversionRate / 100);
  // const nbPremium = result.acf.nb_premium;
  // const retentionRate = result.acf.retention_rate;
  // const howThisIsCalculatedDesc = result.acf.how_is_this_calculated_description;

  const withoutIPT = totalpremium / 1.12;
  const commissionAmount = withoutIPT / 100 * commissionPercentage;

  return (
    <div className="App">
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-center mb-12 text-header text-lv-green livvic-light">
          Commision Estimates Calculator
        </h2>

        <form className="flex justify-center gap-8 flex-col md:flex-row">
          <div className="min-w-inputBox">
            <label
              className="block text-gray-700 text-sm mb-2 livvic-bold"
              htmlFor="totalpremium"
            >
              Total Premium (with IPT)
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-neutral-400 leading-tight focus:outline-none focus:shadow-outline mulish-regular"
              id="commission"
              type="text"
              placeholder="Enter £"
            />
          </div>
          <div className="min-w-inputBox">
            <label
              className="block text-gray-700 text-sm mb-2 livvic-bold"
              htmlFor="yearlymortgages"
            >
              Commision Percentage
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-neutral-400 leading-tight focus:outline-none focus:shadow-outline mulish-regular"
              id="yearlymortgages"
              type="number"
              min="0"
              max="100"
              placeholder="Enter amount %"
            />
          </div>
        </form>

        <div className="flex justify-center gap-8 flex-col md:flex-row mt-4">
          <h2 className="livvic-bold text-gray-700">
            Commissionable premium (without IPT): £{withoutIPT}
          </h2>

          <h2 className="livvic-bold text-gray-700">
            Commission paid (without IPT):
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
