// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";
import "../subscription/Home.css";


export default function Home() {
  const navigate = useNavigate();

  const handleSelect = (type) => {
    navigate(`/meal/${type}`);
  };

  return (
  <div className="home-container">
   <h1 className="meal-heading">Select Your <a>Free Meal</a>  Type</h1>
  <div className="card-group">

    {/* ✅ Active Veg Plan */}
    <div className="meal-card" onClick={() => handleSelect("Veg")}>
      <h2>🥗 Veg Plan</h2>
      <p>The Veg Plan offers a nutritious and wholesome selection of meals made entirely 
        from plant-based ingredients. It includes fresh vegetables, fruits, grains, legumes,
        and dairy products, providing essential nutrients for a healthy lifestyle. 
        Ideal for vegetarians or those seeking a lighter, fiber-rich diet.</p>
    </div>

    {/* 🚫 Inactive Non-Veg Plan */}
    <div className="meal-card inactive">
      <h2>🍗 Non-Veg Plan</h2>
      <p>The Non-Veg Plan includes a protein-packed variety of meals featuring meat, poultry, fish, and eggs. This plan is perfect for individuals looking to build muscle, maintain energy levels, and enjoy a rich and flavorful diet. Balanced with vegetables and grains, it supports overall health and strength.</p>
    </div>

    {/* 🚫 Inactive Mix Plan */}
    <div className="meal-card inactive">
      <h2>🍱 Mix Plan</h2>
      <p>The Mix Plan combines the best of both Veg and Non-Veg meals, offering a balanced and flexible approach to eating. It includes plant-based foods alongside selected meat or seafood options, ensuring a wide range of nutrients. Ideal for those who prefer variety and want the freedom to enjoy all types of meals.</p>
    </div>

  </div>
</div>

  );
}
