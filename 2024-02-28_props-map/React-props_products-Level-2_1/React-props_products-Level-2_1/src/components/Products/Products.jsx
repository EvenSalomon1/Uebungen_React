import "./Products.css";

const Products = (props) => {
  return (
    <section className="grid">
      <div>
        <img src={props.img} alt="image" />
        <p>{props.product}</p>
        <p>{props.price}</p>
        <button>BUY NOW</button>
      </div>
    </section>
  );
};

export default Products;
