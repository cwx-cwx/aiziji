const back = wx.getBackgroundAudioManager();
Page({
  backmusic: function () {
    player();
    function player() {
      back.title = "The show";
      back.src = "https://win-web-ra01-sycdn.kuwo.cn/68674fc348523b2d01814b4031b649ad/5dfbb9e3/resource/n1/22/66/235489867.mp3";
      back.onEnded(() => {
        player();
      })
    }
  },
  onLoad: function (options) {
    this.backmusic();
  },


  data: {
    aa: '请小主选择您想要的功效哦！！小的给您推产品呦！！',
    items: [
      { value: '美白', id: '美白：水密码水漾多效修护精华液、欧缇丽臻美亮白精华液 ~~~ ' },
      { value: '抗皱', id: '抗皱：Olay超A瓶、ANU焕能修护肌底精华液~~~' },
      { value: '补水保湿', id: 'ANU复活草面霜、城野医生aqua collagen gel~~~' },
      { value: '抗熊猫眼', id: '去黑眼圈：菲洛嘉雕塑360眼霜、兰蔻精华肌底眼部凝霜~~~' },
      { value: '润唇', id: '润唇：凡士林润唇膏（炒鸡适合晚上厚涂一层做唇膜！）、曼秀雷敦润唇膏~~~' },
      { value: '身体乳', id: '身体乳：标婷维生素E乳液、澳洲绵羊油身体乳 ~~~ ' },
      { value: '祛斑', id: '祛斑：Olay的PROX小白瓶、SK-Ⅱ精研祛斑精华液 ~~~ ' }
    ]
  },
  checkboxChange: function (e) {
    this.setData({
      aa: e.detail.value

    })
  }
})