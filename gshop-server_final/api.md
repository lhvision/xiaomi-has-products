## 1. 用户名密码登陆
### 请求URL:
```
http://localhost:5000/login
```
### 请求方式:
```
POST
```
### 参数类型
```
|参数		|是否必选 |类型     |说明
|name       |Y       |string   |用户名
|pwd        |Y       |string   |密码
```

### 返回示例
```
{
    "code": 0,
    "data": {
        "_id": "5defcb238b71ab39d8966057",
        "name": "5858",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZWZjYjIzOGI3MWFiMzlkODk2NjA1NyIsImlhdCI6MTU3NTk5NjI1NywiZXhwIjoxNTc2MDgyNjU3fQ.jcbyLMxRSnMkFX9fchFQ_D0R1FIsjuhpE6UEESMi4zw"
    }
}
```
## 2.获取商品详情
### 请求URL:
```
http://localhost:5000/shops
```
### 请求方式:
```
GET
```
### 参数类型
```
|参数		|是否必选 |类型     |说明

```

### 返回示例
```
"code": 0,
    "data": [
        {
            "slideshow_images": [
                "https://img.youpin.mi-img.com/youpinoper/cbb6d51f7eea487dbf6a9562de130c60.jpg?id=&w=1080&h=450",
                "https://img.youpin.mi-img.com/youpinoper/7b51338a9676bf72daff57f731a868a0.jpg?id=&w=1080&h=450",
                "https://img.youpin.mi-img.com/youpinoper/a9ddbaf9114f03ac7493321a51bd63e7.jpg?id=&w=1080&h=450",
                "https://img.youpin.mi-img.com/youpinoper/b9d0b5044a4846be8718f9e2ca50a403.jpg?id=&w=1080&h=450",
                "https://img.youpin.mi-img.com/youpinoper/07ebd15bd5625c7f9670ae45a78d75d2.jpg?id=&w=1080&h=450"
            ]
        },
```
# 3.注册
### 请求URL:
```
http://localhost:5000/register
```
### 请求方式:
```
POST
```
### 参数类型
```
|参数		|是否必选 |类型     |说明
|name       |Y       |string   |用户名
|pwd        |Y       |string   |密码
```

### 返回示例
```
{
    "code": 1,
    "msg": "用户名已存在!"
}
```
# 4.商品详情接口
### 请求URL:
```
http://localhost:5000/details
```
### 请求方式:
```
GET
```
### 参数类型
```
|参数		|是否必选 |类型     |说明

```
### 返回示例
```

```
# 5.自动登录
### 请求URL:
```
http://localhost:5000/auto_login
```
### 请求方式:
```
GET
```
### 特殊标识
```
 headers: {
    needToken: true // 标识: 需要携带token
  }
```
### 参数类型
```
|参数		|是否必选 |类型     |说明

```
### 返回示例
```

```
