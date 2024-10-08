const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to serve static files (images)
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Example product data
let products = [
  {
    id: 1,
    name: 'Product A',
    description: 'Description for Product A',
    price: 29.99,
    imageUrl: '/images/app1.jpg'
  },
  {
    id: 2,
    name: 'Product B',
    description: 'Description for Product B',
    price: 49.99,
    imageUrl: '/images/app111.jpg'
  },
  {
    id: 3,
    name: 'Product C',
    description: 'Description for Product C',
    price: 19.99,
    imageUrl: '/images/appicon1.png'
  }
];

// Shoe data
let shoes = [
  {
    id: 1,
    name: 'Shoe A',
    description: 'Description for Shoe A',
    price: 29.99,
    imageUrl: '/images/nike1.jpg'
  },
  {
    id: 2,
    name: 'Shoe B',
    description: 'Description for Shoe B',
    price: 49.99,
    imageUrl: '/images/nike2.jpg'
  },
  {
    id: 3,
    name: 'Shoe C',
    description: 'Description for Shoe C',
    price: 19.99,
    imageUrl: '/images/nike1.jpg'
  }
];

// Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Get all shoes
app.get('/shoes', (req, res) => {
  res.json(shoes);
});

// Get product by ID
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// Start server
app.listen(port,'172.20.208.1', () => {
  console.log(`API is running on http://localhost:${port}`);
});
