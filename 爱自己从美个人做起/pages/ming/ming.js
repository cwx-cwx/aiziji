Page({
  data: {
    mapUrl: "",
  },
  onLoad: function () {
    this.setData({
      mapUrl: "https://vdse.bdstatic.com//c1e8251e03782052a709a3b32a1a18e2.mp4?authorization=bce-auth-v1%2F40f207e648424f47b2e3dfbb1014b1a5%2F2019-12-16T10%3A35%3A41Z%2F-1%2Fhost%2F101deb1d7b26e3a8d212b401463fca6b551286f291f6f130175410c24f9bb780"
  })
    this.setData({
      mapUrl1: "https://vdse.bdstatic.com/434da884d1548d3baf673c811ac4e4b1.mp4?authorization=bce-auth-v1%2Ffb297a5cc0fb434c971b8fa103e8dd7b%2F2017-05-11T09%3A02%3A31Z%2F-1%2F%2Fb3337d551ebe7deb394d33ea24783c8ea4be4fe0ef040bc5b3544fac33b2e78e"
    })
    this.setData({
      mapUrl2: "https://f.us.sinaimg.cn/002RdFablx07rQ9QYK52010412009gyl0E010.mp4?label=mp4_hd&template=852x480.28.0&Expires=1576770301&ssig=LhnqkP0cOT&KID=unistore,video"
    })
    this.setData({
      mapUrl3: "https://f.us.sinaimg.cn/004ddoQelx07fXCoQG9y01040100Pmwz0k01.mp4?label=mp4_720p&template=28&Expires=1576771089&ssig=J%2B%2B5ggAn3I&KID=unistore,video"
      })
    this.setData({
      mapUrl4: "https://f.us.sinaimg.cn/00189TM1lx07vO5uuZNS01041200kKbs0E010.mp4?label=mp4_720p&template=720x1280.24.0&trans_finger=37e3fed30081d60f956dbe10b6ff7523&Expires=1576771873&ssig=KKClh%2BbN%2Fu&KID=unistore,video"
    })
    this.setData({
      mapUrl5: "https://f.video.weibocdn.com/001mbzYvlx07yTt0E0iA01041201GjsK0E010.mp4?label=mp4_720p&template=1280x720.25.0&trans_finger=11ccc9c970f47cffd9369c72510b3033&Expires=1576771980&ssig=qXsm27af%2Fp&KID=unistore,video"
    })
    this.setData({
      mapUrl6: "https://f.video.weibocdn.com/00398SJxlx07wL0nK39m0104120184vN0E010.mp4?label=mp4_720p&template=1280x720.23.0&trans_finger=9ff95bc90ce0744bdc0ee98b663a9435&Expires=1576772173&ssig=oliIvpWIoT&KID=unistore,video"
    })

  },
  



  bu: function () {
    wx.navigateTo({
      url: '/pages/bu/bu'
    })
  },
  mei: function () {
    wx.navigateTo({
      url: '/pages/mei/mei'
    })
  },
  you: function () {
    wx.navigateTo({
      url: '/pages/you/you'
    })
  },
  hun: function () {
    wx.navigateTo({
      url: '/pages/hun/hun'
    })
  },
  min: function () {
    wx.navigateTo({
      url: '/pages/min/min'
    })
  },
    qu: function () {
      wx.navigateTo({
        url: '/pages/qu/qu'
      })
  },
})