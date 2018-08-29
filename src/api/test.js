import fetch from '@/utils/request'

export function test(params) {
  return fetch({
    url: '/example/1535529586979',
    method: 'get',
    params
  })
}

export function test2(query) {
  return fetch({
    url: '/example/1535529625132',
    method: 'get',
    params: query
  })
}

export function postData(data) {
  return fetch({
    url: '/postdata',
    method: 'post',
    data
  })
}