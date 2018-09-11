import fetch from '@/utils/request'

export function test(params) {
  return fetch({
    url: '/getdata1',
    method: 'get',
    params
  })
}

export function test2(query) {
  return fetch({
    url: '/getdata2',
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
