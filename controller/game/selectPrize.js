


let util = require('../../utils/util');
let log = require('../../utils/log');
let bluebird=require('bluebird');
let db = require('../../db/Model_1');
let dbs = new db();
exports.selectPrize = async(req,res)=>{
    log.warn('查看可兑换奖品');
    let msg = req.body;
    try{
        let connection = await dbs.createConnection();
        let query=bluebird.promisify(connection.query,{context:connection});
        let result = await query(`select * from prize`);
        console.log(result)
        result = {
            result : 0,
            msg : result,
        };
        res.jsonp(result);

    }catch (err){
        result = {
            result : -1,
            msg : `服务端查看可兑换奖品接口出错`
        };
        res.jsonp(result);
        log.error(err)
        log.error(`服务端查看可兑换奖品接口出错`)
    }

};