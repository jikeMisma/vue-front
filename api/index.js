import request from '@/utils/request'
export default {
  //查询热门课程
  getIndexCourse() {
    return request({
      url: `/eduservice/indexFront/getIndexCourse`,
      method: 'get'
    })
  },

    //查询热门课程
    getIndexTeacher() {
      return request({
        url: `/eduservice/indexFront/getIndexTeacher`,
        method: 'get'
      })
    }
}