var request = require("../../utils/request.js"); //require引入
var api = require("../../utils/api.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{'username':'立即登录'}
  },
  login_action(){
    console.log('login_action');
    wx.navigateTo({
      url: 'login'
    })
  },

  my_publish_click(){
    wx.navigateTo({
      url: 'my_publish'
    })
  },

  my_like_click(){
    wx.navigateTo({
      url: 'my_like'
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let that = this
    // request.sendGet(api.find_user, {'phone':'17695564750'})
    //   .then((res) => {
    //     console.log(res.data);
    //     if(res.data.length > 0){
    //       that.setData({username:res.data[0].phone_number})
    //     }
    //   })
  }
})