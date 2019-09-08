// components/my-slots/my-slots.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  //1.监听页面的生命周期
  pageLifetimes: {
    show() {
      console.log("监听组件所在页面显示出来时")
    },
    hide() {
      console.log("监听组件所在页面隐藏起来时")
    },
    resize() {
      console.log("监听页面尺寸的改变")
    }
  },
  //2.监听组件生命周期
  lifetimes: {
    created() {
      console.log("组件被创建出来")
    },
    attached() {
      console.log("组件被添加到页面中")
    },
    ready() {
      console.log("组件被渲染出来")
    },
    moved() {
      console.log("组件被移动到另外一个节点")
    },
    dettached(){
      console.log("组件被移除")
    }
  }
})