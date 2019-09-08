// components/my-event/my-event.js
Component({
  /**
   * 组件的属性列表
   */
  methods: {
    click() {
      this.triggerEvent('increment',{},{})
    }
  }
})