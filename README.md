# jing-node

## 安装启动 MongoDB
https://www.runoob.com/mongodb/mongodb-osx-install.html

## 创建 db
```
use xxx
```
## 设置用户名、密码
```
db.createUser({user:"xxx",pwd:"xxx",roles:[{role:"userAdminAnyDatabase",db:"admin"}]})
```

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org