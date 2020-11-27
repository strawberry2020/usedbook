// pages/mine/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    phone:"17695564750",
    avatarUrl:"",
    password:"123456789"
  },
  toRegister: function() {
    wx.navigateTo({
      url: 'register',
    })
  },
  getPhone: function(e) {
    this.setData({
      phone: e.detail.value
    });
  },
  getPassWord: function(e) {
    this.setData({
      password: e.detail.value
    });
  },
  loginVerify: function() {
    var that = this
    wx.request({
      url: 'http://m.bujiangwude.work:8080/ssm_war/book/findUserMessage',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        phone:this.data.phone
      },
      success: function(res) {
        console.log(JSON.stringify(res))
       if(res.data.length>0&&(res.data[0].verify_code==that.data.password)) {
         wx.showToast({
           title: '登录成功',
           duration: 1200
         })
         setTimeout(function() {
          var pages = getCurrentPages()
          var prevPage = pages[pages.length-2]
          prevPage.setData({
            userInfo:that.data.userInfo
          })
           wx.navigateBack({
             delta: 1,
           })
         },2000)
       } else {
         wx.showToast({
           title: '密码错误',
           duration: 1500
         })
       }
      },
      fail: function(res) {
        wx.showToast({
          title: '密码错误或用户未注册',
          duration: 1500
        })
      }
    })
  },
  getUserInfo: function (e) {
    // this.setData({
    //   userInfo: e.detail.userInfo
    // })
    var that =this
    var avatarUrl = e.detail.userInfo.avatarUrl
    console.log("logined:"+avatarUrl)
    wx.request({
      url: 'http://m.bujiangwude.work:8080/ssm_war/book/findUserMessage',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        phone:this.data.phone
      },
      success: function(res) {
          that.setData({
            userInfo: {
              username: res.data[0].username,
              avatarUrl: avatarUrl
            }
          })
      }
    })
    setTimeout(function() {
      console.log(that.data.userInfo)
    },3000)
  },
  // setUserInfo: function (userInfo) {
  //   if (userInfo != null) {
  //     app.globalData.userInfo = userInfo
  //     this.setData({
  //       userInfo: userInfo,
  //       hasUserInfo: true
  //     })
  //   }
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})