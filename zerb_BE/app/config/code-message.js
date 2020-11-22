/* eslint-disable space-before-function-paren */
'use strict';

module.exports = {
  codeMessage: {
    getMessage(code) {
      return this[code] || '';
    },
    0: '成功',
    1: '创建成功',
    2: '更新成功',
    3: '删除成功',
    9999: '服务器未知错误',
    10000: '未携带令牌',
    10001: '权限不足',
    10010: '授权失败',
    10011: '更新密码失败',
    10012: '请传入认证头字段',
    10013: '认证头字段解析失败',
    10020: '资源不存在',
    10021: '用户不存在',
    10022: '未找到相关书籍',
    10023: '分组不存在，无法新建用户',
    10024: '分组不存在',
    10025: '找不到相应的视图处理器',
    10026: '未找到文件',
    10027: '新建分组失败',
    10030: '参数错误',
    10031: '用户名或密码错误',
    10032: '请输入正确的密码',
    10033: '为找到符合条件的文件资源',
    10040: '令牌失效',
    10041: 'access token 损坏',
    10042: 'refresh token 损坏',
    10050: '令牌过期',
    10051: 'access token 过期',
    10052: 'refresh token 过期',
    10060: '字段重复',
    10070: '禁止操作',
    10071: '已经有用户使用了该名称，请重新输入新的用户名',
    10072: '分组名已被使用，请重新填入新的分组名',
    10073: 'root分组不可添加用户',
    10074: 'root分组不可删除',
    10075: 'guest分组不可删除',
    10076: '邮箱已被使用，请重新填入新的邮箱',
    10077: '不可将用户分配给不存在的分组',
    10078: '不可修改root用户的分组',
    10080: '请求方法不允许',
    10100: '刷新令牌获取失败',
    10110: '{name}大小不能超过{size}字节',
    10111: '总文件体积不能超过{size}字节',
    10120: '文件数量过多',
    10121: '文件太多，文件总数不可超过{num}',
    10130: '不支持类型为{ext}的文件',
    10140: '请求过于频繁，请稍后重试',
    10150: '丢失参数',
    10160: '类型错误',
    10170: '请求体不可为空',
    10180: '全部文件大小不能超过{num}',
    10190: '读取文件数据失败',
    10200: '失败',
    10210: '文件损坏，无法读取',
    10220: '没有找到相关日志',
    10230: '已有权限，不可重复添加',
    10231: '无法分配不存在的权限',
    10240: '书籍已存在',
    10250: '请使用正确类型的令牌',
    10251: '请使用正确作用域的令牌'
  }
};