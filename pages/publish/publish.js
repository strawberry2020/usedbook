var request = require("../../utils/request.js"); //require引入
var api = require("../../utils/api.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList: [],
    book_name: '',
    book_price: '',
    publisher: ''
  },
  deleteImage(event) {
    console.log(event);
    let index = event.detail.index
    let {
      fileList
    } = this.data;
    fileList.splice(index, 1);
    this.setData({
      fileList
    })
  },
  afterRead(event) {
    let that = this
    const {
      file
    } = event.detail;
    console.log('file', file);
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.showLoading({
      title: '上传中',
    })
    for (let index = 0; index < file.length; index++) {
      const item = file[index];
      wx.uploadFile({
        url: api.upload_book, // 仅为示例，非真实的接口地址
        filePath: item.url,
        name: 'upload',
        success(res) {
          // 上传完成需要更新 fileList
          const {
            fileList = []
          } = that.data;
          fileList.push({
            url: res.data
          });
          console.log('res', res);
          that.setData({
            fileList
          });
          wx.showToast({
            title: '上传成功',
            icon: 'success',
            duration: 1000
          })
        },
      });
    }
  },
  publishClick() {
    let {
      book_name,
      book_price,
      publisher,
      fileList
    } = this.data
    request.sendPost(api.insert_book, {
        'book_name': book_name,
        'author': '',
        'publish_year': '',
        'publisher': publisher,
        'photo_url_1': fileList.length > 0 ? fileList[0].url : '',
        'photo_url_2': fileList.length > 1 ? fileList[1].url : '',
        'photo_url_3': fileList.length > 2 ? fileList[2].url : '',
        'price': book_price,
        'original_price': '',
        'classification': '',
        'college': '',
        'isbn': '',
        'user': '17695564750',
        'status': '',
        'quantity': '',
        'grade': '',
        'school_area': '',
      })
      .then((res) => {
        console.log(res);
        this.setData({
          fileList: [],
          book_name: '',
          book_price: '',
          publisher: ''
        });
        wx.showToast({
          title: '发布成功',
          icon: 'success',
          duration: 1000
        })
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
    //     'photo_url_1': '',
    //     'photo_url_2': '',
    //     'photo_url_3': '',
    //     'price': '100',
    //     'original_price': '',
    //     'classification': '',
    //     'college': '',
    //     'isbn':'',
    //     'user': '17695564750',
    //     'status': '',
    //     'quantity': '',
    //     'grade': '',
    //     'school_area': '',
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