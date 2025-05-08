import express from "express";
const router = express.Router();
import Item from "../models/Item.js";

// Add a found item
router.post("/", async (req, res) => {
  try {
    const { itemName, description, locationFound, dateFound, claimed } =
      req.body;
    const newItem = new Item({
      itemName,
      description,
      locationFound,
      dateFound,
      claimed,
    });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    console.error("Error adding new item:", err);
    res.status(500).json({ message: "Server error while adding item" });
  }
});

// View all unclaimed items
router.get("/unclaimed", async (req, res) => {
  try {
    const items = await Item.find({ claimed: false });
    res.json(items);
  } catch (err) {
    console.error("Error fetching unclaimed items:", err);
    res
      .status(500)
      .json({ message: "Server error while fetching unclaimed items" });
  }
});

// View one item by ID
router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    console.error("Error fetching item by ID:", err);
    res.status(500).json({ message: "Server error while fetching item" });
  }
});

// Update item details or mark as claimed
router.put("/:id", async (req, res) => {
  try {
    const updates = req.body;
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });
    if (!updatedItem)
      return res.status(404).json({ message: "Item not found" });
    res.json(updatedItem);
  } catch (err) {
    console.error("Error updating item:", err);
    res.status(500).json({ message: "Server error while updating item" });
  }
});

// Delete an item
router.delete("/:id", async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem)
      return res.status(404).json({ message: "Item not found" });
    res.json({ message: "Item deleted successfully" });
  } catch (err) {
    console.error("Error deleting item:", err);
    res.status(500).json({ message: "Server error while deleting item" });
  }
});
export default router;
