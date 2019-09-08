// pages/home/home.js
import request from '../../services/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad:function(options){

  //  this.get_data_origin()
       
       //Promise最大的好处就是防止出现回调地狱
    request({
      url:'http://123.207.32.32:8000/recommend'
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
      //2.get请求
    //get_data_origin(){
    // wx.request({
    //   //url='http://123.207.32.32:8000/recommend'
    //   url: 'http://123.207.32.32:8000/home/data',
    //   method:'get',                                                               
    //   data:{
    //     type:'sell',
    //     page:1
    //   },
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
    //}
    wx.request({
      url: 'http://httpbin.org/post',
      method:'post',
      data:{
        name:'jack',
        agr:19
      },
      success:function(res){
        console.log(res)
      }
    })
  }
   
})