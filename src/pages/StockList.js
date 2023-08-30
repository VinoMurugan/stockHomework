import React from "react";
import { Link } from "react-router-dom";
import stocks from "./stocks";

function StockList() {
  return (
    <div>
      <h2>All Stocks</h2>
      <ul>
        {stocks.map(stock => (
          <li key={stock.symbol}>
            <Link to={`/stocks/${stock.symbol}`}>{stock.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StockList;
