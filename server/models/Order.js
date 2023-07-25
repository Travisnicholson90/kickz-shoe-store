const { Schema, model, Types } = require("mongoose");

const OrderSchema = new Schema({
    shoes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Shoes"
        }
    ]
});

const Order = model("Order", OrderSchema);

module.exports = Order;
