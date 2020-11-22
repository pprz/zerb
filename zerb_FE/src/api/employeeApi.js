import request from '@/utils/request'

export function getEmployees(page, count) {
  return request({
    url: '/',
    method: 'get',
    params: {
      page,
      count
    }
  })
}

export function getEmployeebyId(id) {
  return request({
    url: `/${id}`,
    method: 'get'
  })
}

export function createEmployee(employee) {
  return request({
    url: '/',
    method: 'post',
    data: employee
  })
}

export function updateEmployeeById(id, employee) {
  return request({
    url: `/${id}`,
    method: 'put',
    data: employee
  })
}

export function deleteEmployeebyId(id) {
  return request({
    url: `/${id}`,
    method: 'delete'
  })
}
