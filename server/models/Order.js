const { Schema, model, Types } = require("mongoose");

const OrderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },

    shoes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Shoes"
        }
    ]
});

const Order = model("Order", OrderSchema);

module.exports = Order;
