import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getProduct = () => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((item) => setProduct(item));
    };
    getProduct();
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="product row">
          <div className="product-img col-6">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-info col-6">
            <h3>{product.title}</h3>
            <h4>${product.price}</h4>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
