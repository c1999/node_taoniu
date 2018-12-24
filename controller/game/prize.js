/**
 * Created by zhuji on 2018/12/22.
 */

/*兑换商品接口
 * 所需参数
 * id    用户id
 * pid  礼品id
 * name  收件人
 * number 电话
 * site 地址
 * */
let util = require('../../utils/util');
let log = require('../../utils/log');
let bluebird=require('bluebird');
let db = require('../../db/Model_1');
let dbs = new db();
exports.prize = async(req,res)=>{
    log.warn('访问积分兑换接口');
    let msg = req.body;
    /*判断所需参数是否存在*/
    let msg2 = {
        id:'id',
        pid:'pid',
        name:'name',
        number:'number',
        site:'site'
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
            let integral = await query(`select integral from usermsg where id='${msg.id}'`);
            let pintegral = await query(`select integral from prize where pid='${msg.pid}'`);

            if(integral[0].integral>=pintegral[0].integral){
                let result = await query(`update usermsg set  integral=integral-'${pintegral[0].integral}' where id='${msg.id}'`);
                result = {
                    result : 0,
                    msg : `兑换成功`,
                };
                res.jsonp(result);
                return;
            }else {
                result = {
                    result : -1,
                    msg : `积分不足`
                };
                res.jsonp(result);
                return;
            }
        }catch (err){
            result = {
                result : -1,
                msg : `服务端兑换商品接口出错`
            };
            res.jsonp(result);
            log.error(err)
            log.error(`服务端兑换商品接口出错`)
        }
    }
};