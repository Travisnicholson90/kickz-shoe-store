const { Schema, model } = require("mongoose");

const CartSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    brand: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    quantity: {
      type: String,
      trim: true,
      required: true,
    },
    size: {
        type: String,
        trim: true,
        required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Cart = model("Cart", CartSchema);

module.exports = Cart;
