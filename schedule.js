/**
 * Created by Administrator on 2018/12/12.
 */
const schedule = require('node-schedule');

let log = require('./utils/log');
let bluebird=require('bluebird');
let db = require('./db/Model_1');
let dbs = new db();
schedule.scheduleJob('*/5 * * * * *',async ()=>{
    try {
        let connection = await dbs.createConnection();
        let query=bluebird.promisify(connection.query,{context:connection});
        let result = query(`update dailytask set goldStatus=0`)
        log.info(`更改每日任务状态完成`)
    }catch (err){
        log.error(`更改每日任务状态出错`)
    }

});