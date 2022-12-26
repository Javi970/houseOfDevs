const jwt = require('jsonwebtoken');
const { SECRET } = require('./envs');

//creacion del token
const generateToken = (payload) => {
  const token = jwt.sign({ user: payload}, SECRET, {
    expiresIn: '2d',
  });
  return token;
};
//validacion del token
const validateToken = (token) => {
  return jwt.verify(token, SECRET);
};

module.exports = { generateToken, validateToken };
