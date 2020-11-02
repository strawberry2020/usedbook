Page({
  data: {
    isLike: false,
    // banner
    imgUrls: [
      "https://img14.360buyimg.com/n1/jfs/t1/86782/9/3173/101135/5ddc9f32E46dab065/623a13b0a1d1bb6b.jpg",
      "https://img14.360buyimg.com/n1/jfs/t1/86782/9/3173/101135/5ddc9f32E46dab065/623a13b0a1d1bb6b.jpg",
      "https://img14.360buyimg.com/n1/jfs/t1/86782/9/3173/101135/5ddc9f32E46dab065/623a13b0a1d1bb6b.jpg"
    ],
    // 商品详情介绍
    detailImg: [
      "https://img14.360buyimg.com/n1/jfs/t1/86782/9/3173/101135/5ddc9f32E46dab065/623a13b0a1d1bb6b.jpg",
      "https://img14.360buyimg.com/n1/jfs/t1/86782/9/3173/101135/5ddc9f32E46dab065/623a13b0a1d1bb6b.jpg"
    ],
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
})
