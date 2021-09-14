import React from "react";
import Header from "../../components/Header/Header";
import Promo from "../../components/Promo/Promo";
import Store from "../../components/Store/Store";
import Footer from "../../components/Footer/Footer";
import "./home.css";
import { CartProvider } from "../../context/CartContext";

const Home = () => {
  return (
    <>
      <CartProvider>
        <Header />
        <Promo />
        <Store />
        <Footer />
      </CartProvider>
    </>
  );
};

export default Home;
