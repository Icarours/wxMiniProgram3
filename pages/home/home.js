// pages/home/home.js
Page({

  /**
   * 初始化数据
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
    counter: 0,
    list: []
  },

  /**
   * 监听生命周期
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'https://wanandroid.com/wxarticle/chapters/json  ',
      data: {},
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/json'
      }, // 设置请求的 header
      success: (res) => {
        console.log(res)
        const data = res.data.data
        
        console.log('data---',data)
        
        this.setData({
          list: data
        })
      }
    })
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
    console.log('----onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log('----onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  //其他监听事件
  onPageScroll(obj) {
    // console.log('----onPageScroll',obj)
  },

  // 监听wxml中的相关事件
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
  handleGetUserInfo: function(event) {
    console.log('获取用户授权信息---', event)
  },
  handleView() {
    console.log('哈哈哈哈----被点击了')
  }
})