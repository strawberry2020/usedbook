var request = require("../../utils/request.js"); //require引入
var api = require("../../utils/api.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner_images: ['/images/icon_banner.png',
      '/images/icon_banner.png',
      '/images/icon_banner.png'
    ],
    middleitems: [{
        'title': "计算机",
        'imageurl': '/images/icon_computer.png'
      },
      {
        'title': "电气",
        'imageurl': '/images/icon_electric.png'
      },
      {
        'title': "会计",
        'imageurl': '/images/icon_accountant.png'
      },
      {
        'title': "更多分类",
        'imageurl': '/images/icon_more.png'
      }
    ],
    imageURL: '/images/icon_pink.png',
    book_array: []
  },
  van_card_action(res) {
    wx.navigateTo({
      url: 'book_detail?book_detail=' + JSON.stringify(this.data.book_array[res.currentTarget.dataset.index])
    })
    console.log(res);
  },
  item_select_action() {
    wx.navigateTo({
      url: 'book_search'
    })
  },

  getAllBook() {
    request.sendGet(api.search_book_name, {
        'page': '1',
        'bookName': ''
      })
      .then((res) => {
        this.setData({
          book_array: res.data.reverse()
        })
        setTimeout(function () {
          wx.stopPullDownRefresh()
        }, 500);
        console.log(res.data);
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAllBook()
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
    this.getAllBook()
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