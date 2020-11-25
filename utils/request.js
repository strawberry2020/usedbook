var _header = {
  "Content-Type": "application/json"
}
//get请求
function sendGet(url, data = {}) {
  var header = this._header = {
    "Content-Type": "application/json"
  }
  return sendRequest(url, data, header, 'GET')
}
//post请求
function sendPost(url, data = {}) {
  var header = this._header = {
    "Content-Type": "application/x-www-form-urlencoded"
  }
  return sendRequest(url, data, header, 'POST')
}
//网络请求的工具类
function sendRequest(url, data = {}, header = this._heade, method = 'get') {
  console.log("url::" + url + data + header);
  wx.showLoading({
    title: '加载中',
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: data,
      method: method,
      header: header,
      dataType: 'json', //默认也是json的，这里可以改成其他的
      success: function (res) {
        console.log("success");
        if (res.statusCode === 200) {
          //200: 服务端业务处理正常结束
          resolve(res)
        } else {
          reject(res)
        }
      },
      fail: function (res) {
        reject(res)

      },complete:function (res) {
        wx.hideLoading()

      }
    })
  })
}
//这里暴露两个方法就行了
module.exports = {
  sendGet,
  sendPost,
}