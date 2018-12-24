
let express = require('express');
const routers = express.Router();
let PayString = require('../../controller/game/PayString');
let gameOver = require('../../controller/game/gameOver');
let videoTack = require('../../controller/game/videoTack');
let prize = require('../../controller/game/prize');
let selectPrize = require('../../controller/game/selectPrize');
let getProfit = require('../../controller/game/getProfit');
let judgeGame = require('../../controller/game/judgeGame');

routers
/*开始游戏购买绳子*/
    .post('/PayString',PayString.PayString)
/*游戏结束提交*/
    .post('/gameOver',gameOver.gameOver)
/*任务接口*/
    .post('/Tack',videoTack.videoTack)
    /*任务接口*/
    .post('/prize',prize.prize)
    .post('/selectPrize',selectPrize.selectPrize)
    .post('/getProfit',getProfit.getProfit)
    .post('/judgeGame',judgeGame.judgeGame);
exports.router = routers;