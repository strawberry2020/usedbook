var request = require("../../utils/request.js"); //require引入
var api = require("../../utils/api.js");
var util = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select_image_url: ''
  },

  select_pic_action() {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths[0]);
        // request.sendPost(api.upload_book, {
        //     'upload': tempFilePaths[0]
        //   })
        //   .then((res) => {
        //     console.log(res);
        //   })
        wx.showLoading({
          title: '上传中',
        })
        wx.uploadFile({
          url: api.upload_book, //开发者服务器的 url
          filePath: tempFilePaths[0], // 要上传文件资源的路径 String类型！！！
          name: 'upload', // 文件对应的 key ,(后台接口规定的关于图片的请求参数)
          header: {
            'content-type': 'multipart/form-data'
          }, // 设置请求的 header
          success: function (res) {
            console.log(res);
            wx.showToast({
              title: '上传成功',
              icon: 'success',
              duration: 2000
            })
          },
          fail: function (res) {}
        })

        that.setData({
          select_image_url: tempFilePaths[0]
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // request.sendPost(api.insert_book, {
    //     'book_name': '毛泽东选集1',
    //     'author': '毛泽东',
    //     'publish_year': '2011',
    //     'price': '100',
    //     'user': '17695564750'
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
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