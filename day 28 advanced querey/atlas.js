require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT;
const uri =process.env.MONGODB_URIURI;

// Connect to MongoDB database

mongoose
  .connect(uri)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.log('Error connecting to database: ', error);
  });


  const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true,min:0},
    category: {type: String, required: true},
    description: {type: String},
    inStock : {type:Boolean, default:true},
    createdAt: { type: Date, default: Date.now },
    isDeleted:{type: Boolean,default:false},
    expirationDate: { type: Date },

  });

  ProductModel = mongoose.model('Product', productSchema);

  const products = [
    {
      name: 'Laptop',
      price: 1200,
      description: 'High-performance laptop with powerful specs.',
      inStock: true,
      category: 'Electronics',
    },
    {
      name: 'Smartphone',
      price: 800,
      description: 'Latest smartphone with advanced features.',
      inStock: true,
      category: 'Electronics',
    },
    {
      name: 'Headphones',
      price: 150,
      description: 'Over-ear headphones with noise-cancelling technology.',
      inStock: true,
      category: 'Electronics',
    },
    {
      name: 'Smartwatch',
      price: 250,
      description: 'Fitness tracker and smartwatch with health monitoring.',
      inStock: false,
      category: 'Electronics',
    },
    {
      name: 'Camera',
      price: 600,
      description: 'Digital camera with high-resolution imaging.',
      inStock: true,
      category: 'Electronics',
    },
    {
      name: 'Gaming Console',
      price: 400,
      description: 'Next-gen gaming console for immersive gaming experiences.',
      inStock: true,
      category: 'Electronics',
    },
    {
      name: 'Bluetooth Speaker',
      price: 80,
      description: 'Portable Bluetooth speaker with crisp sound.',
      inStock: true,
      category: 'Electronics',
    },
    {
      name: 'Tablet',
      price: 300,
      description: 'Slim and lightweight tablet for on-the-go productivity.',
      inStock: true,
      category: 'Electronics',
    },
    {
      name: 'Coffee Maker',
      price: 50,
      description: 'Automatic coffee maker for brewing your favorite coffee.',
      inStock: true,
      category: 'Appliances',
    },
    {
      name: 'Fitness Tracker',
      price: 100,
      description: 'Wearable fitness tracker with heart rate monitoring.',
      inStock: false,
      category: 'Electronics',
    },
    {
      name: 'External Hard Drive',
      price: 120,
      description: 'Large-capacity external hard drive for data storage.',
      inStock: true,
      category: 'Electronics',
    },
    {
      name: 'Wireless Mouse',
      price: 30,
      description: 'Ergonomic wireless mouse for comfortable computing.',
      inStock: true,
      category: 'Electronics',
    },
    {
      name: 'Portable Charger',
      price: 20,
      description: 'Compact portable charger for on-the-go device charging.',
      inStock: true,
      category: 'Electronics',
    },
    {
      name: 'Smart Bulbs',
      price: 15,
      description: 'Set of smart bulbs for customizable lighting at home.',
      inStock: true,
      category: 'Electronics',
    },
    {
      name: 'Backpack',
      price: 40,
      description: 'Durable backpack with multiple compartments for storage.',
      inStock: true,
      category: 'Fashion',
    },
    {
      name: 'Wireless Earbuds',
      price: 120,
      description: 'True wireless earbuds for immersive audio experiences.',
      inStock: false,
      category: 'Electronics',
    },
    {
      name: 'Graphic Tablet',
      price: 200,
      description: 'Digital graphic tablet for artists and designers.',
      inStock: true,
      category: 'Electronics',
    },
    {
      name: 'Desk Chair',
      price: 150,
      description: 'Comfortable desk chair with adjustable features.',
      inStock: true,
      category: 'Furniture',
    },
    {
      name: 'Air Purifier',
      price: 80,
      description: 'HEPA air purifier for cleaner and fresher indoor air.',
      inStock: true,
      category: 'Appliances',
    },
    {
      name: 'Electric Toothbrush',
      price: 40,
      description: 'Electric toothbrush for effective dental care.',
      inStock: true,
      category: 'Appliances',
    },
  ];
  
  
//   ProductModel.insertMany(products)
//     .then((product) => console.log("User created succesfully: ", product))
//     .catch((error) => console.log("Error creating user: ", error));

//     ProductModel.find({})
//   .then((product) => console.log("Users found: ", product))
//   .catch((error) => console.log("Error fetching users: ", error));


  ProductModel.findOneAndUpdate(
      { name: "Laptop" },
      { $set: { isDeleted: true} }
    )
      .then((product) => {
        if (product) console.log("product Soft deleted successfully: ", product);
        else console.log("product not found");
      })
      .catch((error) => console.log("Error fetching products: ", error));
  
















app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});