const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }

      throw AuthenticationError;
    },

  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw AuthenticationError;
    },
    saveDream: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { dreamHistory: args } },
          { new: true }
        );

        return updatedUser;
      }
      throw AuthenticationError;
    },


//  deleteDream: async (parent, args, context) => {
//   if (context.user) {
//     try {
//       const updatedUser = await User.findOneAndUpdate(
//         { _id: context.user._id },
//         { $pull: { dreamHistory: { _id: args.dreamId } } },
//         { new: true }
//       );

//       return updatedUser;
//     } catch (error) {
//       console.error('Error deleting dream:', error);
//       throw new Error('Failed to delete dream');
//     }
//   } else {
//     throw new AuthenticationError('Unauthorized');
//   }
// },



    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
