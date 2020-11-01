Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner_images:['../../images/icon_pink.png',
    '../../images/icon_pink.png',
    '../../images/icon_pink.png'],
    imageURL:'/images/icon_pink.png',
    book_array:[{'title':'商品标题','desc':'商品描述','price':'2.00','imgurl':'/images/icon_pink.png'},
    {'title':'商品标题','desc':'商品描述','price':'2.00','imgurl':'/images/icon_pink.png'},
    {'title':'商品标题','desc':'商品描述','price':'2.00','imgurl':'/images/icon_pink.png'},
    {'title':'商品标题','desc':'商品描述','price':'2.00','imgurl':'/images/icon_pink.png'},
    {'title':'商品标题','desc':'商品描述','price':'2.00','imgurl':'/images/icon_pink.png'},
    {'title':'商品标题','desc':'商品描述','price':'2.00','imgurl':'/images/icon_pink.png'}]
  },
  van_card_action(){
    wx.navigateTo({
      url: 'book_detail'
    })
  },
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