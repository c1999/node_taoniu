/**
 * Created by Administrator on 2018/11/6.
 */
let user = require('./user/reg.js');
let game = require('./game/index.js');
exports.app = (app)=>{
    app.use('/user',user.router)
    app.use('/game',game.router)
}
