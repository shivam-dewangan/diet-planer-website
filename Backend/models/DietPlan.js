// models/DietPlan.js
import mongoose from "mongoose";

const mealSchema = new mongoose.Schema({
  foodItems: [String],
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
});

const dietPlanSchema = new mongoose.Schema({
  type: {
    type: String, // Veg, Non-Veg, Mix
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  breakfast: mealSchema,
  lunch: mealSchema,
  dinner: mealSchema,
});

export default mongoose.model("DietPlan", dietPlanSchema);
