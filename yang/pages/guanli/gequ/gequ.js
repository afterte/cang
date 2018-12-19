Page({

  data: {
    gequ:0,
    animation:'',
    gequxuanze:[
      {
        name: "歌曲1",
        imagePath:"../../../image/1.png"
      },
      {
        name:"歌曲2",
        imagePath:"../../../image/2.png"
      }
    ]

    },

  onReady: function () {
    // 页面渲染完成
    //实例化一个动画
    this.animation = wx.createAnimation({
      duration: 1000, // 动画持续时间为1000ms
      timingFunction: 'linear', //动画效果
      delay: 100, // 延迟多长时间开始
      transformOrigin: '50% 50% 0',  //设置基点为图片中心
      success: function (res) {
        console.log(res)
      }
    })
  },

  
    abv: function () {
      this.setData({
        animation: this.animation.export()
      })
      var n = 0;
      //连续动画需要添加定时器,所传参数每次+1
      setInterval(function () {
        // animation.translateY(-60).step()
        n = n + 1;
        console.log(n);
        this.animation.rotate(15 * (n)).step()  //每次旋转15度
        this.setData({
          animation: this.animation.export()
        })
      }.bind(this), 1000)
  },


    qrs:function(){
      wx.navigateTo({
        url: '../../qrss/qrss',
      })

    },
  
  tapName: function () {
    if(this.data.gequxuanze)
    wx.request({
      url: 'https://api.heclouds.com/devices/503070381/datapoints',
      header: {
        'content-type': 'application/json',
        'api-key': 'MZr0v3LIS3Sl4rg5TDEy1D1rjrA='
      },
      method: "POST",
      data: {

        "datastreams": [

          {

            "id": "gequ", //数据流名称或数据流模板名称

            "datapoints": [

              {
                "value": this.data.gequ  //上传数据点值
              },
            ]

          }]
      }
    })
  },
  gequplay:function(){
    this.gequplay = wx.createVideoContext(myvideo, this)
    
  },
  

   


  
})
