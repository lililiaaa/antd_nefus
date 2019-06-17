import request from '@/utils/request';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request('http://192.168.43.245:8080/api/users/user');
}
