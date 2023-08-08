const express = require('express');
const  { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/Auth');
const env = require("dotenv").config({ path: "./.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get("/config", (req, res) => {
    res.send({
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
  });

  const productDetails = {
        brand: "Reebok",
        name: "club C Revenge Vintage Shoes",
        image: "https://reebok.com.au/cdn/shop/products/14-390013_600x600.jpg?v=1666480497",
        size: "US 9",
        currency: "AUD", // Currency (you can change it to your desired currency)
        amount: 16000, // Price in cents (e.g., $49.99 would be 4999)
        quantity: 1,
        customer: "Travis Nicholson",
    }


  app.get('/checkout', (req, res) => {
    res.send(productDetails);
});
  
  app.post("/create-payment-intent", async (req, res) => {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        currency: productDetails.currency,
        amount: productDetails.amount,
        automatic_payment_methods: { enabled: true },
        metadata: {
          product_name: productDetails.name,
          product_size: productDetails.size,
          product_quantity: productDetails.quantity,
        }
      });
  
      // Send publishable key and PaymentIntent details to client
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (e) {
      return res.status(400).send({
        error: {
          message: e.message,
        },
      });
    }
  });


// create anew instance of the apollo server with the graphQL schema 
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        });
    }
  );
};

startApolloServer(typeDefs, resolvers);
