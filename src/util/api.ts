import http from './http'

export function getTree(data) {
  return http.get('33460/getTree', data)
}
