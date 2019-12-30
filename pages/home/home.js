// pages/home/home.js

//page()函数
//  {}对象自变量

Page({
  data:{
    name:'lonmon',
    age:18,
    students:[
      { id: 110, name: 'Tomes', age: 20 },
      { id: 111, name: 'Hobby', age: 23 },
      { id: 112, name: 'Alice', age: 33 },
      { id: 113, name: 'Bob', age: 30 },
    ],
    counter:0,
  },

  handleBtnClick(){
    // false this.data.counter+=1;
    // this.setData()
    this.setData({
      counter:this.data.counter+1,
    })
  },
  handleSubtraction(){
    this.setData({
      counter: this.data.counter - 1,
    })
  }
})