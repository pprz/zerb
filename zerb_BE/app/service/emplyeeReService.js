import axios from 'axios';
const request = axios.create({
  baseURL: 'http://localhost:3002/employee'
});

const createError = (code, resp) => {
  const err = new Error(resp.message);
  err.code = code;
  return err;
};

const handleRequest = ({
  status,
  data,
  ...rest
}) => {
  if (status === 201 || status === 200) {
    if (rest.headers['x-total-count']) {
      return {
        data,
        totalCount: rest.headers['x-total-count']
      };
    }
    return data;
  } else {
    throw createError(status, rest);
  }
};

export default () => {
  return {
    async get(id) {
      return handleRequest(await request.get(`/${id}`));
    },
    async getAll(offset, limit) {
      return handleRequest(await request.get(`?_start=${offset}&_limit=${limit}`));
    },
    async add(emplyee) {
      return handleRequest(await request.post('/', emplyee));
    },
    async update(id, emplyee) {
      return handleRequest(await request.put(`/${id}`, emplyee));
    },
    async delete(id) {
      return handleRequest(await request.delete(`/${id}`));
    }
  };
};