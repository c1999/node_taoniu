let bluebird=require('bluebird');
let request = require('request');
let db = require('../../db/Model_1');
let util = require('../../utils/util');
let log = require('../../utils/log');
let WXBizDataCrypt = require('../../utils/WXBizDataCrypt');
let dbs = new db();
/*用户登录所需参数
 * code 前端根据微信服务器获取
 * */

exports.login = async(req,res)=>{
    log.warn('访问登录接口');
    let msg = req.body;
    /*判断所需参数是否存在*/
    let connection = await dbs.createConnection();
    let query=bluebird.promisify(connection.query,{context:connection});
    let msg2 = {
        code:'code'
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
            let code = msg.code;
            request(`https://api.weixin.qq.com/sns/jscode2session?appid=wx197e79daa3079f75&secret=813f3ac5c587922960af686f63e3997b&js_code=${code}&grant_type=authorization_code`,async (error,res2,body)=>{
                console.log(typeof body);
                body = JSON.parse(body);
                console.log(body.openid);

                /*判断是否是新用户*/
                let result = await query(`select 1 from users where openid='${body.openid}' limit 1`);
                /*新用户*/
                if(result.length==0){
                    log.info('新用户');
                    result = await query(`INSERT INTO users (openid) VALUES('${body.openid}')`);
                    let userResult = await query(`select * from users where openid='${body.openid}'`);
                    result = await query(`INSERT INTO usermsg (id) VALUES('${userResult[0].id}')`);
                    result = await query(`INSERT INTO dailytask (id) VALUES('${userResult[0].id}')`);
                    result = await query(`INSERT INTO usercustoms (id) VALUES('${userResult[0].id}')`);
                    result = await query(`INSERT INTO userProfit (id) VALUES('${userResult[0].id}')`);
                    userResult = await query(`SELECT * FROM users INNER JOIN usermsg on users.id=usermsg.id INNER JOIN usercustoms ON users.id=usercustoms.id WHERE users.id = ${userResult[0].id}`)
                    result = {
                        result :0,
                        msg:userResult[0]
                    };
                    let test = await connection.release();
                    res.jsonp(result);
                }else {

                    result = await query(`select * from users where openid='${body.openid}'`);
                    console.log('test0');
                    let userResult = await query(`SELECT * FROM users INNER JOIN usermsg on users.id=usermsg.id INNER JOIN usercustoms ON users.id=usercustoms.id WHERE users.id = ${result[0].id}`)
                    console.log('test1');
                    body.id = result[0].id;
                    result = {
                        result :0,
                        msg:userResult[0]
                    };
                    console.log('test2');
                    let test = await connection.release();
                    res.jsonp(result);
                    console.log('test3')

                }


               /* var pc = new WXBizDataCrypt('wx197e79daa3079f75', body.sessionKey);
                var data = pc.decryptData(encryptedData,iv);
                console.log(data)*/
            });

        }catch (err){
            result = {
                result : -2,
                msg : "服务端登录接口出错"
            };
            log.error(err)
            res.json(result);
            log.error(`服务端登录接口出错`)
        }
    }
};