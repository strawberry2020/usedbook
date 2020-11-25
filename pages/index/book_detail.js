Page({
  data: {
    isLike: false,
    // banner
    imgUrls: [
      "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3312528219,2139515251&fm=26&gp=0.jpg",
      "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3312528219,2139515251&fm=26&gp=0.jpg",
      "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3312528219,2139515251&fm=26&gp=0.jpg"
    ],
    // 商品详情介绍
    detailImg: [
      "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3312528219,2139515251&fm=26&gp=0.jpg",
      "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3312528219,2139515251&fm=26&gp=0.jpg"
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
    this.setData({book_detail:JSON.parse(options.book_detail)})
    console.log(JSON.parse(options.book_detail));
  }
})
