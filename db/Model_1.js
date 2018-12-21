/**
 * Created by Administrator on 2018/9/17.
 * 包含事务
 */
var Connection = require('../db/newmysql');
var bluebird=require('bluebird');
class Order{
    constructor(){
        this.oid=0;
        this.onumber="";//订单编号
        this.oaccount=0.0;//订单金额
        this.recipient="";//收件人
    }
    async createConnection(){
        return await Connection();
    }   
    async startTransaction(){
        let connection=await this.createConnection();
        var beginTransaction=bluebird.promisify(connection.beginTransaction,{context:connection});
        let result;
        try{
            result=await beginTransaction();
        }catch(e){
            result=null;
        }
        return {connection:connection,result:result};
    }
    async query(connection,sql){
        var query=bluebird.promisify(connection.query,{context:connection});
        let return_query;
        try{
            return_query=await query(sql);
        }catch(e){
            return_query=null;
        }
        return return_query;
    }
    async commit(connection){
        var commit=bluebird.promisify(connection.commit,{context:connection});
        let result;
        try{
            result=await commit();
            result='成功,提交!';
            connection.release();
        }catch(e){
            result=null;

        }
        return result;
    }
    async rollback(connection){
        var rollback=bluebird.promisify(connection.rollback,{context:connection});
        let result;
        result=await rollback();
        connection.release();
        result="错误，回滚!";
        return result;
    }
    async findOrders(page){
        let connection=await this.createConnection();
        let query=bluebird.promisify(connection.query,{context:connection});
        let limit=10;
        let index=(page-1)*limit;
        let last=index+10;
        let result;
        try{
            result=await query(`select * from orders limit ${index},${limit}`);
            if(result.length===0){
                result=null;
            }
        }catch(e){
            result=null;
        }
        connection.release();
        return result;
    }
    async test (){
        let connection=await this.createConnection();
        let query=bluebird.promisify(connection.query,{context:connection});
        let result;
        try{
            result=await query(`select * from user `);
            /*if(result.length===0){
                result=null;
            }*/
        }catch(e){
            result=null;
        }
        connection.release();
        return result;
    }
}

module.exports=Order;

//案例
/*
let product=new Product();
async function getUser(){
    let result=await product.findUserByName("wushichao");
    console.log(result);
}

getUser();*/
/*let product=new Product();
async function getUser(){
    let result=await product.findProducts();
    console.log(result);
    let p=[];
    for(let i=0;i<result.length;i++){
        let data=await product.findProductByPid(result[i].pid);
        result[i].counts=data.counts;
        result[i].sales=data.sales;
        result[i].tid=data.tid;
        result[i].t2id=data.t2id;
        p.push(result[i]);
    }
    console.log(p);

}

getUser();*/

