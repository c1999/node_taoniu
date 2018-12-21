/*签到接口
 * 所需参数
 *id
 */
let util = require('../../utils/util');
let log = require('../../utils/log');
let bluebird=require('bluebird');
let db = require('../../db/Model_1');
let dbs = new db();
console.log(util.getNowFormatDate2(4))
exports.sign = async (req,res)=>{
    log.warn('访问签到接口');
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
            /*判断今天是否签到*/
            let result =await  query(`select 1 from sign where id = ${msg.id} and date='${util.getNowFormatDate()}' limit 1`)
            if(result.length==0){
                /*插入当天签到信息*/
                result = await query(`insert into sign (id,date,week) values(${msg.id},'${util.getNowFormatDate()}',${new Date().getDay()})`)
                /*查看本星期的日期*/
                let week = new Date().getDay()-1
                let weekSign = await query(`select week from sign where id=${msg.id} and date>=${util.getNowFormatDate2(week)}`);

                result = {
                    result : 0,
                    date:new Date().getDay(),
                    msg:`签到成功`,
                    weekSign:weekSign
                };
                res.jsonp(result)

            }else {
                result = {
                    result : -1,
                    date:new Date().getDay(),
                    msg:`重复签到`
                };
                res.jsonp(result)
            }
        }catch (err){
            result = {
                result : -2,
                msg : "签到接口出错"
            };
            res.json(result);
            log.error(`签到接口出错`)
        }
    }
};