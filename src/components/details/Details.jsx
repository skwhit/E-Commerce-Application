import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";
import "./Details.css";
import { ThemeContext } from "../../Context/ThemeContext";
import { uppercase, uppercaseFirstLetter } from "../../utils/functions";
import { useCart } from "../../Context/Context";
import { formatPrice } from "../../utils/functions";

export default function Details() {
  const {
    state: { product },
  } = useLocation();
  const { state } = useCart();
  const { theme } = useContext(ThemeContext);
  const { dispatch } = useCart();
  const navigate = useNavigate();

  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(product.quantity);

  const checkCart = () => {
    const filter = state.filter((item) => item.id === product.id);
    return filter.length ? setIsAdded(true) : setIsAdded(false);
  };

  useEffect(() => {
    checkCart();
  }, [product]);

  useEffect(() => {
    product.quantity = quantity;
  }, [quantity]);

  const { category, description, id, image, price, rating, title } = product;

  const handleQuantityChange = (e) => {
    if (e.target.value > 0 && e.target.value < 100) {
      setQuantity(e.target.value);
    }
  };

  const handleClick = () => {
    if (!isAdded) {
      dispatch({ type: "ADD", payload: product });
      setIsAdded(true);
    } else {
      dispatch({ type: "REMOVE", payload: product });
      setIsAdded(false);
    }
  };

  return (
    <>
      <section className={`detail-container ${theme}`}>
        <div className="detail-img-container">
          <img src={image} alt="" />
        </div>

        <div className="detail-info">
          <div className="detail-header">
            <div className="detail-title">
              <h1>{title}</h1>
              <h3 className="detail-category">
                {category.length ? uppercase(category) : ""}
              </h3>
            </div>
            <h4 className="detail-rating">
              <i className="fa-solid fa-star"></i>
              {rating.rate}
            </h4>
          </div>

          <h3>{category.length ? uppercaseFirstLetter(description) : ""}</h3>
          <div className="detail-cart">
            <h3>{`$${formatPrice(price)}`}</h3>
            <div className="detail-cart-inputs">
              <div>
                <h4>Quantity: </h4>
                <input
                  type="text"
                  className="detail-quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  onClick={(e) => e.target.select()}
                />
                </div>
                {!isAdded ? (
                  <button className="detail-add" onClick={handleClick}>
                    Add to Cart
                  </button>
                ) : (
                  <button className="detail-remove" onClick={handleClick}>
                    Remove from Cart
                  </button>
                )}
              
            </div>
          </div>
          <button
            onClick={() => navigate("/products")}
            className="detail-back"
          >{`< All Products`}</button>
        </div>
      </section>
    </>
  );
}
