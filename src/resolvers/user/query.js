import { User } from '../../models';

export const Query = {
  currentUser: (_, __, { user }) => user,
  user: (_, { id }) => User.findById(id),
};
