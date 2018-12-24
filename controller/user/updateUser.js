/**
 * Created by Administrator on 2018/12/20.
 */
let bluebird=require('bluebird');
let request = require('request');
let db = require('../../db/Model_1');
let util = require('../../utils/util');
let log = require('../../utils/log');
let WXBizDataCrypt = require('../../utils/WXBizDataCrypt');
let dbs = new db();
/*更新用户信息
 * id 用户id
 *  portrait 头像
 *  wxName 用户名
 * */

exports.updateUser = async(req,res)=>{
    log.warn('访问更改用户信息接口');
    let msg = req.body;
    console.log(msg.portrait);
    console.log(msg);
    /*判断所需参数是否存在*/
    let msg2 = {
        id:'id',
        portrait:'portrait',
        wxName:'wxName'
    };
    let result =util.hasOwnProperty(msg,msg2);
    if(result!=null){
        result = {
            result:-1,
            msg:`缺少参数${result}`
        };
        res.jsonp(result)
    }else {

        try {
            let connection = await dbs.createConnection();
            let query=bluebird.promisify(connection.query,{context:connection});
            let result = query(`UPDATE users SET portrait = '${msg.portrait}',wxName='${new Buffer(msg.wxName).toString('hex')}' WHERE id = '${msg.id}'`)
            result = {
                result:0,
                msg:'修改成功'
            };
            res.jsonp(result)
        }catch (err){
            log.error(err)
            result = {
                result : -2,
                msg : "服务端更新用户信息接口出错"
            };
            res.json(result);
            log.error(`服务端更新用户信息接口出错`)
        }
    }
};
