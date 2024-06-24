import "./StockForm.css";
import { useState, useContext } from "react";
import StockContext from "../contexts/StockContext";

function StockForm(){
    const contextValue = useContext(StockContext);
    const[symbol, setSymbol] = useState("")
    const[quantity, setQuantity] = useState("")
    const[price, setPrice] = useState("")

    const handleAddStock = () => {
        const newStock = {
            symbol: symbol,
            quantity: quantity,
            price: price
        };
        contextValue.setStockData([...contextValue.stockData, newStock]);
        setSymbol("");
        setPrice("");
        setQuantity("");
    };
    return(
        <>
            <img src= "https://t3.ftcdn.net/jpg/01/26/22/24/360_F_126222457_lQglMmNhNPFRmcWrsIGYV4wfdm4gawYC.jpg"></img>
            <div id="title_wrapper"><p id="title">Finance dashboard</p></div>
            <div id="form">
                <input className="input_box" placeholder="Stock Symbol" value={symbol} onChange={(event)=>{setSymbol(event.target.value)}}></input>
                <input className="input_box" placeholder="Quantity" type="number" step={1} value={quantity} onChange={(event)=>{setQuantity(event.target.value)}}></input>
                <input className="input_box" placeholder="Purchase Price" value={price} onChange={(event)=>{setPrice(event.target.value)}}></input>
                <button id="add_button" onClick={handleAddStock}>Add Stock</button>
            </div>
            <div id="subtitle_wrapper"><p id="subtitle">Stock List</p></div>
        </>
        )
}

export default StockForm;