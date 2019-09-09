//app.js
App({
  //登录操作
  onLaunch:function(){
    wx.login({
      success:function(res){
        //1.获取Code
        const code=res.code;
        wx.request({
          url: 'http://123.207.23.23"3000/login',
          data:{
            code
          }
        })
      }
    })
  }
})