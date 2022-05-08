import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { toggle } from "../../../store/favSlice";
import { apiProductGetList } from "../../../api/product/product.api";

function Products() {
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);
  const favs = useSelector((state) => state.fav.value);

  useEffect(() => {
    apiProductGetList().then((result) => {
      setProductList(result.data);
    });
  }, []);

  function handleFav(e, id) {
    e.preventDefault();
    dispatch(toggle(id));
  }

  return (
    <>
      <div className="container">
        <h2 className="products-title">Product Latest</h2>
        <ul className="row">
          {productList.map((product) => (
            <li className="col-3" key={product.id}>
              <div className="product-item">
                <Link to={`/products/${product.id}`}>
                  <img src={product.image} alt={product.title} />
                </Link>
                <span
                  className={`product-fav ${
                    favs.includes(product.id) ? "active" : ""
                  }`}
                  onClick={(event) => handleFav(event, product.id)}
                >
                  <FaHeart />
                </span>
                <h5>{product.title.substring(0, 12)}</h5>
                <h6>${product.price}</h6>
                <Link to={`/products/${product.id}`}>
                  <button>Read more</button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Products;
