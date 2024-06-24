import "./StockList.css";
import { useState, useEffect, useCallback, useContext } from "react";
import StockContext from "../contexts/StockContext";

function StockList(){

    const contextValue = useContext(StockContext);
    const[currPrice, setCurrPrice] = useState("");

    useEffect(useCallback(()=>{
        fetch(
            "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo"
            // "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+
            // contextValue.stockData.symbol+
            // "&apikey=RCR84F0BW6YSO54K"
        )
            .then((response)=>response.json())
            .then(
                (data)=>{
                    console.log(data);
                    // setCurrPrice(data["Global Quote"]["05. price"]);
                    if (data && data['Global Quote'] && data['Global Quote']['05. price']) {
                        setCurrPrice(data['Global Quote']['05. price']);
                    } else {
                        console.error("Global Quote or 05. price is undefined in API response");
                    }
                }
            ),
    [];
    }))

    return(
        <div id="stock_details_wrapper"> 
            {contextValue.stockData.length != 0 ?
            contextValue.stockData.map((stock, index)=>(
                <div id="stock_details">
                    <p>Symbol: {stock.symbol}</p>
                    <p>Quantity: {parseFloat(stock.quantity)}</p>
                    <p>Purchase Price: {parseFloat(stock.price).toFixed(2)}</p>
                    <p>Current Price: {parseFloat(currPrice).toFixed(2)}</p>
                    <p className={((stock.quantity*currPrice) - (stock.quantity*stock.price))>=0?"positive":"negative"}>Profit/Loss: {((stock.quantity*currPrice) - (stock.quantity*stock.price)).toFixed(2)}</p>   
                </div>
            )):
            <p id="stockdata_placeholder">No stocks added</p>}
        </div>
    )
}

export default StockList