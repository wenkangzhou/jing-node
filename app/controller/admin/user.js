'use strict';
const BaseController = require('./base')
class UserController extends BaseController {
  async index() {
    const users = await this.ctx.model.Admin.find({})
    this.success(users)
  }
  async login() {
    const { username, password } = this.ctx.request.body
    let pwd = await this.service.tools.md5(password)
    const res = await this.ctx.model.Admin.find({ username, password: pwd })
    if (res.length > 0) {
      let { username, mobile } = res[0]
      await this.success({
        username, mobile
      })
    } else {
      this.ctx.response.status = 401
      let errMsg = await this.service.tools.errInfo(101)
      await this.error(errMsg)
    }
  }
  async add() {
    let { username, password, mobile, email, status, role_id, is_super } = this.ctx.request.body
    const dbRes = await this.ctx.model.Admin.find({ username })
    role_id = this.app.mongoose.Types.ObjectId(role_id)
    password = await this.service.tools.md5(password)

    if (dbRes.length > 0) {
      this.ctx.response.status = 404
      let errMsg = await this.service.tools.errInfo(102)
      await this.error(errMsg)
    } else {
      const newUser = new this.ctx.model.Admin({ username, password, mobile, email, status, role_id, is_super })
      newUser.save()
      await this.success(null)
    }
  }
}

module.exports = UserController;
