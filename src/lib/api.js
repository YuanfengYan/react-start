const baseurl = ""
const api={
  userNoteHotline:'/api/userNote/hotline',//笔记列表
  tagList:`/api/tag/list`,//笔记类别
}
for (var k in api) {
  api[k] = baseurl + api[k]
}
export default api