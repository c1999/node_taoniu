
/*用户上线领取金币
* 所需参数 id 用户id*/
let util = require('../../utils/util');
let log = require('../../utils/log');
let bluebird=require('bluebird');
let db = require('../../db/Model_1');
let dbs = new db();
exports.getGold =async (req,res)=>{
    log.warn('访问每日领取金币接口');
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
            /*判断今天是否已经领取*/
            let result =await  query(`select * from dailyTask where id = ${msg.id}`);
            /*当天还没有领取*/
            if(result[0].goldStatus==0){
                /*修改金币数*/
                result = await query(`update usermsg set gold=gold+1000 where id = ${msg.id}`);
                result = await query(`update dailytask set goldStatus=-1 where id = ${msg.id}`);
                result = {
                    result : 0,
                    msg:`领取每日奖励成功`
                };
                log.info(result);
                res.jsonp(result)
            }else {
                result = {
                    result : -1,
                    msg:`重复领取每日奖励`
                };
                log.error(result);
                res.jsonp(result)
            }
        }catch (err){
            result = {
                result : -2,
                msg : "每日领取金币出错"
            };
            res.json(result);
            log.error(`每日领取金币接口出错`)
        }
    }
};