
let express = require('express');
const routers = express.Router();
let reg = require('../../controller/user/reg');
let sign = require('../../controller/user/sign');
let getGold = require('../../controller/user/getGold');
let login = require('../../controller/user/login');
let updateUser = require('../../controller/user/updateUser');

routers
        /*注册接口*/
        .post('/reg',reg.reg)
        /*签到接口*/
        .post('/sign',sign.sign)
        /*领取每日金币*/
        .post('/getGold',getGold.getGold)
        /*领取每日金币*/
        .post('/login',login.login)

        .post('/updateUser',updateUser.updateUser);

exports.router = routers;