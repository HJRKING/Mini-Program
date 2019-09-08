// components/my-com2/my-com2.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
          title:{
            type:String,
            value:"NULL",
            observer:function(newVal,old){
              console.log(newVal+" "+old+"\n")
            }
          }
  },
  externalClasses:["titleclass"]
  
})
