/**
 * Created by zhuji on 2018/12/24.
 */

/*判断是否该关卡红包总额以及能否套中
 * 所需参数
 * id    用户id
 * customs 关卡
 * */
let util = require('../../utils/util');
let log = require('../../utils/log');
let bluebird=require('bluebird');
let db = require('../../db/Model_1');
let dbs = new db();
exports.judgeGame = async(req,res)=>{
    log.warn('访问判断是否该关卡红包总额以及能否套中接口');
    let msg = req.body;
    /*判断所需参数是否存在*/
    let msg2 = {
        id:'id',
        customs:'customs'
    };
    let result =util.hasOwnProperty(msg,msg2);
    if(result!=null){
        result = {
            result:-1,
            msg:`缺少参数${result}`
        };
        res.jsonp(result)
    }else {
        try{
            let judegeRedPacket= false;
            let judegeIntegral = false;
            let connection = await dbs.createConnection();
            let query=bluebird.promisify(connection.query,{context:connection});
            let userResult = await query(`select createRedPacket,createIntegral  from userProfit where id=${msg.id}`);
            let customsResult = await query(`select setRedPacket,setMinIntegral,setMinGold,setRedPacketCount from setCustoms where customs=${msg.customs}`)
            /*判断是否能套中积分牛*/
            if(userResult[0].createRedPacket>=customsResult[0].setRedPacket){
                judegeRedPacket = true
            }
            if(userResult[0].createIntegral>=customsResult[0].setMinIntegral){
                judegeIntegral = true;
            }
            result = {
                result:0,
                msg:{
                    redPacket:customsResult[0].setRedPacket,
                    integral:customsResult[0].setMinIntegral,
                    redPacketCount:customsResult[0].setRedPacketCount,
                    Gold:customsResult[0].setMinGold,
                    judegeRedPacket:judegeRedPacket,
                    judegeIntegral:judegeIntegral
                }
            };
            res.jsonp(result)
        }catch (err){
            result = {
                result : -1,
                msg : `服务端判断是否该关卡红包总额以及能否套中接口出错`
            };
            res.jsonp(result);
            log.error(err);
            log.error(`服务端判断是否该关卡红包总额以及能否套中接口出错`)
        }
    }
};