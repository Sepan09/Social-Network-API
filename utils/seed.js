const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async() => {
    console.log('connected');

    await Thought.deleteMany({});

    await User.deleteMany({});

    const users = [
        {
            username: "john",
            email: "john@gmail.com"
        },
        {
            username: "smith",
            email: "smith@gmail.com"
        }
    ];

    const thoughts = [
        {
            thoughtText: "many men",
            username: "ahmed"
        },
        {
            thoughtText: "oh my oh my",
            username: "josh"
        }
    ];

    await User.collection.insertMany(users);

    await Thought.collection.insertMany(thoughts);

    console.log(users);
    console.log(thoughts);
    console.log('seeding complete ');
    process.exit(0);
});