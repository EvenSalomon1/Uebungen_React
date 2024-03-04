import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <img src="../../../public/keyboard.jpeg" alt="keyboard" />
      <h2>Welcome to my simple Blog</h2>
      <button>
        <Link to="/blog">Go to articles</Link>
      </button>
    </section>
  );
};

export default Home;
