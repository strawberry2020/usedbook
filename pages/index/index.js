Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner_images:['https://img14.360buyimg.com/n1/jfs/t1/86782/9/3173/101135/5ddc9f32E46dab065/623a13b0a1d1bb6b.jpg',
    'https://img11.360buyimg.com/n1/jfs/t1/52767/15/4656/84430/5d258f8aE697592ca/6a00e27341bec965.jpg',
    'https://img12.360buyimg.com/n1/jfs/t7279/118/3075645481/234908/b49a48c/59b8dc1bNad0874f7.jpg'],
    imageURL:'/images/icon_pink.png',
    book_array:[{'title':'商品标题','desc':'商品描述','price':'50.00','imgurl':'https://img13.360buyimg.com/n1/jfs/t1/1732/30/16221/329082/5be1445fEc11a3e8a/10427720782900f5.jpg'},
    {'title':'商品标题','desc':'商品描述','price':'50.00','imgurl':'https://img14.360buyimg.com/n1/jfs/t1/86782/9/3173/101135/5ddc9f32E46dab065/623a13b0a1d1bb6b.jpg'},
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