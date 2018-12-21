
/*开始游戏购买绳子
* 所需参数
* id    用户id
* stringCount 绳子数量
* */
let util = require('../../utils/util');
let log = require('../../utils/log');
let bluebird=require('bluebird');
let db = require('../../db/Model_1');
let dbs = new db();
exports.PayString = async(req,res)=>{
    log.warn('访问开始游戏购买绳子');
    let msg = req.body;
    /*判断所需参数是否存在*/
    let msg2 = {
        id:'id',
        stringCount:'stringCount'
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
            let result = await query(`select gold from userMsg where id=${msg.id}`);
            if(msg.stringCount*100<=result[0].gold){
                let result = await query(`update userMsg set gold = gold-${msg.stringCount}`);
                result = {
                    result : 0,
                    msg : `购买成功`,
                    stringCount:msg.stringCount
                };
                res.jsonp(result);
                return;
            }else {
                result = {
                    result : -1,
                    msg : `金币不足`
                };
                res.jsonp(result);
                return;
            }
        }catch (err){
            log.error(`游戏购买绳子接口出错`)
        }
    }
};