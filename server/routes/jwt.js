const expressJwt = require("express-jwt");
const { secretKey } = require('../constant/constant');

const jwtAuth = expressJwt({secret: secretKey, userProperty: 'user'}).unless({path: ["/api/user/login", "/api/user/register"]}); 

module.exports = jwtAuth;
