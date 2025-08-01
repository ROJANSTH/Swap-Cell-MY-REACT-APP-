import './Homepage.css';
// Import images from assets
import macbookImg from '../assets/laptop1.jpg';
import dellImg from '../assets/laptop2.jpg';
import hpImg from '../assets/laptop3.jpg';
import defaultImg from '../assets/default-laptop.jpg';

function Homepage() {
  const laptops = [
    {
      id: 1,
      name: "MacBook Pro",
      price: "Rs. 120,000",
      specs: ["M1 Chip", "16GB RAM", "512GB SSD"],
      image: macbookImg
    },
    {
      id: 2,
      name: "Dell XPS",
      price: "Rs. 90,000",
      specs: ["i7 Processor", "8GB RAM", "256GB SSD"],
      image: dellImg
    },
    {
      id: 3,
      name: "HP Pavilion",
      price: "Rs. 70,000",
      specs: ["i5 Processor", "8GB RAM", "1TB HDD"],
      image: hpImg
    }
  ];

  return (
    <div className="homepage">
      <section className="featured-laptops">
        <h2>Featured Laptops</h2>
        <div className="laptop-grid">
          {laptops.map(laptop => (
            <div key={laptop.id} className="laptop-card">
              <img 
                src={laptop.image} 
                alt={laptop.name} 
                className="laptop-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultImg;
                }}
              />
              <div className="laptop-details">
                <h3>{laptop.name}</h3>
                <div className="specs-list">
                  {laptop.specs.map((spec, index) => (
                    <span key={index} className="spec-item">{spec}</span>
                  ))}
                </div>
                <p className="price">{laptop.price}</p>
                <button className="view-button">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Homepage;