Page({
  data: {
    isLike: false,
    // banner
    imgUrls: [
      
    ],
    // 商品详情介绍
    detailImg: [
      
    ],
    book_detail:{}
  },
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;

    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },
  // 收藏
  addLike() {
    this.setData({
      isLike: !this.data.isLike
    });
  },
  // 立即购买
  immeBuy() {
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let book_detail = JSON.parse(options.book_detail)
    let images = []
    images.push(book_detail.photo_url_1)
    images.push(book_detail.photo_url_2)
    images.push(book_detail.photo_url_3)
    this.setData({book_detail,imgUrls:images,detailImg:images})
    console.log(JSON.parse(options.book_detail));
  }
})
