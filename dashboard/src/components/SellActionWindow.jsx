import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css"; 

export default function SellActionWindow({ uid }) {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);

    const { closeBuyWindow } = useContext(GeneralContext); // Reusing same close logic

    const handleSellClick = () => {
        axios
            .post("http://localhost:3002/newOrder", {
                name: uid,
                qty: stockQuantity,
                price: stockPrice,
                mode: "SELL", // ✅ Mode set to SELL
            })
            .then(() => closeBuyWindow())
            .catch((err) => {
                console.error("❌ Failed to place sell order:", err);
                alert("Failed to place sell order.");
            });
    };

    const handleCancelClick = () => {
        closeBuyWindow();
    };

    return (
        <div className="container" id="sell-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            min="1"
                            onChange={(e) => setStockQuantity(Number(e.target.value))}
                            value={stockQuantity}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.05"
                            min="0"
                            onChange={(e) => setStockPrice(Number(e.target.value))}
                            value={stockPrice}
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Estimated return ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
                <div>
                    <Link className="btn btn-red" onClick={handleSellClick}>
                        Sell
                    </Link>
                    <Link to="#" className="btn btn-grey" onClick={handleCancelClick}>
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
}
