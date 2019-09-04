//app.js
App({
  //生命周期函数
  //小程序初始化完成时,会执行的生命周期函数
  onLaunch: function() {
    console.log("小程序初始化完成")
    wx.getUserInfo({
      success: function(res) {
        console.log(res)
      }
    })
    setTimeout(function(msg){
   
    },3000)
  },
  //小程序界面显示出来之后会执行的生命周期函数
   onShow:function(options){
     console.log("界面显示出来")
   },
   //界面被隐藏时会执行的生命周期函数
   onHide:function(){
    console.log("关闭")
   },
   //小程序发生错误是执行的生命周期函数
   onError:function(){
         console.log("小程序出现错误！！！")
   }
})