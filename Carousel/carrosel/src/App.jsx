import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/static/shoes.json")
      .then((resp) => resp.json())
      .then(console.log);
  }, []);

  return (
    <div className="container">
      <div className="logo">
        <img src="/src/static/images/super-shoes.png" alt="Super Shoes Logo" />
      </div>
      <div className="carousel">
        <div className="item">
          <div className="image">
            <img
              src="https://imgcentauro-a.akamaihd.net/230x230/94313731.jpg"
              alt="Shoe"
            />
          </div>
          <div className="info">
            <span className="name">Super Shoe 1</span>
            <span className="oldPrice">U$ 299.00</span>
            <span className="price">U$ 199.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
