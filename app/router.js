'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  /**
   *@desc 用户登录 
   *@param { username, password }
   */
  router.post('/jing/admin/user/login', controller.admin.user.login)
  /**
   * @desc 用户列表
   */
  router.get('/jing/admin/user', controller.admin.user.index)
  /**
   * @desc: 新增用户
   * @param { username, password, mobile, email, status, role_id, is_super}
   */
  router.post('/jing/admin/user/add', controller.admin.user.add)
  /**
   * @desc 角色列表
   */
  router.get('/jing/admin/role', controller.admin.role.index)

  /**
   *@desc 新增角色 
   *@param { title, description, status }
   */
  router.post('/jing/admin/role/add', controller.admin.role.add)
  /**
   * @desc 权限列表
   */
  router.get('/jing/admin/access', controller.admin.access.index)
  /**
   * @desc 新增权限
   * @params { 
   * module_name: 模块名称,
   * action_name: 操作名称,
   * type: 节点类型 (1、表示模块 2、表示菜单 3、操作)
   * url:对应的跳转url
   * module_id: module_id= 0 表示模块 其他为ObjectID(菜单 or操作)
   * sort: 排序
   * description：描述
   * status： 状态
   * }
   */
  router.post('/jing/admin/access/add', controller.admin.access.add)
};
