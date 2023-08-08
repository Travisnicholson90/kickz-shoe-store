const { Schema, model, Types } = require('mongoose');
const AddressSchema = require('./Address');
const Order = require('./Order');
const Cart = require('./Cart');
const  bcrypt = require('bcrypt');

//  users schema
const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    surname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    address: [AddressSchema],
    cart: [Cart.schema],

    contactNumber: {
      type: String,
      trim: true,
    },
    orders: [Order.schema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// create a static method to login user
UserSchema.statics.login = async function( email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('Incorrect password');
    }
    throw Error('Incorrect email');
};

const User = model('User', UserSchema);

module.exports = User;
       