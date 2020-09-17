'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  async success(data={}) {
    this.ctx.body = {
      code: 0,
      msg: '操作成功',
      data: {...data}
    }
  }
  async error(errInfo) {
    this.ctx.body = {
      ...errInfo
    }
  }
}

module.exports = BaseController;
