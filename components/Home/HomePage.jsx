import macbookImg from "../../assets/laptop1.jpg";
import dellImg from "../../assets/laptop2.jpg";
import hpImg from "../../assets/laptop3.jpg";


function Homepage() {
  const laptops = [
    {
      id: 1,
      name: 'MacBook Pro',
      price: 'Rs. 120,000',
      specs: ['M1 Chip', '16GB RAM', '512GB SSD'],
      image: macbookImg,
    },
    {
      id: 2,
      name: 'Dell XPS',
      price: 'Rs. 90,000',
      specs: ['i7 Processor', '8GB RAM', '256GB SSD'],
      image: dellImg,
    },
    {
      id: 3,
      name: 'HP Pavilion',
      price: 'Rs. 70,000',
      specs: ['i5 Processor', '8GB RAM', '1TB HDD'],
      image: hpImg,
    },
  ];

  return (
    <div className="homepage">
      <h1>Featured Laptops</h1>
      <div className="laptop-grid">
        {laptops.map((laptop) => (
          <div className="laptop-card" key={laptop.id}>
            <img src={laptop.image} alt={laptop.name} />
            <h2>{laptop.name}</h2>
            <p>{laptop.price}</p>
            <ul>
              {laptop.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
