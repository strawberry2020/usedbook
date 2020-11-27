// pages/mine/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'123',
    items:[{"title":"用户名"},{"title":"用户名"},{"title":"用户名"},{"title":"用户名"},{"title":"用户名"}],
    school_areas: ["轻点选择校区","安徽工业大学东校区","安徽工业大学本部","马鞍山学院"],
    colleges: ["轻点选择学院","冶金工程学院","材料科学与工程学院","化学与化工学院","机械工程学院","电气与信息工程学院","计算机科学与技术学院","建筑工程学院","能源与环境学院","管理科学与工程学院","商学院","公共管理与法学院","数理科学与工程学院","外国语学院","艺术与设计学院","马克思主义学院"],
    grades: ["轻点选择年级","大一","大二","大三","大四"],
    school_index: "0",
    colleges_index: "0",
    grades_index: "0",
    username:"0",
    phone:"0",
    password:"0"
  },
  getUserName: function(e) {
    this.setData({
      username: e.detail.value 
    })
  },
  getPhoneNumber: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  getPassWord: function(e) {
    this.setData({
      password: e.detail.value
    })
  },
  schoolPickerChange: function(e) {
    console.log('schoolpicker发送选择改变，携带值为', e.detail.value);
    this.setData({
      school_index: e.detail.value
    });
  },
  collegePickerChange: function(e) {
    console.log('collegepicker发送选择改变，携带值为', e.detail.value);
    this.setData({
      colleges_index: e.detail.value
    });
  },
  gradePickerChange: function(e) {
    console.log('gradepicker发送选择改变，携带值为', e.detail.value);
    this.setData({
      grades_index: e.detail.value
    });
  },
  commitRegister: function(e) {
    var local_username = this.data.username
    var local_phone = this.data.phone
    var local_password = this.data.password
    var local_school_area = this.data.school_areas[this.data.school_index]
    var local_college = this.data.colleges_index
    var local_grade = this.data.grades_index
    wx.request({
      url: "http://m.bujiangwude.work:8080/ssm_war/book/addUser",
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        username: local_username,
        phone_number: local_phone,
        school_area: local_school_area,
        verify_code: local_password,
        grade: local_grade,
        college: local_college,
      },success: function(res) {
        wx.showToast({
          title: '注册成功',
          duration: 1200
        })
        setTimeout(function() {
        wx.navigateBack({
          delta: 0,
        })
        },1500)
      }
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