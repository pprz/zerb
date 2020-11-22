import axios from 'axios'
const service = axios.create({
  baseURL: 'http://localhost:5000/v1/emplyee',
  timeout: 5000
})

service.interceptors.response.use(
  response => {
    if (response.status === 200 || response.status === 201) {
      if (response.data) return response.data
    } else {
      return Promise.reject(new Error('请求失败'))
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
