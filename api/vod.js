import request from '@/utils/request'
export default {
  //获取播放凭证
  getPlayAuth(vid) {
    return request({
      url: `/enuvod/video/getPlayAuth/`+vid,
      method: 'get'
    })
  }
}