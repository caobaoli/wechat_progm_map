Page({
  data: {
    Height: 0,
    scale: 15,
    latitude: "",
    longitude: "",
    markers: [],
    controls: [],
    circles: []
  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('map')
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  onLoad: function () {
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        //设置map高度，根据当前设备宽高满屏显示
        console.log(res.windowHeight);
        _this.setData({
          view: {
            Height: res.windowHeight
          },
          controls: [{
            id: 1,
            iconPath: '../../resource/images/map/scale_minus.png',
            position: {
              left: 1,
              top: res.windowHeight - 100,
              width: 60,
              height: 60
            },
            clickable: true
          },
          {
            id: 2,
            iconPath: '../../resource/images/map/scale_add.png',
            position: {
              left: 1,
              top: res.windowHeight - 130,
              width: 60,
              height: 60
            },
            clickable: true
          },
          {
            id: 3,
            iconPath: '../../resource/images/map/location-control.png',
            position: {
              left: 15,
              top: res.windowHeight - 50,
              width: 30,
              height: 30
            },
            clickable: true
          }
          ]
        })
      }
    })
    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
  },

  regionchange(e) {
    var that = this;
    that.moveToLocation()
    console.log("regionchange===" + e.type)
  },
  //点击缩放按钮动态请求数据
  controltap(e) {
    var that = this;
    console.log("scale===" + this.data.scale)
    if (e.controlId === 1) {
      that.setData({
        scale: --this.data.scale
      })
    } else if (e.controlId === 2) {
      that.setData({
        scale: ++this.data.scale
      })
    } else {
      that.moveToLocation()
    }
  },
})