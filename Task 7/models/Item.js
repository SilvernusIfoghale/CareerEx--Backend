import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  locationFound: {
    type: String,
    trim: true,
  },
  dateFound: {
    type: Date,
    default: Date.now,
  },
  claimed: {
    type: Boolean,
    default: false,
  },
});

const Item = mongoose.model("Item", ItemSchema);
export default Item;
