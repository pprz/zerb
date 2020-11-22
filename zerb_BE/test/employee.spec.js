import '../helper/utils/initial';
import request from 'supertest';
import {
  createApp
} from '../app/app';

describe('employee.spec.js', () => {
  let app;
  beforeAll(async () => {
    app = await createApp();
  });

  test('测试 get /v1/emplyee/0应该返回第一个员工对象', async () => {
    const response = await request(app.callback())
      .get('/v1/emplyee/1')
      .send();
    expect(response.text).toBe('{"name":"员工-0","sex":"女","age":"23","position":"开发","year":"3","salary":"6600","id":1}');
  });
});
