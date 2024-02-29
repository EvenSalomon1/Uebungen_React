import Products from "../../components/Products/Products";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <Products
        img="../../../public/bild1.jpeg"
        product="cocooil"
        price="30$"
      />
      <Products
        img="../../../public/bild2.avif"
        product="cocooil"
        price="30$"
      />
      <Products
        img="../../../public/bild3.webp"
        product="cocooil"
        price="30$"
      />
    </section>
  );
};

export default Home;
