App({

  /**  关闭掉会存活2h
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // console.log('小程序初始化完成了')

    wx.getUserInfo({
      success:function(res){     //异步
        console.log(res)
      }
    }),

    setTimeout(function(){
      const err=new Error()
      throw err
    },3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('小程序显示了')    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('被隐藏了')    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('发生了错误')
  }
})
