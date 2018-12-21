
let express = require('express');
const routers = express.Router();
let PayString = require('../../controller/game/PayString');
let gameOver = require('../../controller/game/gameOver');
let videoTack = require('../../controller/game/videoTack');

routers
/*开始游戏购买绳子*/
    .post('/PayString',PayString.PayString)
/*游戏结束提交*/
    .post('/gameOver',gameOver.gameOver)
/*任务接口*/
    .post('/Tack',videoTack.videoTack);
exports.router = routers;