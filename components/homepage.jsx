import './Homepage.css';
import laptopImage from '../assets/image1.jpg';

function Homepage() {
  return (
    <div className="homepage">
      <nav className="navbar">
        <h2 className="logo">SwapCell</h2>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Buy</a></li>
          <li><a href="#">Sell</a></li>
          <li><a href="#">Browse</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to SwapCell</h1>
          <p>Buy and sell second-hand laptops at the best prices with ease and safety.</p>
          <button className="cta-btn">Browse Laptops</button>
        </div>
        <div className="hero-image">
          <img src={laptopImage} alt="Laptop showcase" />
        </div>
      </section>

      <section className="featured">
        <h2>Featured Laptops</h2>
        <div className="laptops">
          <div className="laptop-card">
            <img src="/laptop1.jpg" alt="MacBook Pro" />
            <h3>MacBook Pro</h3>
            <p>Rs. 120,000</p>
          </div>
          <div className="laptop-card">
            <img src="/laptop2.jpg" alt="Dell XPS" />
            <h3>Dell XPS</h3>
            <p>Rs. 90,000</p>
          </div>
          <div className="laptop-card">
            <img src="/laptop3.jpg" alt="HP Pavilion" />
            <h3>HP Pavilion</h3>
            <p>Rs. 70,000</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
