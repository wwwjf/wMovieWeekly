// pages/detail/detail.wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var mid = options.id
    var position = options.position
    wx.showNavigationBarLoading("loading")
    console.log("===onload:mid="+mid+",position="+position)
    var app = getApp()
    console.log(app.globalData.weeklyMovieList)
    var length=app.globalData.weeklyMovieList.length
    var movie = app.globalData.weeklyMovieList[position]
    wx.showLoading({
      title: String(mid),
      mask:true
    })
    setTimeout(() => {
      wx.hideLoading();
    }, 3000);
    this.setData({
      mid:mid,
      movie:movie,
    })

    wx.request({
      url: 'https://u.nu/api.php?action=shorturl&format=json&url=https://www.baidu.com/&keyword=wjf',
      success:function(res){
        console.log(res)
        wx.stopPullDownRefresh()
        wx.setNavigationBarTitle({
          title: mid,
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.hideNavigationBarLoading()
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
    setTimeout(function(){
      wx.stopPullDownRefresh()
    },1500)
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
    return{
      title:"向你推荐"+this.data.movie.name
    }
  }
})