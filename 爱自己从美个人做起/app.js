//app.js
const back = wx.getBackgroundAudioManager();
App({
  backmusic: function () {
    player();
    function player() {
      back.title = "The show";
      back.src = "https://win-web-ra01-sycdn.kuwo.cn/aad05ad20c23d10d801282a3b0bebb95/5dfbccf5/resource/n1/22/66/235489867.mp3";
      back.onEnded(() => {
        player();
      })
    }
  },
  onLoad: function (options) {
    this.backmusic();
  },
 
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})