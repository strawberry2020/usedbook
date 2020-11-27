//获取应用实例
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    avatarUrl:"",
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  login_action(){
    console.log('login_action');
    wx.navigateTo({
      url: 'login'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (app.globalData.userInfo) {
      that.setUserInfo(app.globalData.userInfo);
    } else if (that.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        that.setUserInfo(res.userInfo);
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          that.setUserInfo(res.userInfo);
        }
      })
    }

  },
  onShow: function () {
    var pages = getCurrentPages()
    var currPage = pages[pages.length-1]
    var localUserInfo = currPage.data.userInfo
    if(localUserInfo!=undefined) {
      this.setData({
        username: localUserInfo.username,
        avatarUrl: localUserInfo.avatarUrl,
        hasUserInfo:true
      })
    }
    console.log("onshow:"+this.data.username+this.data.avatarUrl)
  },
  // getUserInfo: function (e) {
  //   this.setUserInfo(e.detail.userInfo);
  // },

  // setUserInfo: function (userInfo) {
  //   if (userInfo != null) {
  //     app.globalData.userInfo = userInfo
  //     this.setData({
  //       userInfo: userInfo,
  //       hasUserInfo: true
  //     })
  //   }
  // }
})