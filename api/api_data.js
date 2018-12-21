define({ "api": [
  {
    "type": "POST",
    "url": "127.0.0.1:3001/game/gameOver",
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
    "name": "Post1270013001GameGameover"
  },
  {
    "type": "POST",
    "url": "127.0.0.1:3001/game/PayString",
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
    "name": "Post1270013001GamePaystring"
  },
  {
    "type": "POST",
    "url": "127.0.0.1:3001/game/Tack",
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
    "name": "Post1270013001GameTack"
  },
  {
    "type": "POST",
    "url": "127.0.0.1:1999/user/getGold",
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
    "name": "Post1270011999UserGetgold"
  },
  {
    "type": "POST",
    "url": "127.0.0.1:1999/user/login",
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
    "name": "Post1270011999UserLogin"
  },
  {
    "type": "POST",
    "url": "127.0.0.1:1999/user/sign",
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
            "description": "<p>签到成功</p>"
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
    "name": "Post1270011999UserSign"
  }
] });
