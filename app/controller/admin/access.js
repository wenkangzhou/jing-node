'use strict';

const BaseController = require('./base')

class AccessController extends BaseController {
  async index() {
    // 1、在access表中找出  module_id=0的数据 
    // 2、让access表和access表关联    条件：找出access表中  module_id等于_id的数据
    const accessList = await this.ctx.model.Access.aggregate([
      {
        $lookup: {
          from: 'access',
          localField: '_id',
          foreignField: 'module_id',
          as: 'items'
        }
      }, {
        $match: {
          "module_id": "0"
        }
      }
    ])
    this.success(accessList)
  }
  async add() {
    let {
      module_name,
      action_name,
      type,
      url,
      module_id,
      sort,
      description,
      status
    } = this.ctx.request.body
    const dbRes =await this.ctx.model.Access.find({ module_name })
    if (dbRes.length > 0) {
      this.ctx.response.status = 404
      let errMsg = await this.service.tools.errInfo(102)
      await this.error(errMsg)
    } else {
      // 顶级模块的module_id = 0； 菜单或操作的module_id调用mongoose里面的方法把字符串转换成ObjectId
      if (module_id !== "0") {
        module_id = this.app.mongoose.Types.ObjectId(module_id);
      }
      // 创建新权限
      let newAccess = new this.ctx.model.Access({
        module_name,
        action_name,
        type,
        url,
        module_id,
        sort,
        description,
        status
      })
      newAccess.save()
      await this.success(null)
    }
  }
}

module.exports = AccessController;
