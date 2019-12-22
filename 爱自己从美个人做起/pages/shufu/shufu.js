Page({

 
  data: {
    opacity: 0.4,
    disabled: true,
    threshold: 33,
    threshold1: 25,
    threshold2: 21,
    threshold3: 18,
    threshold4: 13,
    threshold5: 5,
    threshold6: 0,
    ab: '上衣',
    ac: '下装',
    ad: '外套',
    ae: '小物件',
    a: 0
  },

  onLoad: function () {

    var theBaiDuAPPkey = "Nmz29bmQRtuQeO4FG7VM8G3DG0HKCfC3" //百度的AK, 此处要替换为你自己的APPKey

    //调用百度天气API
    wx.request({
      url: 'https://api.map.baidu.com/telematics/v3/weather?location=%E5%8C%97%E4%BA%AC&output=json&ak=' + theBaiDuAPPkey, //百度天气API

      success: (res) => {
        console.log(`APPKey: ${theBaiDuAPPkey}`, res.data)
        // 利用正则字符串从百度天气API的返回数据中截出今天的温度数据
        try {
          var str = res.data.results[0].weather_data[0].date;
          var tmp1 = str.match(/实时.+/);
          var tmp2 = tmp1[0].substring(3, tmp1[0].length - 2);
          var tmp = +tmp2;
        } catch (e) {
          throw new Error(e)
        }
        this.setData({
          a: `${tmp}`
        })
        if (tmp > this.data.threshold) {
          this.setData({
            ab: '薄型T恤衫or敞领短袖棉衫',
            ac: '短裤or短裙 靓丽清爽',
            ad: '不用穿外套的~',
            ae: '记得带手机、钥匙和包包哦~'
          })
        }
        //规则为低于门限报警，于是不报警
        else if (tmp > this.data.threshold1) {
          this.setData({
            ab: 'T恤&衬衫 阳光帅气',
            ac: '薄长裙or单裤',
            ad: '不用穿外套的~',
            ae: '记得带手机、钥匙和包包哦~'
          })
        }
        else if (tmp > this.data.threshold2) {
          this.setData({
            ab: '薄型棉衫or长袖衬衫or休闲服 舒适休闲',
            ac: '薄牛仔裤or单层薄衫裤 帅气凉爽',
            ad: '不用穿外套的~',
            ae: '记得带手机、钥匙和包包哦~'
          })
        }
        else if (tmp > this.data.threshold3) {
          this.setData({
            ab: '薄型棉衫or针织长袖衫or长袖T恤 美丽优雅',
            ac: '长裤or单层薄衫裤or牛仔衫裤 帅气潇洒',
            ad: '靓仔必备 薄型夹克',
            ae: '记得带手机、钥匙和包包哦~'
          })
        }
        else if (tmp > this.data.threshold4) {
          this.setData({
            ab: '羊毛衫or夹克衫or马甲衬衫',
            ac: '长裤',
            ad: '穿上西服套装你就是街上最靓的仔',
            ae: '记得带手机、钥匙和包包哦~'
          })
        }
        else if (tmp > this.data.threshold4) {
          this.setData({
            ab: '羊毛衫or毛套装or防寒服or毛衣',
            ac: '长裤+秋裤 完美的搭配',
            ad: '大衣or风衣or皮夹克 帅气温暖',
            ae: '记得带手机、钥匙和包包哦~'
          })
        }
        else if (tmp > this.data.threshold4) {
          this.setData({
            ab: '羊毛衫or毛套装or防寒服or毛衣 暖暖的很贴心',
            ac: '长裤+秋裤 完美的搭配',
            ad: '靓仔必备 薄棉衣or薄羽绒服or皮夹克',
            ae: '记得带手机、钥匙和包包哦~'
          })
        }
        else {
          this.setData({
            ab: '美美的毛衣or羊毛衫很暖和的',
            ac: '小仙女也要记得穿棉裤或绒裤哦',
            ad: '棉衣/羽绒服/皮夹克/冬大衣帮我们抵挡寒冷',
            ae: '冬天必备 呢帽&手套'
          })
        }
      },
      fail: function (res) {
        console.log("请求失败", res)
      }
    })
  },
})