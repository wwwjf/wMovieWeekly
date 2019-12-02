Page({

  /**
   * 页面的初始数据
   */
  data: {
    thisWeekMovie:{
      name:"《教父》",
      comment:"最精彩的剧本，最真实的黑帮电影",
      imagePath:"/images/jf.jpg",
      isHighlyRecommended:true
    },
    weeklyMovieList: [
      {
        id:77,
        name: "《泰坦尼克号》",
        comment: "失去的才是永恒的",
        imagePath: "/images/titanic.jpg",
        isHighlyRecommended: false,
      },
      {
        id: 88,
        name: "《这个杀手不太冷》",
        comment: "小萝莉与怪蜀黍纯真灿烂的爱情故事",
        imagePath: "/images/leon.jpg",
        isHighlyRecommended: false,
      },
      {
        id: 99,
        name: "《教父》",
        comment: "最精彩的剧本，最真实的黑帮电影。",
        imagePath: "/images/jf.jpg",
        isHighlyRecommended: true,
      }
    ],
    count:0,
    currentIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentIndex:this.data.weeklyMovieList.length-1,
    })
  },

  f0:function(event){
    console.log("==="+this.data.count)
    // this.data.count = this.data.count+1
    this.setData({
      count:this.data.count+1,
      "weeklyMovieList[2].name":"《教父3》",
      currentIndex:this.data.weeklyMovieList.length-1,
    })
  },

  f1:function(event){
    var mid = event.currentTarget.dataset.movieId
    console.log("----movieId:"+mid)
    wx.navigateTo({
      url: '/pages/detail/detail?id='+mid
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})