// pages/Image/Image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:''
  },
  select() {
    wx.chooseImage({
      success: (res)=> {
        const path=res.tempFilePaths[0]
        console.log(path)
        this.setData({
          imagePath:path
        })
      },
      
    })
  }
})