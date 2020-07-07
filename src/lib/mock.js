import Mock from 'mockjs'


export default Mock.mock('/api/userNote/hotline','get',{
    success: true,
    message: '@cparagraph',
    code:0,
    // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
    'list|1-5': [{
        // 属性 sid 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        // 属性 userId 是一个5位的随机码
        'userId|5': '',
        'image':"@dataImage('200x100')",
        // 随机3到10个中文字
        "nickName":"@ctitle(3,6)",
        "avatarUrl":"@dataImage('50x50', '头像')",
        "title":"标题：@ctitle(2,8)",
        "content":"内容：@ctitle(20，100)"
    }]
})


// {
//   "id": 264,
//   "userId": 198,
//   "nickName": "兔兔",
//   "avatarUrl": "/wxmini/book_mini/hongbaoshu/1339d2bf25b84a25a3f424ee4353d708.png",
//   "title": "回归测试0612",
//   "noteType": 2,
//   "noteCover": "/wxmini/book_mini/hongbaoshu/8b647046707c4cb39766d3701facb4ab.jpg",
//   "videoUrl": null,
//   "content": "<p>看一下能不能发笔记&nbsp; 看看看看</p><img src=\"http://test.msjk95596.com/wxmini/book_mini/hongbaoshu/7df8482725af4a6997ef7315a1f9bb1a.png\"><img src=\"http://test.msjk95596.com/wxmini/book_mini/hongbaoshu/3f2340f7aa8e4bfb9f0cbd24dc3bb0a1.png\">",
//   "status": 3,
//   "supportCount": 2,
//   "commentCount": 0,
//   "collectCount": 1,
//   "inverseCount": 2,
//   "scoreAmount": 8,
//   "aiScore": 0.0,
//   "itime": null,
//   "commentData": null
// }