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

// 部门列表
export function getDept(data) {
  return http.get('/33724/getDept', data)
} 
// 根据部门获取人员
export function getPerson(data) {
  return http.get('/33724/getPerson', data)
}

// 获取家庭信息
export function getFamily(data) {
  return http.get('/33724/getFamily', data)
}