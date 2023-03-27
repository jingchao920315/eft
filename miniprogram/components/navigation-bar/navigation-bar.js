
const app = getApp()
Component({
    properties: {
        // defaultData（父页面传递的数据）
        title: {
            type: String,
            value: '逃离塔科夫'
        },
        showLeftToolbar: {
            type: Boolean,
            value: false
        },
        titleLeft: { // 用于调整
            type: String,
            value: '104px'
        }
    },
    data: {
        // 状态栏高度
        statusBarHeight: wx.getStorageSync('statusBarHeight') + 'px',
        // 导航栏高度
        navigationBarHeight: wx.getStorageSync('navigationBarHeight') + 'px',
        // 胶囊按钮高度
        menuButtonHeight: wx.getStorageSync('menuButtonHeight') + 'px',
        // 导航栏和状态栏高度
        navigationBarAndStatusBarHeight:
        wx.getStorageSync('statusBarHeight') +
        wx.getStorageSync('navigationBarHeight') +
        'px'
    },
    attached: function() {

    },
    methods: {
        back: function() {
            wx.navigateBack({
              delta: 1,
            })
        }
    }
})