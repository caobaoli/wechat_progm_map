//获取应用实例
var app = getApp()
Page({
  data: {
    phonenumber: '',
    password: '',
    loadingHidden: true,
    modalHidden: true
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  },
  phonenumberInput: function (e) {
    this.setData({
      phonenumber: e.detail.value
    })
  },
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
    console.log(e.detail.value)
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 弹窗消失
  modalChange: function () {
    this.setData({
      modalHidden: true
    })
  },
  // 点击提交按钮
  loginSubmit: function (e) {
    console.log(this);
    if (this.data.phonenumber != '' && this.data.password != '') {
      if (this.data.phonenumber == 'pccw' || this.data.password == 'pccw') {
        this.setData({
          loadingHidden: false
        })

        console.log("Success");

        var that = this
        setTimeout(function () {
          that.setData({
            loadingHidden: true
          })
          wx.navigateTo({
            url: '../map/map'
          })
        }, 1000)
      } else {
        this.setData({
          modelInnerHtml: '用户名或密码错误',
          modalHidden: false
        })
      }
    } else if (this.data.phonenumber == '') {
      this.setData({
        modelInnerHtml: '账号不能为空',
        modalHidden: false
      })
    } else if (this.data.password == '') {
      this.setData({
        modelInnerHtml: '密码不能为空',
        modalHidden: false
      })

      console.log("password不能为空" + this.data.psdShow)
    } else {
      this.setData({
        modelInnerHtml: '账号密码不能为空',
        modalHidden: false
      })
    }
  },
  forword :function(e){
    wx.navigateTo({
      url: '../map/map'
    })
  }
})
