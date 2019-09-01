// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'world',
    students: [{
        id: 1,
        name: 'Tom',
        age: 21
      },
      {
        id: 2,
        name: 'Tom2',
        age: 22
      },
      {
        id: 3,
        name: 'Tom3',
        age: 23
      },
      {
        id: 4,
        name: 'Tom4',
        age: 24
      },
    ],
    counter: 0
  },

  handleBtnClick() {
    this.setData({
      counter: this.data.counter + 1
    })
  },

  handleBtnSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})