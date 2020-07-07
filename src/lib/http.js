import api from './api.js'
import axios  from 'axios'



//封装wx的请求
class Http {
  constructor() {
    //设置可能需要的公共请求头    
    // this._headers = wx.getStorageSync("bookToken") || {}
  }

  //统一的网络请求
  request(url, data, method, ) {
    let _this = this
    return new Promise((resolve, reject) => {
      axios({
        method: method,
        url: url,
        data: data
      }).then(res => {
         console.log('res',res)
        resolve(res.data)
      })
      .catch((e) => {
        console.log('e',e)
        reject(e)
      })
    })
  }

  //post请求
  post(url, data, page) {
    let pageInfo = ``
    if (page) {
      for (var k in page) {
        if(page[k] !== ''){
          pageInfo += `/${page[k]}`
        }
      }
    }
    return this.request(`${api[url]}${pageInfo}`, data, "POST")
  }

  //get请求
  get(url, data, page) {
    let pageInfo = ``
    if (page) {
      for (var k in page) {
        if(page[k] !== ''){
          pageInfo += `/${page[k]}`
        }
      }
    }
    return this.request(`${api[url]}${pageInfo}`, data, "GET")
  }

}
let http = new Http()


export default  http 