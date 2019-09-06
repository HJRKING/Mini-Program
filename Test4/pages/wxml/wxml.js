// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "Jack",
    age: 20,
    nowtime: new Date().toLocaleString(),
    isAction: false,
    isShow: true
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowtime: new Date().toLocaleString()
      })
    }, 1000)
  },
  changeColor() {
    this.setData({
      isAction: !this.data.isAction
    })
  },
  changeShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  }
})