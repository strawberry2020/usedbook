Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner_images:['/images/首页/轮播.png',
    '/images/首页/轮播.png',
    '/images/首页/轮播.png'],
    middleitems:[{'title':"计算机",'imageurl':'/images/首页/计算机.png'},
    {'title':"电气",'imageurl':'/images/首页/电气.png'},
    {'title':"会计",'imageurl':'/images/首页/会计.png'},
    {'title':"更多分类",'imageurl':'/images/首页/更多分类.png'}],
    imageURL:'/images/icon_pink.png',
    book_array:[{'title':'JAVA从入门到精通','desc':'描述商品描述商品描述商品描述商品描述商述商品描','price':'50.00','imgurl':'https://img13.360buyimg.com/n1/jfs/t1/1732/30/16221/329082/5be1445fEc11a3e8a/10427720782900f5.jpg'},
    {'title':'商品标题','desc':'商品描述描述商品描述','price':'50.00','imgurl':'https://img14.360buyimg.com/n1/jfs/t1/86782/9/3173/101135/5ddc9f32E46dab065/623a13b0a1d1bb6b.jpg'},
    {'title':'商品标题','desc':'商品描述','price':'50.00','imgurl':'https://img13.360buyimg.com/n1/jfs/t1/1732/30/16221/329082/5be1445fEc11a3e8a/10427720782900f5.jpg'},
    {'title':'商品标题','desc':'商品描述','price':'50.00','imgurl':'https://img13.360buyimg.com/n1/jfs/t1/1732/30/16221/329082/5be1445fEc11a3e8a/10427720782900f5.jpg'},
    {'title':'商品标题','desc':'商品描述','price':'50.00','imgurl':'https://img13.360buyimg.com/n1/jfs/t1/1732/30/16221/329082/5be1445fEc11a3e8a/10427720782900f5.jpg'},
    {'title':'商品标题','desc':'商品描述','price':'50.00','imgurl':'https://img13.360buyimg.com/n1/jfs/t1/1732/30/16221/329082/5be1445fEc11a3e8a/10427720782900f5.jpg'}]
  },
  van_card_action(){
    wx.navigateTo({
      url: 'book_detail'
    })
  },
  item_select_action(){
    wx.navigateTo({
      url: 'book_search'
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