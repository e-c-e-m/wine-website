import React, { useState, useEffect, useContext } from "react";
import "./itemcard.css";
import { Button } from "antd";
import { CartContext } from "../../context/CartContext";

const ItemCard = ({ name, src, price, selectedCurrency }) => {
  const [currencySign, setCurrencySign] = useState("");
  const [convertedPrice, setConvertedPrice] = useState(price);
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useContext(CartContext);

  useEffect(() => {
    switch (selectedCurrency) {
      case "gbp":
        setCurrencySign("£");
        setConvertedPrice(price);
        break;
      case "usd":
        setCurrencySign("$");
        let dollarPrice = price * 1.44;
        let roundedDollarPrice = dollarPrice.toFixed(2);
        setConvertedPrice(roundedDollarPrice);
        break;
      case "eur":
        setCurrencySign("€");
        let euroPrice = price * 1.27;
        let roundedEuroPrice = euroPrice.toFixed(2);
        setConvertedPrice(roundedEuroPrice);
        break;
      default:
        setCurrencySign("£");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCurrency]);

  const updateCart = () => {
    setCart((prevItems) => [
      ...prevItems,
      {
        name: name,
        price: convertedPrice,
      },
    ]);
  };

  return (
    <div className="item-card">
      <img className="item-img" src={src} alt="wine" />
      <h3 className="item-name">{name}</h3>
      <h3 className="item-price">{`${currencySign} ${convertedPrice}`}</h3>
      <div className="item-btn-layout">
        <Button>More Details</Button>
        <Button className="hide" onClick={updateCart}>
          Quick Add
        </Button>
      </div>
    </div>
  );
};

export default ItemCard;
