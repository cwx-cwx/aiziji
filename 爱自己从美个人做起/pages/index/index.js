const back = wx.getBackgroundAudioManager();

Page({
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

  data:{
    count:0
  },
  ganpi: function () {
    wx.navigateTo({
      url:'/pages/ganpi/ganpi'
    })},
  youpi:function() {
      wx.navigateTo({
        url:'/pages/youpi/youpi'
      })
    },

  hunyoupi: function () {
    wx.navigateTo({
      url: '/pages/hunyoupi/hunyoupi'
    })
  },

  zhongji: function () {
    wx.navigateTo({
      url: '/pages/hunyoupi/hunyoupi'
    })
  },
  minganji: function () {
    wx.navigateTo({
      url: '/pages/minganji/minganji'
    })
  },
  
})


