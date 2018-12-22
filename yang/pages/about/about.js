Page({
  data:({
    pass:0,
    animationData:{}
  }),
    surprise:function(){
    var that=this
    var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
      })
      that.animation = animation
      animation.scale(0.5, 0.3).rotate(360).step().scale(1, 1).step().rotate(180).step().rotate(180).scale(0.1, 0.1).step().rotate(360).scale(0.8, 0.8).step()

      this.setData({
        animationData: animation.export()
      })

    },
    tapName: function () {

      
    var that = this
    var password = that.data.pass
    if (password == "123") {
      console.log(password)
      wx.switchTab({
        url: '../guanli/tongjitu/tongjitu',
      })
    }
    else {
      wx.showModal({
        title: '密码错误',
        content: '请输入正确密码',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  },
  change: function (e) {
    this.setData({
      pass: e.detail.value,

    })
    console.log(this.data.pass)
  },
  onLoad: function (options) {
    this.surprise()
  }

})

    











