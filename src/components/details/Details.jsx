import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getProductById } from "../../utils/products";
import Loading from "../loading/Loading";
import "./Details.css";
import { ThemeContext } from "../../Context/ThemeContext";
import { uppercase, uppercaseFirstLetter } from "../../utils/functions";
import { useCart } from "../../Context/Context";
import { formatPrice } from "../../utils/functions";

export default function Details() {
  const {
    state: { productId = "" },
  } = useLocation();
  const { state } = useCart();
  const { theme } = useContext(ThemeContext);
  const { dispatch } = useCart();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    category: "",
    description: "",
    id: "",
    image: "",
    price: "",
    rating: "",
    title: "",
  });
  const [isAdded, setIsAdded] = useState(false);

  const checkCart = () => {
    const filter = state.filter((item) => item.id === product.id);
    return filter.length ? setIsAdded(true) : setIsAdded(false);
  };

  useEffect(() => {
    setLoading(true);
    getProductById(productId, setProduct, setLoading);
  }, []);

  useEffect(() => {
    checkCart();
  }, [product]);

  const { category, description, id, image, price, rating, title } = product;

  const handleClick = () => {
    if (!isAdded) {
      dispatch({ type: "ADD", payload: product });
      setIsAdded(true);
    } else {
      dispatch({ type: "REMOVE", payload: product });
      setIsAdded(false);
    }
  };

  product.quantity = 1;
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
            <button
              onClick={() => navigate('/products')}
              className="detail-back"
            >{`< All Products`}</button>
          </div>
        </section>
      )}
    </>
  );
}
