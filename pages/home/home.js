// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    path: '../../assets/image/welcome.png',
    isVisible: true
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

  },


  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log('takePhoto---success===', res);
        var path = res.tempImagePath;
        this.setData({
          path: path,
          isVisible: false
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },

  submit() {
    console.log('提交----');
  },

  retakePic() {
    console.log('重拍---');
    this.setData({
      isVisible: true
    })
  },

  preview(e) {
    console.log('preview---e===', e);
    var path = e.currentTarget.dataset.path;
    wx.previewImage({
      current: path,
      urls: [path],
      success: function (res) {
        console.log('previewImage---success===', res);
      },
      fail: function (res) {
        console.log('previewImage---fail===', res);
      },
      complete: function (res) {
        console.log('previewImage---complete===', res);
      },
    })
  }
})