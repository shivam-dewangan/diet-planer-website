// src/pages/MealPage.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './MealPage.css';

export default function MealPage() {
  const { type } = useParams();
  const [meals, setMeals] = useState([]);
  const [currentDay, setCurrentDay] = useState(1);
  const [completed, setCompleted] = useState({
    breakfast: false,
    lunch: false,
    dinner: false
  });

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/diet/${type}`);
        setMeals(res.data);
      } catch (err) {
        console.error("Error fetching meals", err);
      }
    };
    fetchMeals();
  }, [type]);

  useEffect(() => {
    setCompleted({
      breakfast: false,
      lunch: false,
      dinner: false
    });
  }, [currentDay]);

  const currentMeal = meals.find((m) => m.day === currentDay);

  const toggleSection = (section) => {
    setCompleted((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const allChecked = completed.breakfast && completed.lunch && completed.dinner;

  const handleNextDay = () => {
    if (allChecked && currentDay < 90) {
      setCurrentDay((prev) => prev + 1);
    }
  };

  if (!currentMeal) return <p style={{ textAlign: "center" }}>Loading Day {currentDay}...</p>;

  return (
    <div className="container">

      {/* 🥘 Progress Bar */}
      <div className="progress-container">
        <div className="progress-label">
          Day {currentDay} of 90 {" 🥘".repeat(currentDay)}
        </div>
        <div className="progress-bar-wrapper">
          <div
            className="progress-bar-fill"
            style={{ width: `${(currentDay / 90) * 100}%` }}
          ></div>
        </div>
      </div>

      <h2>Day {currentMeal.day} - {currentMeal.type} Meal</h2>

      {/* Breakfast */}
      <div className={`meal-section ${completed.breakfast ? 'completed' : ''}`}>
        <h3>
          <input
            type="checkbox"
            checked={completed.breakfast}
            onChange={() => toggleSection("breakfast")}
          />{" "}
          Breakfast
        </h3>
        <ul>
          {currentMeal.breakfast.foodItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p>Calories: {currentMeal.breakfast.calories}</p>
      </div>

      {/* Lunch */}
      <div className={`meal-section ${completed.lunch ? 'completed' : ''}`}>
        <h3>
          <input
            type="checkbox"
            checked={completed.lunch}
            onChange={() => toggleSection("lunch")}
          />{" "}
          Lunch
        </h3>
        <ul>
          {currentMeal.lunch.foodItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p>Calories: {currentMeal.lunch.calories}</p>
      </div>

      {/* Dinner */}
      <div className={`meal-section ${completed.dinner ? 'completed' : ''}`}>
        <h3>
          <input
            type="checkbox"
            checked={completed.dinner}
            onChange={() => toggleSection("dinner")}
          />{" "}
          Dinner
        </h3>
        <ul>
          {currentMeal.dinner.foodItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p>Calories: {currentMeal.dinner.calories}</p>
      </div>

      {/* Button */}
      <button
        className="button"
        onClick={handleNextDay}
        disabled={!allChecked || currentDay >= 90}
      >
        {currentDay < 90 ? "Mark as Complete → Next Day" : "🎉 Completed All 90 Days!"}
      </button>
    </div>
  );
}
