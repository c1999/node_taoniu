
/*游戏结束
 * 所需参数
 * id    用户id
 * getGold 获得金币
 * getRedPacket 获得红包
 * getIntegral 获得积分
 * */
let util = require('../../utils/util');
let log = require('../../utils/log');
let bluebird=require('bluebird');
let db = require('../../db/Model_1');
let dbs = new db();
exports.gameOver = async(req,res)=>{
    log.warn('访问游戏结算接口');
    let msg = req.body;
    /*判断所需参数是否存在*/
    let msg2 = {
        id:'id',
        getGold:'getGold',
        getRedPacket:'getRedPacket',
        getIntegral:'getIntegral'
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
            /*结算金币 积分 红包*/
            let result = await query(`update userMsg set gold=gold+${msg.getGold},redPacket=redPacket+${msg.getRedPacket},integral=integral+${msg.getIntegral}  where id=${msg.id}`);
            /*结算经验等级*/
            result = await query(`select grade,suffer from userMsg where id=${msg.id}`);
            /*该等级所需要的经验 L  目前在该等级下的经验 l*/
            let l = result[0].suffer;
            let L;
            if(result[0].grade<5){
                /*小于五级的时候所需经验*/
                L = result[0].grade * result[0].grade + 5 * result[0].grade;
                L = L*30-80;
            }else {
                /*大于五级的时候所需经验*/
                let x = result[0].grade+5;
                L = x*x+5*x;
                L = 30*L-80
            }
            /*升级的情况*/
            let G =l+300-L;
            if(G>=0){
                /*修改等级并且把多余的经验加上去*/
                result = await query(`update userMsg set grade=grade+1,suffer=${G} where id = ${msg.id}`);
                log.info(`用户id:${msg.id}游戏结算成功:金币增加${msg.getGold} 积分增加${msg.getIntegral}红包增加${msg.getRedPacket} `);
            }else {
                /*不升级的情况值增加经验*/
                result = await query(`update userMsg set suffer=suffer+300 where id = ${msg.id}`);
                log.info(`用户id:${msg.id}游戏结算成功:金币增加${msg.getGold} 积分增加${msg.getIntegral}红包增加${msg.getRedPacket}`);
            }
            result = await query(`select * from userMsg where id = ${msg.id}`);
            result = {
                result:0,
                msg:result[0]
            };
            res.json(result)
        }catch (err){
            log.error(err);
            result = {
                result : -2,
                msg : "服务端游戏结算接口出错"
            };
            res.json(result);
            log.error(`服务端游戏结算接口出错`)
        }
    }
};