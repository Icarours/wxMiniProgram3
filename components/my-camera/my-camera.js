// components/my-camera/my-camera.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    path: '../../assets/image/welcome.png',
    isVisible: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
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
        success: function(res) {
          console.log('previewImage---success===', res);
        },
        fail: function(res) {
          console.log('previewImage---fail===', res);
        },
        complete: function(res) {
          console.log('previewImage---complete===', res);
        },
      })
    }
  }
})