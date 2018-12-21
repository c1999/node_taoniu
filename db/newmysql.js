var mysqlConfig=require('./config/mysql');
var db    = {};
var mysql = require('mysql');
var bluebird=require('bluebird');
var pool  = mysql.createPool(mysqlConfig);
 
let getConnection=bluebird.promisify(pool.getConnection,{context:pool});
async function getconnection(){
    let result=await getConnection();
    console.log()
    return new Promise(function (resolve,reject) {
        resolve(result);
    })
}
module.exports=async function(){
    let result = await getconnection()
    console.log('-------------')
    return result
};