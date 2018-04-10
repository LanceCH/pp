import http from './http'

export function login(data) {
  return http.get('url', data)
}
