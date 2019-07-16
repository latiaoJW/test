# test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

MongoDB 操作指令
``` bash

## 创建一个名为xxx的数据库并且切换到xxx数据库
$ use xxx  

## 在当前数据库中创建一个user表
$ db.createCollection('user')  

## 删除数据库 -> 当前
$ db.dropDatabase() 

## 同时创建集合与插入数据（可以跳过上面db.createCollection('user')的步骤）
$ use newDatabase

## 上面一步switch到了newDatabase
$ db.user.insert({id: 123, name: 'Ewall'}) 

## 查看集合
$ show collections

## 删除集合
$ db.user.drop()

## 删
$ db.user.remove({"这里填入要删除的条件"}) -> $ db.user.remove({"id": 2})

## 改
## 第一个{}里面填要更新的条件，第二个{}是更新的内容
$ db.user.update({},{$set:{}}) -> db.user.update({"id": 123},{$set:{"name": "hellow world"}})

## 查 以user表为例
$ db.user.find()
## 格式化显示
$ db.user.find().pretty()

## 查看第一条数据
$ db.user.findOne()

##查找大于、小于、等于等数据操作
## 大于
$ db.user.find({"age": {$gt:3}})

## 小于
$ db.user.find({"age": {$lt:3}})

## 等于
$ db.user.find({"age":{$eq:3}})

## 大于且等于
$ db.user.find({"age": {$gte:3}})

## 安装mongoose
$ npm install mongoose



