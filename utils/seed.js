const connection = require('../config/connection');
const { User, Thought, reactions } = require('../models');

(async () => {
    try {
        await connection.once('open', async () => {
            let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
            if (userCheck.length) {
                await connection.db.dropCollection('users');
            }
            let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
            if (thoughtCheck.length) {
                await connection.db.dropCollection('thoughts');
            }
            let reactionCheck = await connection.db.listCollections({ name: 'reactions' }).toArray();
            if (reactionCheck.length) {
                await connection.db.dropCollection('reactions');
            }

            await User.create({
                username: 'user1',
                email: 'example@gmail.com',
                thoughts: [],
                friends: []
            });

            await User.create({
                username: 'user2',
                email: 'example2@gmail.com'
            });

            await Thought.create({
                thoughtText: 'This is a thought',
                username: 'user1',
                userId: 'user1',
                reactions: []
            });

            await Thought.create({
                thoughtText: 'This is another thought',
                username: 'user2',
                reactions: [
                    {
                        reactionBody: 'This is a reaction',
                        username: 'user1',
                    },
                    {
                        reactionBody: 'This is another reaction',
                        username: 'user2',
                    }
                ]
            });

            console.log('Seeding complete!');
            process.exit(0);
        });
    } catch (error) {
        console.error('Error during seeding:', error);
        process.exit(1);
    }
})();
