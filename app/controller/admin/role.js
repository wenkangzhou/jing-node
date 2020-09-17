'use strict';

const BaseController = require('./base')

class RoleController extends BaseController {
  async index() {
    const dbRes = await this.ctx.model.Role.find({})
    let roleList = []
    dbRes.map((el,index)=> {
      roleList.push({
        title: el.title,
        description: el.description,
        _id: el._id
      })
    })
    this.ctx.body = roleList
  }
  async add() {
    const { title, description, status } = this.ctx.request.body
    const dbRes = await this.ctx.model.Role.find({ title })
    if (dbRes.length > 0) {
      this.ctx.response.status = 404
      let errMsg = await this.service.tools.errInfo(102)
      await this.error(errMsg)
    } else {
      let newRole = new this.ctx.model.Role({ title, description, status })
      await newRole.save()
      await this.success(null)
    }
  }
}
module.exports = RoleController;
