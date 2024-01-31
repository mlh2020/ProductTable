import { useState } from "react";
import './App.css'
import FilterableProductTable from './components/FilterableProductTable'
import PRODUCTS from './data'



export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
};
