import { User } from '../../models/user';
import { verifyAuthToken } from '../../helpers';

const getUser = async (authHeader) => {
  if (!authHeader) return null;

  const [authType, token] = authHeader.split(' ');
  if (authType !== 'Bearer' || !token) return null;

  try {
    const decodedToken = verifyAuthToken(token);

    return User.findById(decodedToken.userId);
  } catch (err) {
    return null;
  }
};

export const getUserFromRequest = (req) => {
  const authHeader = req.get('Authorization');
  return getUser(authHeader);
};
