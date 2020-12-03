var request = require("../../utils/request.js"); //require引入
var api = require("../../utils/api.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 页面总高度将会放在这里
    windowHeight: 0,
    // navbar的高度
    navbarHeight: 0,
    // header的高度
    headerHeight: 0,
    // scroll-view的高度
    scrollViewHeight: 0,
    campus: [
      { text: '校区', value: 0 },
      { text: '佳山校区', value: 1 },
      { text: '秀山校区', value: 2 },
    ],
    academy: [
      { text: '学院', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' },
    ],
    grade: [
      { text: '年级', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' },
    ],
    major: [
      { text: '专业', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' },
    ],
    campus_value: 0,
    academy_value: 'a',
    grade_value: 'a',
    major_value: 'a',
    book_array:[]
  },

  onSearch(res){
    request.sendGet(api.search_book_name, {'page':'1','bookName':res.detail})
      .then((res) => {
        this.setData({book_array:res.data.reverse()})
        console.log(res.data);
      })
  },
  van_card_action(res) {
    wx.navigateTo({
      url: 'book_detail?book_detail=' + JSON.stringify(this.data.book_array[res.currentTarget.dataset.index])
    })
    console.log(res);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 先取出页面高度 windowHeight
    wx.getSystemInfo({
      success: function(res) {
          that.setData({
              windowHeight: res.windowHeight
          });
      }
  });

  // 然后取出navbar和header的高度
  // 根据文档，先创建一个SelectorQuery对象实例
  let query = wx.createSelectorQuery().in(this);
  // 然后逐个取出navbar和header的节点信息
  // 选择器的语法与jQuery语法相同
  query.select('.van-search').boundingClientRect();
  query.select('.van-dropdown-menu').boundingClientRect();

  // 执行上面所指定的请求，结果会按照顺序存放于一个数组中，在callback的第一个参数中返回
  query.exec((res) => {
      // 分别取出navbar和header的高度
      let navbarHeight = res[0].height;
      let headerHeight = res[1].height;

      // 然后就是做个减法
      let scrollViewHeight = this.data.windowHeight - navbarHeight - headerHeight;

      // 算出来之后存到data对象里面
      this.setData({
          scrollViewHeight: scrollViewHeight
      });
  });
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