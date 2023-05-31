import React from "react";
import ProductList from "../components/ProductList";
import BrandMenu from "../components/BrandMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      <BrandMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
