define({ "api": [
  {
    "type": "POST",
    "url": "tn.ykplay.com/game/gameOver",
    "title": "游戏结算接口",
    "group": "Game",
    "version": "0.0.1",
    "description": "<p>用于游戏结算</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "getGold",
            "description": "<p>获得金币数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "getRedPacket",
            "description": "<p>获得红包金额</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "getIntegral",
            "description": "<p>获得积分</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "id=1370127&getGold=3&getRedPacket=2&getIntegral=80",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>0 正确 -1 失败 -2 服务端接口有问题</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>用户结算完之后个人信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功提交",
          "content": "{\n    \"result\": 0,\n    \"msg\": {\n        \"id\": 1,\n        \"gold\": 2366,\n        \"redPacket\": 76,\n        \"integral\": 4674,\n        \"grade\": 5,\n        \"suffer\": 3600\n    }\n}",
          "type": "json"
        },
        {
          "title": "失败提交",
          "content": "{\n    \"result\": -1,\n    \"msg\": \"缺少参数getRedPacket\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/apidoc.js",
    "groupTitle": "Game",
    "name": "PostTnYkplayComGameGameover"
  },
  {
    "type": "POST",
    "url": "tn.ykplay.com/game/getProfit",
    "title": "观看视频增加利润接口",
    "group": "Game",
    "version": "0.0.1",
    "description": "<p>观看视频增加利润接口</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "id=1370127",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>0 正确 -1 失败 -2 服务端接口有问题</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功提交",
          "content": "{\n     result : 0,\n     msg : `成功`\n}",
          "type": "json"
        },
        {
          "title": "失败提交",
          "content": "{\n     result : -1,\n     msg : `服务端观看视频增加利润接口出错`\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/apidoc.js",
    "groupTitle": "Game",
    "name": "PostTnYkplayComGameGetprofit"
  },
  {
    "type": "POST",
    "url": "tn.ykplay.com/game/judgeGame",
    "title": "判断是否该关卡红包总额以及能否套中接口",
    "group": "Game",
    "version": "0.0.1",
    "description": "<p>判断是否该关卡红包总额以及能否套中接口</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customs",
            "description": "<p>关卡</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "id=1370127&customs=1",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>0 正确 -1 失败 -2 服务端接口有问题</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息 redPacket 红包总额 ，integral积分总额 ，redPacketCount红包个数 ，Gold金币 ，judegeRedPacket是否能套中红包牛，judegeIntegral是否能套中积分牛</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功提交",
          "content": "{\n    \"result\": 0,\n    \"msg\": {\n        \"redPacket\": 0.1,\n        \"integral\": 350,\n        \"redPacketCount\": 1,\n        \"Gold\": 350,\n        \"judegeRedPacket\": false,\n        \"judegeIntegral\": false\n    }\n}",
          "type": "json"
        },
        {
          "title": "失败提交",
          "content": "{\n     result : -1,\n     msg : `服务端判断是否该关卡红包总额以及能否套中接口出错`\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/apidoc.js",
    "groupTitle": "Game",
    "name": "PostTnYkplayComGameJudgegame"
  },
  {
    "type": "POST",
    "url": "tn.ykplay.com/game/PayString",
    "title": "购买绳子",
    "group": "Game",
    "version": "0.0.1",
    "description": "<p>用于购买绳子</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stringCount",
            "description": "<p>绳子数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "id=1370127&stringCount=3",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>0 正确 -1 失败 -2 服务端接口有问题</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>购买成功、失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "stringCount",
            "description": "<p>成功购买数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "购买成功",
          "content": "{\n    \"result\": 0,\n    \"msg\": \"购买成功\",\n    \"stringCount\": \"2\"\n}",
          "type": "json"
        },
        {
          "title": "购买失败",
          "content": "{\n    \"result\": -1,\n    \"msg\": \"金币不足\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/apidoc.js",
    "groupTitle": "Game",
    "name": "PostTnYkplayComGamePaystring"
  },
  {
    "type": "POST",
    "url": "tn.ykplay.com/game/prize",
    "title": "兑换商品",
    "group": "Game",
    "version": "0.0.1",
    "description": "<p>兑换商品</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pid",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>收件人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>用户电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "site",
            "description": "<p>用户地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "id=1370127&name=123&pid=2&number=432&site=555",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>0 正确 -1 失败 -2 服务端接口有问题</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功提交",
          "content": "{\n    \"result\": 0,\n    \"msg\": \"兑换成功\"\n}",
          "type": "json"
        },
        {
          "title": "失败提交",
          "content": "{\n    \"result\": -1,\n    \"msg\": \"积分不足\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/apidoc.js",
    "groupTitle": "Game",
    "name": "PostTnYkplayComGamePrize"
  },
  {
    "type": "POST",
    "url": "tn.ykplay.com/game/selectPrize",
    "title": "查看可兑换奖品",
    "group": "Game",
    "version": "0.0.1",
    "description": "<p>查看可兑换奖品</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>0 正确 -1 失败 -2 服务端接口有问题</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>商品具体信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功提交",
          "content": "{\n    \"result\": 0,\n    \"msg\": [\n        {\n            \"pid\": 1,\n            \"name\": \"苹果x\",\n            \"msg\": \"有刘海的苹果\",\n            \"img\": \"test\",\n            \"integral\": 1000\n        },\n        {\n            \"pid\": 2,\n            \"name\": \"充电宝\",\n            \"msg\": \"超级充电宝\",\n            \"img\": \"test\",\n            \"integral\": 800\n        },\n        {\n            \"pid\": 3,\n            \"name\": \"蓝牙耳机\",\n            \"msg\": \"价值80元的蓝牙耳机\",\n            \"img\": \"test\",\n            \"integral\": 800\n        },\n        {\n            \"pid\": 4,\n            \"name\": \"话费50元\",\n            \"msg\": \"充话费不送东西\",\n            \"img\": \"test\",\n            \"integral\": 500\n        },\n        {\n            \"pid\": 5,\n            \"name\": \"幸运盒子\",\n            \"msg\": \"价值30幸运盒子\",\n            \"img\": \"test\",\n            \"integral\": 300\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/apidoc.js",
    "groupTitle": "Game",
    "name": "PostTnYkplayComGameSelectprize"
  },
  {
    "type": "POST",
    "url": "tn.ykplay.com/game/Tack",
    "title": "提交任务",
    "group": "Game",
    "version": "0.0.1",
    "description": "<p>用于提交任务</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customsType",
            "description": "<p>任务类型 videoCount 观看视频任务 shareCount 分享任务 grade 升级任务</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "id=1370127&customsType=shareCount",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>0 正确 -1 失败 -2 服务端接口有问题</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>customsTask 任务进度 userCustoms2 当前任务信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功提交",
          "content": "{\n    \"result\": 0,\n    \"msg\": {\n        \"customsTask\": {\n            \"videoCount\": 3,\n            \"shareCount\": 3,\n            \"grade\": 5\n        },\n        \"userCustoms2\": {\n            \"videoCount\": 0,\n            \"shareCount\": 0,\n            \"grade\": 10\n        },\n        \"customs\": 1\n    }\n}",
          "type": "json"
        },
        {
          "title": "失败提交",
          "content": "{\n    \"result\": -1,\n    \"msg\": \"缺少参数customsType\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/apidoc.js",
    "groupTitle": "Game",
    "name": "PostTnYkplayComGameTack"
  },
  {
    "type": "POST",
    "url": "tn.ykplay.com/user/getGold",
    "title": "每日用户领取金币",
    "group": "Users",
    "version": "0.0.1",
    "description": "<p>用于每日用户领取金币</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "id=123",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>0 正确 -1 失败 -2 服务端接口有问题</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>签到成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "领取成功",
          "content": "{\n    \"result\": 0,\n    \"msg\": \"领取每日奖励成功\"\n}",
          "type": "json"
        },
        {
          "title": "签到失败",
          "content": "验证码发送失败\n{\n    \"result\": -1,\n    \"msg\": \"重复领取每日奖励\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/apidoc.js",
    "groupTitle": "Users",
    "name": "PostTnYkplayComUserGetgold"
  },
  {
    "type": "POST",
    "url": "tn.ykplay.com/user/login",
    "title": "用户登陆",
    "group": "Users",
    "version": "0.0.1",
    "description": "<p>用于用户登陆</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>从微信服务器获取到的code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "code=123",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>0 正确 -1 失败 -2 服务端接口有问题</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>登陆成功</p>"
          }
        ]
      }
    },
    "filename": "myapp/apidoc.js",
    "groupTitle": "Users",
    "name": "PostTnYkplayComUserLogin"
  },
  {
    "type": "POST",
    "url": "tn.ykplay.com/user/sign",
    "title": "用户签到",
    "group": "Users",
    "version": "0.0.1",
    "description": "<p>用于用户签到</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "id=123",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>0 正确 -1 失败 -2 服务端接口有问题</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>周几</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>签到奖励 描述 现在还没也有确定</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "weekSign",
            "description": "<p>该星期签到情况</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "签到成功",
          "content": "{\n    \"result\": 0,\n    \"date\": 5,\n    \"msg\": \"签到成功\",\n    \"weekSign\": [\n        {\n            \"week\": 1\n        },\n        {\n            \"week\": 2\n        },\n        {\n            \"week\": 5\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "签到失败",
          "content": "验证码发送失败\n{\n    \"result\": -1,\n    \"date\": 1,\n    \"msg\": \"重复签到\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/apidoc.js",
    "groupTitle": "Users",
    "name": "PostTnYkplayComUserSign"
  }
] });
