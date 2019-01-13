import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import config from '../config';

export const hashPassword = password => bcrypt.hash(password, 10);
export const comparePasswords = (pwd1, pwd2) => bcrypt.compare(pwd1, pwd2);

export const signAuthToken = userId => jwt.sign({ userId }, config.JWT_SECRET);
export const verifyAuthToken = token => jwt.verify(token, config.JWT_SECRET);
