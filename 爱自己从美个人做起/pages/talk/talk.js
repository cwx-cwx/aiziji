// miniprogram/pages/talk/talk.js

var Num = Math.floor(Math.random() * 10)
Page({

  /**
  * 页面的初始数据
  */
  data: {
    eee: [
      '../../pages/images/0.jpg',
      '../../pages/images/1.jpg',

      '../../pages/images/2.jpg',

      '../../pages/images/3.jpg',

      '../../pages/images/4.jpg',

      '../../pages/images/5.jpg',

      '../../pages/images/6.jpg',

      '../../pages/images/7.jpg',

      '../../pages/images/8.jpg',
      '../../pages/images/9.jpg'
    ],
    Num: Num
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {

  },

  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {

  },

  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {

  },

  /**
  * 生命周期函数--监听页面隐藏
  */
  onHide: function () {

  },

  /**
  * 生命周期函数--监听页面卸载
  */
  onUnload: function () {

  },

  /**
  * 页面相关事件处理函数--监听用户下拉动作
  */
  onPullDownRefresh: function () {

  },

  /**
  * 页面上拉触底事件的处理函数
  */
  onReachBottom: function () {

  },

  /**
  * 用户点击右上角分享
  */
  onShareAppMessage: function (options) {
    var randomImg = simg[Math.floor(Math.random() * simg.length)];
    console.log(url)
  }
})