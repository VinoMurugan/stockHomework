import React from "react";
import { useParams } from "react-router-dom";
import stocks from "./stocks";

function StockDetail() {
  const { symbol } = useParams();
  const stock = stocks.find(s => s.symbol === symbol);

  if (!stock) {
    return <div>Stock not found</div>;
  }

  return (
    <div>
      <h2>Stock Detail</h2>
      <h3>Name: {stock.name}</h3>
      <h3>Symbol: {stock.symbol}</h3>
      <h3>Last Price: {stock.lastPrice}</h3>
    </div>
  );
}

export default StockDetail;
