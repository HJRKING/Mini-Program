// pages/test1/test1.js
Page({
  handleShowToast() {
    wx.showToast({
      title: '你好啊',
      duration: 5000,
      //icon:'loading',
      mask: true
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '我是标题',
      content: '我是内容，哈哈哈',
      success: function(res) {
        console.log(res)
        if (res.cancel) {
          console.log('No')
        }
        if (res.confirm) {
          console.log('Ok')
        }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载中....',
      mask:true,
    })
    setTimeout(()=>{
      wx.hideLoading()
    },1000)
  },
   handleShowAction(){
     wx.showActionSheet({
       itemList: ['拍照','相册'],
       itemColor:'red',
       success:function(res){
        console.log('res')
       }
     })
   }
})