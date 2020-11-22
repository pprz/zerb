/* eslint-disable indent */
import {
  shallowMount,
  createLocalVue
} from '@vue/test-utils'
import {
  Button,
  Row,
  Col,
  Card,
  Divider,
  Form,
  FormItem,
  Input,
  Loading,
  Message,
  Pagination
} from 'element-ui'
import Dashboard from '../index.vue'
import Header from '../../../components/Header.vue'
const localVue = createLocalVue()
localVue.use(Button)
localVue.use(Row)
localVue.use(Col)
localVue.use(Card)
localVue.use(Divider)
localVue.use(Form)
localVue.use(FormItem)
localVue.use(Input)
localVue.use(Loading)
localVue.use(Pagination)
localVue.prototype.$message = Message

it('Dashboard初始化时，employees应该为空', () => {
  const wrapper = shallowMount(Dashboard, {
    localVue
  })
  const employees = wrapper.vm.$data.employees
  expect(employees).toEqual([])
})
it('header按钮点击时，应该打开创建新员工页面', () => {
  const wrapper = shallowMount(Dashboard, {
    localVue
  })
  const header = wrapper.findComponent(Header)
  header.vm.$emit('handleCreate')
  const showCreate = wrapper.vm.$data.showCreate
  const editEmployeeID = wrapper.vm.$data.editEmployeeID
  expect(showCreate).toEqual(true)
  expect(editEmployeeID).toEqual(-1)
})

it('千分法测试，输入10000应返回10,000', () => {
      const wrapper = shallowMount(Dashboard, {
            localVue
  })
  const format = wrapper.vm.format
  expect(format('10000')).toEqual('10,000')
})
