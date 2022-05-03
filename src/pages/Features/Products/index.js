import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../../components/modules/Banner";

function Products() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProductList(data));
    };
    fetchData();
  }, []);
  return (
    <>
      <Banner />
      <div className="container">
        <h2 className="products-title">Product Latest</h2>
        <ul className="row">
          {productList.map((product) => (
            <li className="col-3" key={product.id}>
              <div className="product-item">
                <Link to={`/products/${product.id}`}>
                  <img src={product.image} alt={product.title} />
                </Link>
                <h5>{product.title.substring(0, 12)}</h5>
                <h6>${product.price}</h6>
                <button>Read more</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Products;
