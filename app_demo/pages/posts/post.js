var postsData = require('../../data/data.js')

Page({

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            postData: postsData.postData
        });
    },
    onDetail: function (event) {
        var postId = event.currentTarget.dataset.id;
        wx.navigateTo({
            url: 'post-detail/post-detail?id=' + postId,
        })
    }
})