import "./StockList.css";
import { useContext } from "react";
import StockContext from "../contexts/StockContext";

function StockList(){

    const contextValue = useContext(StockContext);

    return(
        <div id="stock_details_wrapper"> 
            {contextValue.stockData.length != 0 ?
            contextValue.stockData.map((stock, index)=>(
                <div id="stock_details">
                    <p>Symbol: {stock.symbol}</p>
                    <p>Quantity: {parseFloat(stock.quantity)}</p>
                    <p>Purchase Price: {parseFloat(stock.price).toFixed(2)}</p>
                    <p>Current Price: {parseFloat(stock.currPrice).toFixed(2)}</p>
                    <p className={((stock.quantity*stock.currPrice) - (stock.quantity*stock.price))>=0?"positive":"negative"}>Profit/Loss: {((stock.quantity*stock.currPrice) - (stock.quantity*stock.price)).toFixed(2)}</p>   
                </div>
            )):
            <p id="stockdata_placeholder">No stocks added</p>}
        </div>
    )
}

export default StockList