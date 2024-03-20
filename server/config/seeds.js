const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Donation' }
  
  ]);

  console.log('categories seeded');

  const products = await Donation.insertMany([
    {
      name: 'Small Donation',
      description: 'Support the website with a small contribution.',
      amount: 5.99
    },
    {
      name: 'Medium Donation',
      description: 'Make a medium-sized contribution to help our cause.',
      amount: 19.99
    },
    {
      name: 'Large Donation',
      description: 'Support us with a generous donation.',
      amount: 49.99
    },
    {
      name: 'Custom Donation',
      description: 'Enter your desired donation amount.',
      amount: null 
    }
  ]);
  

  console.log('products seeded');

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
