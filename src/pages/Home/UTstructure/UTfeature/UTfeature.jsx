import React from "react";
import "./UTfeature.css"
import { MdDiversity2, MdManageAccounts, MdOutlineSavings } from "react-icons/md";
import { PiCoinVerticalBold } from "react-icons/pi";

const features = [
    {
        id: 1,
        symbol: <MdDiversity2 size={50}/>,
        title: "Diversification",
        context: "Investors can access a diversified portfolio of assets through a single investment.",
    },
    {
        id: 2,
        symbol: <MdManageAccounts size={70}/>,
        title: "Professional Management",
        context: "Unit trusts are managed by professional fund managers who make investment decisions on behalf of investors.",
    },
    {
        id: 3,
        symbol: <PiCoinVerticalBold size={70}/>,
        title: "Liquidity",
        context: "Investors can easily buy and sell units in a unit trust, providing liquidity compared to direct investments in invidual securities",
    },
    {
        id: 4,
        symbol: <MdOutlineSavings size={70}/>,
        title: "Affordability",
        context: "Unit trust allow investors to participate in a diversified portfolio with relatively small amounts of capital.",
    }
]

export default function UTfeature(){
    return(
        <div className="UT-feature-arrangement">
            {
                features.map(data => (
                    <div className="UT-symbol" key={data.id}>
                        {data.symbol}
                        <div className="UT-feature">
                           <h1>{data.title}</h1>
                           <p>{data.context}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}