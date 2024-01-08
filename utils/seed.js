const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');


  await Thought.deleteMany({});


  await User.deleteMany({});


  const users = [
      {
          username: "john",
          email: "john@hotmail.com"
      },
      {
          username: "smith",
          email: "smith@gmail.com"
      }
  ];


  const thoughts = [
      {
          thoughtText: "many men, many many many many men",
          username: "50 cent"
      },
      {
          thoughtText: "yee",
          username: "ahmed"
      }
  ]


  await User.collection.insertMany(users);


  await Thought.collection.insertMany(thoughts);


  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});