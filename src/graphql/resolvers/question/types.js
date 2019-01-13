import { User } from '../../../models/user';

export const questionTypes = {
  author: root => User.findById(root.createdById),
};
