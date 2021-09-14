import React, { useState, useContext } from "react";
import "./store.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import ItemCard from "../ItemCard/ItemCard";
import { Select } from "antd";
import storeData from "../../assets/data/items.json";
import { Popover } from "antd";
import { CartContext } from "../../context/CartContext";

const Store = () => {
  const { Option } = Select;
  const [currency, setCurrency] = useState("gbp");

  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useContext(CartContext);

  console.log(cart);

  const content = (
    <div>
      {cart?.map((cartItem, i) => (
        <div className="cart-item" key={i}>
          <p>{cartItem.name}</p>
          <p>{cartItem.price}</p>
        </div>
      ))}
    </div>
  );

  function onChange(value) {
    setCurrency(value);
  }

  return (
    <div className="store-layout">
      <h2 className="store-title">Browse our current selection</h2>
      <div className="shopping-cart">
        <Select
          showSearch
          style={{ width: 200 }}
          value={currency}
          onChange={onChange}
          placeholder="Select your location"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="usd">USD</Option>
          <Option value="gbp">GBP</Option>
          <Option value="eur">EUR</Option>
        </Select>
        <Popover
          content={content}
          title="Cart"
          trigger="click"
          placement="topLeft"
        >
          <ShoppingCartOutlined className="cart-icon" />
        </Popover>
      </div>
      <div className="item-grid">
        {storeData.items.map((item, i) => (
          <ItemCard
            key={i}
            name={item.name}
            src={item.image}
            price={item.price}
            selectedCurrency={currency}
          />
        ))}
      </div>
    </div>
  );
};

export default Store;
