/** @format */

import request from '@/utils/request'

export function test(params) {
  return request({
    url: '/test', //接口路径
    method: 'POST',
    ...params,
  })
}
