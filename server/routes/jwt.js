const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const { secretKey } = require('../constant/constant');

const jwtAuth = expressJwt({secret: secretKey}).unless({path: ["/api/user/login", "/api/user/register"]}); 

module.exports = jwtAuth;
