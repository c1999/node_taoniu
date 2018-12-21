/**
 * Created by Administrator on 2018/12/11.
 */

/*开始游戏购买绳子
 * 所需参数
 * id    用户id
 * customsType 完成任务类型 videoCount 视频 shareCount 分享 grade 等级
 * */
let util = require('../../utils/util');
let log = require('../../utils/log');
let bluebird=require('bluebird');
let db = require('../../db/Model_1');
let dbs = new db();
exports.videoTack = async(req,res)=>{
    log.warn('访问视频任务接口');
    let msg = req.body;
    /*判断所需参数是否存在*/
    let msg2 = {
        id:'id',
        customsType:'customsType'
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
            /*首先获取到当前关卡，在获取下一关的任务*/
            let userCustoms = await query(`select * from userCustoms where id=${msg.id}`);
            let customsTask = await query(`select * from customsTask where customs=${userCustoms[0].customs}+1`);
            /*包含该任务的情况且该任务还没有完成*/
            if(customsTask[0][msg.customsType]!=0&&userCustoms[0][msg.customsType]!=customsTask[0][msg.customsType]){
                /*修改任务进度*/
               let result = await query(`update userCustoms set ${msg.customsType}=${msg.customsType}+1 where id=${msg.id}`)
            }
            /*查看更新后的任务进度*/
            userCustoms = await query(`select * from userCustoms where id=${msg.id}`);

            /*查看当前任务*/
            for (item in customsTask[0]){
                if(customsTask[0][item]==0){
                    delete customsTask[0][item];
                }
            }
            delete customsTask[0].customs;

            /*查看当前任务进度*/
            let userCustoms2 = {};
            for (item in customsTask[0]){
                userCustoms2[item] = userCustoms[0][item]
            }

            /*检测是否已经完成任务*/
            let flag = true;
            for(item in customsTask[0]){
                if(!(customsTask[0][item]==userCustoms2[item])){
                    flag = false
                }
            }
            /*没有通关*/
            if(!flag){
                result = {
                    result:0,
                    msg:{
                        customsTask:customsTask[0],
                        userCustoms2:userCustoms2,
                        customs:userCustoms[0].customs
                    }
                };
                res.jsonp(result);
            /*解锁下一关*/
            }else {
                userCustoms = await query(`update userCustoms set videoCount=0,shareCount=0,customs=customs+1`)
                userCustoms = await query(`select * from userCustoms where id=${msg.id}`);
                customsTask = await query(`select * from customsTask where customs=${userCustoms[0].customs}+1`);
                /*查看当前任务*/
                for (item in customsTask[0]){
                    if(customsTask[0][item]==0){
                        delete customsTask[0][item];
                    }
                }
                delete customsTask[0].customs;

                /*查看当前任务进度*/
                let userCustoms2 = {};
                for (item in customsTask[0]){
                    userCustoms2[item] = userCustoms[0][item]
                }
                result = {
                    result:0,
                    msg:{
                        customsTask:customsTask[0],
                        userCustoms2:userCustoms2,
                        customs:userCustoms[0].customs
                    }
                };
                flag = true;
                res.jsonp(result);
            }
        }catch (err){
            log.error(`提交任务接口出错`)
        }
    }
};