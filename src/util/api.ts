import http from './http'

// 应用二级树
export function getTree(data) {
  return http.get('33460/getTree', data)
}

// 组织管理树
export function organizationTree(data) {
  return http.get('33585/organizationTree', data)
}

// 权限管理list
export function jurisdictionTree(data) {
  return http.get('33586/jurisdictionTree', data)
}