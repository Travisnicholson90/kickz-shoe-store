const User = require('../models/User');
const Shoes = require('../models/Shoes');
const Order = require('../models/Order');
const { AuthenticationError } = require('apollo-server-express');
const { createToken } = require('../utils/Auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {

    Query: {
        users: async () => {
            try {
                const users = await User.find();

                if(!users) {
                    throw new Error('No users found');
                }
                console.log(users);
                return users;

            } catch (err) {
                console.log(err);
            }
        },

        user: async (parent, { userId }) => {
            try {
                const user = await User.findById(userId);

                if (!user) {
                    throw new Error('No user found');
                }
                console.log(user);
                return user;

            } catch (err) {
                console.log(err);
            }
        },

        addressByUserId: async (parent, { userId }) => {
            try {
                const user = await User.findById(userId);

                if (!user) {
                    throw new Error('No user found');
                }
                console.log(user.address);
                return user.address;

            } catch (err) {
                console.log(err);
            }
        },


        shoes: async () => {
            try {
                const shoes = await Shoes.find();

                if (!shoes) {
                    throw new Error('No shoes found');
                }
                console.log(shoes);
                return shoes;

            } catch (err) {
                console.log(err);
            }      
    },

    shoeById: async (parent, { shoeId }) => {
        try {
            const shoe = await Shoes.findById(shoeId);

            if (!shoe) {
                throw new Error('No shoe found');
            }
            console.log(shoe);
            return shoe;

        } catch (err) {
            console.log(err);
        }
    },

    searchShoeByCategory: async (parent, { category }) => {
        try {
            const shoeCategory = await Shoes.find({ 'category.name': category })

            if (!shoeCategory) {
                throw new Error('No shoes found');
            }

            console.log(shoeCategory);
            return shoeCategory;

        } catch (err) {
            console.log(err);
        }
    },

    searchShoeByCategoryMens: async (parent, {category}) => {
        try {
            const shoeByCategory = await Shoes.find({ 'category.name': category })

            if (!shoeByCategory) {
                throw new Error('No shoes found');
            }

            const filterGender = shoeByCategory.filter(shoe => shoe.gender === 'mens');

            console.log(filterGender);
            return filterGender;


        } catch (err) {
            console.log(err);
        }
    },

    searchShoeByCategoryWomens: async (parent, {category}) => {
        try {
            const shoeByCategory = await Shoes.find({ 'category.name': category })

            if (!shoeByCategory) {
                throw new Error('No shoes found');
            }

            const filterGender = shoeByCategory.filter(shoe => shoe.gender === 'womens');

            console.log(filterGender);
            return filterGender;


        } catch (err) {
            console.log(err);
        }
    },



    // search shoe by brand
    searchShoeByBrand: async (parent, { brand }) => {
        try {
            const shoesByBrand = await Shoes.find({ brand: brand })

            if (!shoesByBrand) {
                throw new Error('No shoes found');
            }
            console.log(shoesByBrand);
            return shoesByBrand;

        } catch (err) {
            console.log(err);
        }
    },

    searchShoeByPrice: async (parent, { maxPrice }) => {
        try {
            const shoeByPrice = await Shoes.find({ price: { $lte: maxPrice } })

            if (!shoeByPrice) {
                throw new Error('No shoes found');
            }

            console.log(shoeByPrice);
            return shoeByPrice;
        } catch (err) {
            console.log(err);
        }
    },

    order: async (parent, { _id }, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id).populate({
            path: 'orders.products',
            populate: 'category'
          });
  
          return user.orders.id(_id);
        }
  
        throw new AuthenticationError('Not logged in');
      },

      checkout: async (parent, args, context) => {

        const url = new URL(context.headers.referer).origin;
        const order = new Order({ shoes: args.shoes });

        const line_items = [];

        const { shoes } = await order.populate('shoes')

        for (let i = 0; i < shoes.length; i++) {
            const shoe = await stripe.shoe.create({
                name: shoes[i].name,
                description: shoes[i].description,
                images: [`${url}/images/${shoes[i].image}`]
            });

            const price = await stripe.prices.create({
                shoe: shoe.id,
                unit_amount: shoes[i].price * 100,
                currency: 'aud',
            });

            line_items.push({
                price: price.id,
                quantity: 1
            });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${url}/`
        });

        return { session: session.id };
    },
},

  Mutation: {
      addUser: async (parent, { user }, context) => {
          try {
              const newUser = await User.create(user);
              
              if (!newUser) {
                  throw new Error('Something went wrong');
                }
                const token = createToken(newUser._id);
                 
                console.log('new user:', newUser, 'token: ', token);
                return { token: token, user: newUser };

        } catch (err) {
            console.log(err);
        }
    },

    login: async (parent, { email, password }) => {
        try {
            const user = await User.login(email, password);

            if (!user) {
                throw new AuthenticationError('No user found');
            }

            const token = createToken(user._id);

            console.log('user:', user, 'token: ', token);
            return { user, token };

        } catch (err) {
            console.log(err);
        }
    }, 
    
    removeUser: async (parent, { userId }) => {
        try {
            const user = await User.findByIdAndDelete(userId);

            if (!user) {
                throw new Error('No user found');
            }

            console.log(user);
            return user;
        } catch (err) {
            console.log(err);
        }
    },

    // add address to a user
    addAddressToUser: async (parent, { userId, address }, context) => {
        try {
            // update the user with the new address. 
            const updateUserAddress = await User.findByIdAndUpdate(
                userId,
                 // push the new address to the address array
                { $push: { address: address } },
                { new: true }
            );

            if (!updateUserAddress) {
                throw new Error('No user found');
            }

            console.log(updateUserAddress);
            return updateUserAddress;
        } catch (err) {
            console.log(err);
        }
    },

    // update a user 
    updateUser: async (parent, { userId, user: updatedUser }, context) => {
        try {
            const user = User.findByIdAndUpdate(
                userId,
                updatedUser,
                { new: true }
            );

            if (!user) {
                throw new Error('No user found');
            }

            console.log(user);
            return user;
        } catch (err) {
            console.log(err);
        }
    },
    addOrder: async (parent, { shoes }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ shoes });
  
        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
  
        return order;
      }
  
      throw new AuthenticationError('Not logged in');
    },
  },
};


 
module.exports = resolvers;




