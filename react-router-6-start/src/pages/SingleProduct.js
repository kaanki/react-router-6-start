import { Link, useParams } from "react-router-dom";
import products from '../data'

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId)
  return (
    <section className="section product">
      <h2>{product.id}</h2>
      <img src={product.image} alt="img"  />
      <h2>{product.name}</h2>
      <Link to="/Products">Back to products</Link>
    </section>
  );
};

export default SingleProduct;
