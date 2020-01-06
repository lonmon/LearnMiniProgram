// pages/home/home.js

//page()函数             渲染层wxml，wxss 和 逻辑层js提供数据  结合 提供JS对象-->DOM树
//  {}对象自变量            webview线程       jscore
//                                    native(微信客户端)

Page({
  data: {
    message: 0
  },

  handleBtnClick() {
    this.setData({                        //通过setdata对Data产生改变，JS对象产生改变，
      message: this.data.message + 1,     //diff算法对其进行比较，差异反应在DOM树上，
    }),                                   //从而进行UI改变---数据驱动

      console.log("按钮被点击了")
  }
})
