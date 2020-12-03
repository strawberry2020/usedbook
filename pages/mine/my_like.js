var request = require("../../utils/request.js"); //require引入
var api = require("../../utils/api.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book_array: [
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request.sendGet(api.find_user_like, {'page':'1','user':'17695564750'})
      .then((res) => {
        this.setData({book_array:res.data.reverse()})
      })
  },
  van_card_action(res) {
    wx.navigateTo({
      url: '../index/book_detail?book_detail=' + JSON.stringify(this.data.book_array[res.currentTarget.dataset.index])
    })
    console.log(res);
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