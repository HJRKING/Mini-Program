// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clothes: [
      "裤子", "衣服", "外套"
    ],
    count: 0
  },
  ItemcClick(event) {
    //console.log(event)
    const dataset = event.currentTarget.dataset
    const index = dataset.index
    const item = dataset.item
    console.log(index + " " + item)
  },
  cview1() {
    console.log("cview1")
  },
  cview2() {
    console.log("cview2")
  },
  cview3() {
    console.log("cview3")
  },
  bview1() {
    console.log("bview1")
  },
  bview2() {
    console.log("bview2")
  },
  bview3() {
    console.log("bview3")
  },
  click() {
    this.setData({
      count: this.data.count + 1
    })
  },
  itemclick(event){
  const index=event.detail.index
   console.log(index)
  },
  updateData(){
  // 获取class用.,获取id用#
    const mysel = this.selectComponent('#count')
     
    //  mysel.setData({
    //     count:mysel.data.count+1
    //  })

    mysel.updateData(10)
  }
})