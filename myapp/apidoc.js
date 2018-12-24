
/**
 * @api {POST} tn.ykplay.com/user/sign 用户签到
 * @apiGroup Users
 * @apiVersion 0.0.1
 * @apiDescription 用于用户签到
 * @apiParam {String} id  用户id
 * @apiParamExample {json} 请求样例：
 *                id=123
 * @apiSuccess (200) {String}  result 0 正确 -1 失败 -2 服务端接口有问题
 * @apiSuccess (200) {String} date   周几
 * @apiSuccess (200) {String} msg    签到奖励 描述 现在还没也有确定
 * @apiSuccess (200) {String} weekSign    该星期签到情况
 * @apiSuccessExample {json} 签到成功
 {
     "result": 0,
     "date": 5,
     "msg": "签到成功",
     "weekSign": [
         {
             "week": 1
         },
         {
             "week": 2
         },
         {
             "week": 5
         }
     ]
 }
 @apiSuccessExample {json} 签到失败
 验证码发送失败
 {
     "result": -1,
     "date": 1,
     "msg": "重复签到"
 }
 */
/**
 * @api {POST} tn.ykplay.com/user/getGold 每日用户领取金币
 * @apiGroup Users
 * @apiVersion 0.0.1
 * @apiDescription 用于每日用户领取金币
 * @apiParam {String} id  用户id
 * @apiParamExample {json} 请求样例：
 *                id=123
 * @apiSuccess (200) {String} result  0 正确 -1 失败 -2 服务端接口有问题
 * @apiSuccess (200) {String} msg    签到成功

 * @apiSuccessExample {json} 领取成功
 {
     "result": 0,
     "msg": "领取每日奖励成功"
 }
 @apiSuccessExample {json} 签到失败
 验证码发送失败
 {
     "result": -1,
     "msg": "重复领取每日奖励"
 }
 */
/**
 * @api {POST} tn.ykplay.com/user/login 用户登陆
 * @apiGroup Users
 * @apiVersion 0.0.1
 * @apiDescription 用于用户登陆
 * @apiParam {String} code  从微信服务器获取到的code
 * @apiParamExample {json} 请求样例：
 *                code=123
 * @apiSuccess (200) {String} result   0 正确 -1 失败 -2 服务端接口有问题
 * @apiSuccess (200) {String} msg    登陆成功


 */
/**
 * @api {POST} tn.ykplay.com/game/PayString 购买绳子
 * @apiGroup Game
 * @apiVersion 0.0.1
 * @apiDescription 用于购买绳子
 * @apiParam {String} id  用户id
 * @apiParam {String} stringCount  绳子数量
 * @apiParamExample {json} 请求样例：
 *                id=1370127&stringCount=3
 * @apiSuccess (200) {String} result   0 正确 -1 失败 -2 服务端接口有问题
 * @apiSuccess (200) {String} msg  购买成功、失败
 * @apiSuccess (200) {String} stringCount  成功购买数量

 * @apiSuccessExample {json} 购买成功
 {
     "result": 0,
     "msg": "购买成功",
     "stringCount": "2"
 }
 @apiSuccessExample {json} 购买失败
 {
     "result": -1,
     "msg": "金币不足"
 }
 */

/**
 * @api {POST} tn.ykplay.com/game/gameOver 游戏结算接口
 * @apiGroup Game
 * @apiVersion 0.0.1
 * @apiDescription 用于游戏结算
 * @apiParam {String} id  用户id
 * @apiParam {String} getGold  获得金币数量
 * @apiParam {String} getRedPacket  获得红包金额
 * @apiParam {String} getIntegral  获得积分
 * @apiParamExample {json} 请求样例：
 *                id=1370127&getGold=3&getRedPacket=2&getIntegral=80
 * @apiSuccess (200) {String} result   0 正确 -1 失败 -2 服务端接口有问题
 * @apiSuccess (200) {String} msg  用户结算完之后个人信息


 * @apiSuccessExample {json} 成功提交
 {
     "result": 0,
     "msg": {
         "id": 1,
         "gold": 2366,
         "redPacket": 76,
         "integral": 4674,
         "grade": 5,
         "suffer": 3600
     }
 }
 @apiSuccessExample {json} 失败提交
 {
     "result": -1,
     "msg": "缺少参数getRedPacket"
 }
 */

/**
 * @api {POST} tn.ykplay.com/game/Tack 提交任务
 * @apiGroup Game
 * @apiVersion 0.0.1
 * @apiDescription 用于提交任务
 * @apiParam {String} id  用户id
 * @apiParam {String} customsType  任务类型 videoCount 观看视频任务 shareCount 分享任务 grade 升级任务
 * @apiParamExample {json} 请求样例：
 *                id=1370127&customsType=shareCount
 * @apiSuccess (200) {String} result   0 正确 -1 失败 -2 服务端接口有问题
 * @apiSuccess (200) {String} msg   customsTask 任务进度 userCustoms2 当前任务信息


 * @apiSuccessExample {json} 成功提交
 {
     "result": 0,
     "msg": {
         "customsTask": {
             "videoCount": 3,
             "shareCount": 3,
             "grade": 5
         },
         "userCustoms2": {
             "videoCount": 0,
             "shareCount": 0,
             "grade": 10
         },
         "customs": 1
     }
 }
 @apiSuccessExample {json} 失败提交
 {
     "result": -1,
     "msg": "缺少参数customsType"
 }
 */

/**
 * @api {POST} tn.ykplay.com/game/selectPrize 查看可兑换奖品
 * @apiGroup Game
 * @apiVersion 0.0.1
 * @apiDescription 查看可兑换奖品
 * @apiSuccess (200) {String} result   0 正确 -1 失败 -2 服务端接口有问题
 * @apiSuccess (200) {String} msg   商品具体信息


 * @apiSuccessExample {json} 成功提交
 {
     "result": 0,
     "msg": [
         {
             "pid": 1,
             "name": "苹果x",
             "msg": "有刘海的苹果",
             "img": "test",
             "integral": 1000
         },
         {
             "pid": 2,
             "name": "充电宝",
             "msg": "超级充电宝",
             "img": "test",
             "integral": 800
         },
         {
             "pid": 3,
             "name": "蓝牙耳机",
             "msg": "价值80元的蓝牙耳机",
             "img": "test",
             "integral": 800
         },
         {
             "pid": 4,
             "name": "话费50元",
             "msg": "充话费不送东西",
             "img": "test",
             "integral": 500
         },
         {
             "pid": 5,
             "name": "幸运盒子",
             "msg": "价值30幸运盒子",
             "img": "test",
             "integral": 300
         }
     ]
 }

 */

/**
 * @api {POST} tn.ykplay.com/game/prize 兑换商品
 * @apiGroup Game
 * @apiVersion 0.0.1
 * @apiDescription 兑换商品
 * @apiParam {String} id  用户id
 * @apiParam {String} pid  商品id
 * @apiParam {String} name  收件人姓名
 * @apiParam {String} number  用户电话
 * @apiParam {String} site  用户地址
 * @apiParamExample {json} 请求样例：
 *                id=1370127&name=123&pid=2&number=432&site=555
 * @apiSuccess (200) {String} result   0 正确 -1 失败 -2 服务端接口有问题
 * @apiSuccess (200) {String} msg    信息


 * @apiSuccessExample {json} 成功提交
 {
     "result": 0,
     "msg": "兑换成功"
 }
 @apiSuccessExample {json} 失败提交
 {
     "result": -1,
     "msg": "积分不足"
 }
 */
/**
 * @api {POST} tn.ykplay.com/game/getProfit 观看视频增加利润接口
 * @apiGroup Game
 * @apiVersion 0.0.1
 * @apiDescription 观看视频增加利润接口
 * @apiParam {String} id  用户id
 * @apiParamExample {json} 请求样例：
 *                id=1370127
 * @apiSuccess (200) {String} result   0 正确 -1 失败 -2 服务端接口有问题
 * @apiSuccess (200) {String} msg    信息


 * @apiSuccessExample {json} 成功提交
 {
      result : 0,
      msg : `成功`
 }
 @apiSuccessExample {json} 失败提交
 {
      result : -1,
      msg : `服务端观看视频增加利润接口出错`
 }
 */

/**
 * @api {POST} tn.ykplay.com/game/judgeGame 判断是否该关卡红包总额以及能否套中接口
 * @apiGroup Game
 * @apiVersion 0.0.1
 * @apiDescription 判断是否该关卡红包总额以及能否套中接口
 * @apiParam {String} id  用户id
 * @apiParam {String} customs  关卡
 * @apiParamExample {json} 请求样例：
 *                id=1370127&customs=1
 * @apiSuccess (200) {String} result   0 正确 -1 失败 -2 服务端接口有问题
 * @apiSuccess (200) {String} msg    信息 redPacket 红包总额 ，integral积分总额 ，redPacketCount红包个数 ，Gold金币 ，judegeRedPacket是否能套中红包牛，judegeIntegral是否能套中积分牛


 * @apiSuccessExample {json} 成功提交
 {
     "result": 0,
     "msg": {
         "redPacket": 0.1,
         "integral": 350,
         "redPacketCount": 1,
         "Gold": 350,
         "judegeRedPacket": false,
         "judegeIntegral": false
     }
 }
 @apiSuccessExample {json} 失败提交
 {
      result : -1,
      msg : `服务端判断是否该关卡红包总额以及能否套中接口出错`
 }
 */