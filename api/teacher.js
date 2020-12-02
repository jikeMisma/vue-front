import request from "@/utils/request";
export default {
  //分页讲师查询方法
  getTeachetList(page,limit) {
    return request({
      url: `/eduservice/teacherfront/getTeacherList/${page}/${limit}`,
      method: "post"
    });
  },

  //讲师详情方法
  getTeacherInfo(id) {
    return request({
      url: `/eduservice/teacherfront/getTeacherFrontInfo/`+id,
      method: "get"
    });
  },


}