import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getProductById } from "../../utils/products";
import Loading from "../loading/Loading";

export default function Details() {
  const {
    state: { productId = "" },
  } = useLocation();
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

  const { category, description, id, image, price, rating, title } = product;

  useEffect(() => {
    setLoading(true);
    getProductById(productId, setProduct, setLoading);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div>{category}</div>
          <img src={image} alt="" />
        </>
      )}
    </>
  );
}
