import { ApolloError } from 'apollo-server-express';
import { isEmail } from 'validator';

import { User, UserRoles } from '../../../models/user';
import { loginErrors, registerErrors } from './authErrors';
import {
  signAuthToken,
  comparePasswords,
  hashPassword,
} from '../../../helpers';

export const Mutation = {
  signIn: async (_, { email, password }) => {
    if (!email || !password) {
      throw new ApolloError(...loginErrors.EMAIL_OR_PASSWORD_INVALID);
    }

    const user = await User.findOne({ email });
    if (!user) {
      throw new ApolloError(...loginErrors.EMAIL_OR_PASSWORD_INVALID);
    }

    if (!await comparePasswords(password, user.password)) {
      throw new ApolloError(...loginErrors.EMAIL_OR_PASSWORD_INVALID);
    }

    return {
      token: signAuthToken(user._id),
      user,
    };
  },

  signUp: async (_, { email, password, fullName }) => {
    if (password.length < 6) {
      throw new ApolloError(...registerErrors.PASSWORD_TOO_SMALL);
    }

    if (!isEmail(email)) {
      throw new ApolloError(...registerErrors.WRONG_EMAIL_FORMAT);
    }

    const userCount = await User.find({ email }).countDocuments();
    if (userCount > 0) {
      throw new ApolloError(...registerErrors.EMAIL_NOT_AVAILABLE);
    }

    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      email,
      password: hashedPassword,
      role: UserRoles.USER,
      profile: {
        fullName,
      },
    });

    return {
      token: signAuthToken(user._id),
      user,
    };
  },
};
