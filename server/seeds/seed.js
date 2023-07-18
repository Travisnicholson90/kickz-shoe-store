const db = require('../config/connection');
const User = require('../models/User');
const Shoes = require('../models/Shoes');
const shoeSeeds = require('./shoeSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    await Shoes.deleteMany({});
    await Shoes.create(shoeSeeds);
    await User.deleteMany({});
    await User.create(userSeeds); 


    console.log('database seeded! 🌱');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
