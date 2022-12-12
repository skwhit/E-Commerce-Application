import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getProductById } from "../../utils/products";
import Loading from "../loading/Loading";
import "./Details.css";
import { ThemeContext } from "../../Context/ThemeContext";
import { uppercase, uppercaseFirstLetter } from "../../utils/functions";
import { useCart } from "../../Context/Context";

export default function Details() {
  const {
    state: { productId = "" },
  } = useLocation();

  const { theme } = useContext(ThemeContext);
  const { dispatch } = useCart();

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

  useEffect(() => {
    setLoading(true);
    getProductById(productId, setProduct, setLoading);
  }, []);

  const { category, description, id, image, price, rating, title } = product;

  // const addCartItem = () => {
  //   setCart([...cart, product])
  // }

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
              <h3>{`$${price}`}</h3>
              <button
                onClick={() => dispatch({ type: "ADD", payload: product })}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
