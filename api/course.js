import request from "@/utils/request";
export default {
  //分页查询课程方法
  getCourseList(page,limit,searchObj) {
    return request({
      url: `/eduservice/coursefront/getFrontCourseList/${page}/${limit}`,
      method: "post",
      data:searchObj
    });
  },

  //查询所有分类方法
  getAllSubject() {
    return request({
      url: `/eduservice/subject/getAllSubject`,
      method: "get"
    });
  },


}