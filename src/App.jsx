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
  const [totalpremium, setTotalPremium] = useState(298.64);
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

  const withoutIPT = Math.round((totalpremium / 1.12) * 100) / 100;
  const commissionPaid = Math.round((withoutIPT / 100 * commissionPercentage) * 100) / 100;

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
              id="totalpremium"
              type="text"
              placeholder="Enter e.g £298.64"
              onChange={(totalpremium) => {
                console.log(totalpremium.target.value);
                setTotalPremium(
                  totalpremium.target.value !== ""
                    ? totalpremium.target.value
                    : 298.64
                );
              }}
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
              id="commissionpercentage"
              type="number"
              min="0"
              max="100"
              placeholder="Enter amount e.g. %40"
              onChange={(commissionpercentage) => {
                console.log(commissionpercentage.target.value);
                setCommissionPercentage(
                  commissionpercentage.target.value !== ""
                    ? commissionpercentage.target.value
                    : 40
                );
              }}
            />
          </div>
        </form>

        <div className="flex justify-center gap-8 flex-col md:flex-row mt-12">
          <div className="text-center">
            <h2 className="livvic-bold text-gray-700">
              Commissionable premium (without IPT):
            </h2>

            <p className="livvic-bold text-earnings text-lv-slate-blue">
              £{withoutIPT}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-8 flex-col md:flex-row mt-4">
          <div className="text-center">
            <h2 className="livvic-bold text-gray-700">Commission Paid:</h2>

            <p className="livvic-bold text-earnings text-lv-slate-blue">
              £{commissionPaid}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-8 flex-row mt-4">
          <p className="text-center text-gray-700 mulish-regular max-w-md text-small">
            The price that’s quoted to the customer is including IPT, but the
            commission is calculated before the IPT is added. The figure is
            calculated by Base Premium x 12% (to take away the IPT take amount
            divide it by 1.12) then take the amount of commission minus the IPT
            divide that by 100 and times that by the commission percentage.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
