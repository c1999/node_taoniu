/**
 * Created by zhuji on 2018/12/24.
 */

/*观看视频增加利润接口
 * 所需参数
 * id    用户id
 * */
let util = require('../../utils/util');
let log = require('../../utils/log');
let bluebird=require('bluebird');
let db = require('../../db/Model_1');
let dbs = new db();
exports.getProfit = async(req,res)=>{
    log.warn('访问观看视频增加利润接口');
    let msg = req.body;
    /*判断所需参数是否存在*/
    let msg2 = {
        id:'id'
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
            let connection = await dbs.createConnection();
            let query=bluebird.promisify(connection.query,{context:connection});
            let result = await query(`update userProfit set createRedPacket=createRedPacket+0.025,createIntegral=createIntegral+250 where id=${msg.id}`);
            result = {
                result : 0,
                msg : `成功`
            };
            res.jsonp(result);
        }catch (err){
            result = {
                result : -1,
                msg : `服务端观看视频增加利润接口出错`
            };
            res.jsonp(result);
            log.error(err)
            log.error(`服务端游戏购买绳子接口出错`)
        }
    }
};