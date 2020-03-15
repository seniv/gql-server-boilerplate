import { User } from '../../models/user';

export const Query = {
  currentUser: (_, __, { user }) => user,
  user: (_, { id }) => User.findById(id),
};
