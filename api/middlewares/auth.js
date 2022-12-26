const { validateToken } = require('../config/token');

//validacion de usuario logueado
function validateAuth(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);
  const { user } = validateToken(token);
  if (!user) return res.sendStatus(401);

  req.user = user;

  next();
}

//validacion de usuario admin

function validateAdmin(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);
  const { user } = validateToken(token);
  if (!user) return res.sendStatus(401);
  if (!user.admin) return res.sendStatus(405);

  req.user = user;

  next();
}

module.exports = {validateAuth,validateAdmin};
