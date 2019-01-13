import { ApolloError } from 'apollo-server-express';
import { UserRoles } from '../../models/user';

const anyRole = 'any';

const checkUserRole = (rolesToCheck, user) => {
  if (typeof rolesToCheck === 'string') {
    return rolesToCheck === anyRole || user.type === rolesToCheck;
  }

  return rolesToCheck.includes(user.type);
};

const requiresUserOfRole = userRoles => callback => (root, args, context, info) => {
  if (!context.user) {
    throw new ApolloError('You should sign in to do this!', 'NOT_AUTHORIZED');
  }

  if (!checkUserRole(userRoles, context.user)) {
    throw new ApolloError('You don\'t have rights to do this', 'DONT_HAVE_ACCESS');
  }

  return callback(root, args, context, info);
};

export const authRequired = requiresUserOfRole(anyRole);
export const adminRequired = requiresUserOfRole(UserRoles.ADMIN);
