// routes/diet.js
import express from "express";
import DietPlan from "../models/DietPlan.js";

const router = express.Router();

// POST /api/diet → insert new diet plan
router.post("/", async (req, res) => {
  try {
    const newPlan = new DietPlan(req.body);
    const saved = await newPlan.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: "Failed to insert diet plan", details: err.message });
  }
});

// GET /api/diet/:type → fetch by Veg / Non-Veg / Mix
router.get("/:type", async (req, res) => {
  try {
    const plans = await DietPlan.find({ type: req.params.type });
    res.json(plans);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch plans" });
  }
});

export default router;
