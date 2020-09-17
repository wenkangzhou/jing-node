'use strict';
const md5 = require('md5');
const Service = require('egg').Service;

class ToolsService extends Service {
  // md5加密
  async md5(str) {
    return md5(str)
  }
  // 错误码映射表
  async errInfo (codeNum) {
    const errList = [
      {
        code: 101,
        errMsg: '账号或密码不正确！'
      },
      {
        code: 102,
        errMsg: '数据已存在，请勿重复创建！'
      }
    ]
    let errInfo = ''
    errList.map((el,index)=> {
      if(el.code === codeNum) {
        errInfo = el
      }
    })
    return errInfo
  }
}

module.exports = ToolsService;
