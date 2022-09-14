import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Product Page</h1>
      <ul>
        <li>
          <Link to="/products/book1">A Book</Link>
        </li>
        <li>
          <Link to="/products/carpet1">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/shelf1">A Shelf</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
