import React, { useState } from "react";
import "./FVcalc.css";
import { MdCancel } from "react-icons/md";

export default function FVcalculation() {
    const [sales, setSales] = useState("");
    const [salesMC, setSalesMC] = useState("");
    const [initial, setInitial] = useState("");
    const [afterInitial, setAfterInitial] = useState("");
    const [monthly, setMonthly] = useState("");
    const [afterMonthly, setAfterMonthly] = useState("");
    const [interest, setInterest] = useState("");
    const [years, setYears] = useState("");
    const [data, setData] = useState([]);
    const [total, setTotal] = useState("");
    const [earn, setEarn] = useState("");
    const [showAnalysis, setShowAnalysis] = useState(false);
    const [dataFull, setDataFull] = useState(false);

    const clearForm = () => {
        setSales("");
        setSalesMC("");
        setInitial("");
        setMonthly("");
        setInterest("");
        setYears("");
        setTotal("");
        setAfterInitial("");
        setAfterMonthly("");
        setEarn("");
        setShowAnalysis(false);
        setDataFull(false);
    };

    const removeAllData = () => {
        setData([]);
        setDataFull(false);
    };

    const handleInputChange = (value, setter) => {
        const regex = /^\d+(\.\d{0,2})?$/;
        if (value === "" || regex.test(value)){
            setter(value);
        }
    }

    const calcFV = (event) => {
        event.preventDefault();

        if(!initial || !years || !interest){
            alert("Please enter values for Initial investment, Years, Return rate")
            return;
        }

        const deciSales = sales/100;
        const afterInitial = initial/(1+deciSales);
        setAfterInitial(afterInitial.toFixed(2));

        let afterSalesMC = 0;
        if (salesMC === ""){
            const deciSalesMC = deciSales;
            const monthlyContribution = monthly === "" ? 0 : parseFloat(monthly);
            afterSalesMC = monthlyContribution/(1+deciSalesMC);
            setAfterMonthly(afterSalesMC.toFixed(2));
        }
        else{
            const deciSalesMC = salesMC/100;
            const monthlyContribution = monthly === "" ? 0 : parseFloat(monthly);
            afterSalesMC = monthlyContribution/(1+deciSalesMC);
            setAfterMonthly(afterSalesMC.toFixed(2));
        }

        const deciInterest = interest/100;
        const monthInterest = Math.pow(1+(deciInterest/12), 12*years);

        const totalValue = (afterInitial * Math.pow(1 + deciInterest/12, 12*years)) +
                            (afterSalesMC * ((monthInterest-1)/ (deciInterest/12)));

        const totalEarn = totalValue - (parseFloat(initial)+(monthly*(12*years)));

        setEarn(totalEarn.toFixed(2));
        setShowAnalysis(true);
        setDataFull(data.length >= 3);
        
         const newEntry = {
            id: Math.random(),
            total: totalValue.toFixed(2),
            earn: totalEarn.toFixed(2),
            salesCharge: sales,
            salesMCCharge: salesMC || sales,
            initialInvestment: initial,
            monthlyContribution: monthly,
            lengthOfTime: years,
            annualReturnRate: interest,
        };
                    
            if (data.length >= 3) {
                alert("You can only store up to three calculations. Please remove one before calculating again.");
            } else {
                setData([...data, newEntry]);
                setTotal(totalValue.toFixed(2));
            }
    };
                    
            const handleRemove = (id) => {
            const newData = data.filter((entry) => entry.id !== id);
            setData(newData);
            setDataFull(false);
            };

    return (
        <div className="calc-size">
            <form onSubmit={calcFV}>
                    <div>
                        <div className="step1">
                            <h1>Step 1: Initial Investment</h1>
                        </div>
                        <div className="arrangement">
                            <label>Initial Investment</label>
                            <input value={initial} onChange={(e) => handleInputChange(e.target.value, setInitial)} />
                        </div>
                    </div>
                    <div className="step2">
                        <h1>Step 2: Sales Charges</h1>
                        <div className="arrangement">
                            <label>Sales charges</label>
                            <input value={sales} onChange={(e) => handleInputChange(e.target.value, setSales)} type="text" placeholder="%" />
                        </div>
                        <div className="arrangement">
                            <label>Monthly contribute sales charges</label>
                            <input value={salesMC} onChange={(e) => handleInputChange(e.target.value, setSalesMC)} type="text" placeholder="%" />
                        </div>
                    </div>
                    <div className="step3">
                        <h1>Step 3: Contribution</h1>
                        <div className="arrangement">
                            <label>Monthly Contributions</label>
                            <input value={monthly} onChange={(e) => handleInputChange(e.target.value, setMonthly)} type="text" placeholder="Optional" />
                        </div>
                        <div className="arrangement">
                            <label>Length of Time in Years</label>
                            <input value={years} onChange={(e) => handleInputChange(e.target.value, setYears)} />
                        </div>
                    </div>
                    <div className="step4">
                        <h1>Step 4: Return per annual</h1>
                        <div className="arrangement">
                            <label>Annual Return Rate</label>
                            <input value={interest} onChange={(e) => handleInputChange(e.target.value, setInterest)} type="text" placeholder="%" />
                        </div>
                    </div>
                <div className="calc-button">
                    <button type="submit">Calculate</button>
                    <button type="button" onClick={clearForm}>Clear</button>
                </div>
            </form>
            {showAnalysis && !dataFull && (
                <div className="analyze-fund">
                    <h1>Quick-Analyze Report</h1>
                    <p>After committing <span>${initial}</span> as the initial investment, with a one-time charge of <span>{sales}%</span> and a monthly contribution
                        of <span>${monthly || 0}</span>, subject to a <span>{monthly === "" || parseFloat(monthly) === 0 ? 0 : salesMC || sales}%</span> monthly contribution fee, the adjusted initial investment would be
                        deducted to<span> ${afterInitial}</span>, with subsequent monthly contribution reduced to <span>${afterMonthly}</span>.</p>
                    <p>Over a <span style={{fontWeight:'bold'}}>{years}-years</span> investment period, this <span>Fund/Product</span> is projected to grow to an estimated total value of <span>${total}</span>.
                        Put another way, you can say that you had earned <span>${earn}</span> over the period of {years}-years.</p>
                </div>
                )}
            <div className="compare-title">
                <h1>Comparison Products/Funds</h1>
                <p>You can <span>Compare</span> each calculation you have <span>input</span> in this section.</p>
                <p><span style={{color:"red"}}>Maximum of 3</span> different <span>Products/Funds</span> can be saved and compared here!</p>
                <div className="comp-clear-btn">
                    <p>You can <span style={{color:"red"}}>Clear</span> everything by click the button: </p>
                    <button type="button" onClick={removeAllData}>Remove All</button>
                </div>
            </div>
            <div className="comparison-arrange" >
                {data.map((entry) => (
                    <div className="comparison-item" key={entry.id}>
                        <div className="comp-remove">
                            <p style={{margin:"0"}}>Estimated Value: <span>${entry.total}</span></p>
                            <div className="cancel-icon" onClick={()=> handleRemove(entry.id)}>
                                <MdCancel />
                            </div>
                        </div>
                        <div className="entry-data">
                            <p>Total Contribution: <span>${(parseFloat(entry.initialInvestment)+(entry.monthlyContribution*(12*entry.lengthOfTime)))}</span></p>
                            <p>Total years: <span>{entry.lengthOfTime} years</span></p>
                            <p>Annual Return Rate: <span>{entry.annualReturnRate}%</span></p>
                            <p>Estimated Profit: <span>${entry.earn}</span></p>
                        </div>
                    </div>
                ))}
            </div>
            {data.length > 0 && (
                <div>
                {((highestEarning) => (
                    <div className="summary-comparison">
                        <h1>Best Performance Products/Funds</h1>
                        <div>
                            <p>Amongs the <span>Funds/Products</span> you had inputed, there's one that stands out with an <span>Impressive Performance</span> of <span>${highestEarning.earn}</span> over 
                            the past <span style={{fontWeight:'bold'}}>{highestEarning.lengthOfTime}-years</span> boasting a solid return of <span>{highestEarning.annualReturnRate}%</span>. Translates to a 
                            total value of <span>${highestEarning.total}</span>, making it a compelling choice for investment consideration.  
                            <span style={{color:"yellow"}}> However</span>, before diving in, it's crucial to delve deeper into the specifics. I'll conduct research thoroughly on the fund's content, 
                            including its investment allocation across various industries. Understanding the <span style={{color:"#D32F2F"}}>Risk Level</span> is paramount, 
                            alongside aligning it with your personal <span style={{color:"#D32F2F"}}>Risk Tolerance</span>. If you're interested in expert guidance on Unit Trust products, 
                            I offer complimentary consultations. I'll work with you to craft the <span>BEST Investment Plan</span> tailored to your needs and <span>Objectives</span>. 
                            Feel free to reach out, and let's chart a successful investment journey together!</p>
                        </div>
                    </div>
                ))(
                    data.reduce((maxEntry, entry) => parseFloat(entry.earn) > parseFloat(maxEntry.earn) ? entry : maxEntry, data[0])
                )}
            </div>
            )}
        </div>
    );
}
