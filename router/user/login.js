
let express = require('express');
const routers = express.Router();
let login = require('../../controller/user/login');

routers
/*注册接口*/
    .post('/reg',login.login);

exports.router = routers;