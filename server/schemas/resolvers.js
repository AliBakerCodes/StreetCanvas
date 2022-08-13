const { AuthenticationError } = require('apollo-server-express');
const { User, Pin } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        //Gets all users
        users: async () => {
            return await User.find();
        },

        //Get username by id
        user: async (parent, { username }) => {
            return User.findOne({ username });
        },

        // Get username by email
        userEmail: async (parent, { email }) => {
            return await User.findOne({ email });
        },

        //Get pin by username
        pinsUser: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Pin.find(params)
        },

        //Get pin by id
        pin: async (parent, { pinId }) => {
            return Pin.findOne({ _id: pinId })
        },

        //Get pin by radius
        pinRad: async (parent, { radius }) => {
            const params = radius ? { radius } : {};
            return Pin.find(params)
        },

        // Get pin by lat/lon 
        // ADD SOME BOUNDARIES TO QUERY FOR A RANGE
        // WILL NEED TO CHANGE LAT/LON TO INTEGER TYPE 
        pinLatLon: async (parent, { lat, lon }) => {
            const params = { lat, lon } ? { lat, lon } : {};
            return Pin.find(params)
        },

        // Get all pins
        pins: async () => {
            return Pin.find()
        },

        // By adding context to our query, we can retrieve the logged in user without specifically searching for them
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('pins');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        // Register Users
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },

        // Login existing User
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No profile with this email found!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }

            const token = signToken(user);
            return { token, user };
        },

        deleteUser: async (parent, { userId }, context) => {
            if (context.user) {
                const user = await User.findOneAndDelete({
                    _id: userId
                });
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        // Add a third argument to the resolver to access data in our `context`
        addPin: async (parent, { title, thumbnail, description, lat, lon, URL, radius, glb, usdz }, context) => {
            // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
            if (context.user) {
                const pin = await Pin.create({
                    username: context.user.username,
                    title,
                    thumbnail,
                    description,
                    lat,
                    lon,
                    URL,
                    radius,
                    glb,
                    usdz
                })

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { pins: pin._id } }
                );

                return pin;
            }
            // If user attempts to execute this mutation and isn't logged in, throw an error
            throw new AuthenticationError('You need to be logged in!');
        },

        deletePin: async (parent, { pinId }, context) => {
            if (context.user) {
                const pin = await Pin.findOneAndDelete({
                    _id: pinId,
                    username: context.user.username,
                });

                await Pin.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { pin: pin._id } }
                );

                return pin;
            }
            throw new AuthenticationError('You need to be logged in!');
        },


    },
};

module.exports = resolvers;
