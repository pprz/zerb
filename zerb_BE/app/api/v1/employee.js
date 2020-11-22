import {
  LinRouter,
  NotFound,
  disableLoading
} from 'lin-mizar';
import {
  PositiveIdValidator,
  CreateOrUpdateValidator,
  PaginateValidator
} from '../../validator/common';

import {
  getSafeParamId
} from '../../../helper/utils/utils';

const emplyeeApi = new LinRouter({
  prefix: '/v1/emplyee'
});

emplyeeApi.get('/:id', async ctx => {
  const v = await new PositiveIdValidator().validate(ctx);
  const id = v.get('path.id');
  const emplyee = await ctx.emplyeeService.get(id);
  if (!emplyee) {
    throw new NotFound({
      msg: '没有找到相关员工'
    });
  }
  ctx.json(emplyee);
});

emplyeeApi.get('/', async ctx => {
  const v = await new PaginateValidator().validate(ctx);
  const page = v.get('query.page');
  const count = v.get('query.count');
  const encusor = (page - 1) * count;
  const emplyees = await ctx.emplyeeService.getAll(encusor, count);
  if (emplyees.data.length === 0) {
    throw new NotFound({
      msg: '没有找到相关员工'
    });
  }
  ctx.json(emplyees);
});

emplyeeApi.post('/', async ctx => {
  const v = await new CreateOrUpdateValidator().validate(ctx);
  await ctx.emplyeeService.add(v.get('body'));
  ctx.success({
    msg: '新建员工成功',
    errorCode: 10
  });
});

emplyeeApi.put('/:id', async ctx => {
  const v = await new CreateOrUpdateValidator().validate(ctx);
  const id = getSafeParamId(ctx);
  await ctx.emplyeeService.update(id, v.get('body'));
  ctx.success({
    msg: '更新员工成功',
    errorCode: 11
  });
});

emplyeeApi.delete('/:id', async ctx => {
  const v = await new PositiveIdValidator().validate(ctx);
  const id = v.get('path.id');
  await ctx.emplyeeService.delete(id);
  ctx.success({
    msg: '删除员工成功',
    errorCode: 12
  });
});

module.exports = {
  emplyeeApi,
  [disableLoading]: false
};