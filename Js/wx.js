/*qin 20190227 微信分享
0、引入微信的JS-SDKhttp://res.wx.qq.com/open/js/jweixin-1.2.0.js、http://res.wx.qq.com/open/js/jweixin-1.0.0.js
1、请求分享签名，并传入wx.config方法
2、wx.ready处理处理函数中，调用相应的事件处理函数wx.xxx并传入参数
3、传入title、desc、link、imgUrl
*/
var config = require('../../../config/sy3.0'),
  apihost = process.env.NODE_ENV === 'production' ? config.api_production : config.api_dev;
function cfg(title, desc, link, imgUrl, sign) {
    //type 判断是否需要调用分享的时候监听点击分享与否
    //初始化配置信息
    //wx_config(signPackage.appId, signPackage.timestamp, signPackage.nonceStr, signPackage.signature,);
    wx.config({
        debug: false, //调试阶段建议开启
        appId: sign.appId,
        timestamp: sign.timestamp,
        nonceStr:sign.nonceStr,
        signature: sign.signature,
        jsApiList: [
            "chooseImage",
            "previewImage",
            "uploadImage",
            "downloadImage",
            "onMenuShareTimeline",
            "onMenuShareAppMessage",
            "onMenuShareQQ",
            "onMenuShareQZone",
            "hideMenuItems"
        ]
    });
    //微信加载完后调用
    /*wx.checkJsApi({
      jsApiList: ['onMenuShareAppMessage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
      success: function(res) {
        // 以键值对的形式返回，可用的api值true，不可用为false
        // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
        console.log(JSON.stringify(res));
      }
    });*/
    var arg={title:title,desc:desc,link:link,imgUrl};
    console.log(123,arg)
    wx.ready(function() {
        wx.hideMenuItems({
            menuList: ["menuItem:favorite"], // 隐藏微信收藏按钮
            success: function(res) {}
        });
        if (location.pathname.indexOf('fightIng') !== -1) {
            wx.hideMenuItems({
                menuList: ["menuItem:share:timeline"], // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
                success: function(res) {}
            });
        }
        if(location.pathname.indexOf('mine') !== -1 && type.type != 3){//判断是否是 个人中心页面 yzy 2018/12/10
            console.log("隐藏了")
            wx.hideAllNonBaseMenuItem();//隐藏所有非基础按钮接口yzy 2018/12/10
            wx.hideMenuItems({
                /*  发送给朋友: "menuItem:share:appMessage"
                    分享到朋友圈: "menuItem:share:timeline"
                    分享到QQ: "menuItem:share:qq"
                    分享到Weibo: "menuItem:share:weiboApp"
                    收藏: "menuItem:favorite"
                    分享到FB: "menuItem:share:facebook"
                    分享到 QQ 空间/menuItem:share:QZone
                    编辑标签: "menuItem:editTag"
                    删除: "menuItem:delete"
                    复制链接: "menuItem:copyUrl"
                    原网页: "menuItem:originPage"
                    阅读模式: "menuItem:readMode"
                    在QQ浏览器中打开: "menuItem:openWithQQBrowser"
                    在Safari中打开: "menuItem:openWithSafari"
                    邮件: "menuItem:share:email"
                    一些特殊公众号: "menuItem:share:brand"
                 */
                menuList: ["menuItem:readMode", "menuItem:openWithSafari","menuItem:openWithQQBrowser","menuItem:share:email", "menuItem:share:brand","menuItem:share:appMessage","menuItem:share:timeline","menuItem:share:qq", "menuItem:share:weiboApp","menuItem:favorite", "menuItem:share:facebook","menuItem:share:QZone"], // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
                success: function(res) {}
            });
        }
        wx.onMenuShareTimeline({ //分享朋友圈
            title: title, // 分享标题
            link: link, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function(res) {
                // _app.syJsbAlert(res.toString())
            },
            trigger:function(){//监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。
                //app.addShare(type);
            },
            cancel: function() {}
        });
        wx.onMenuShareAppMessage({ //分享朋友
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接
            imgUrl: imgUrl, // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function(res) {
                // _app.syJsbAlert(res.toString())
            },
            trigger:function(){//监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。
                // app.addShare(type);
            },
            cancel: function() {}
        });
        wx.onMenuShareQQ({ //分享到QQ
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function(res) {
                // 用户确认分享后执行的回调函数
            },
            cancel: function() {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareQZone({ //分享到QQ空间
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function(res) {
                // 用户确认分享后执行的回调函数
            },
            cancel: function() {
                // 用户取消分享后执行的回调函数
            }
        });

    });
    wx.error(function(res) {
        console.log(res)
    })
}
function share(a) {
    C.ajax('get',apihost + '/user-center/wxApi/share?url=' + encodeURIComponent(window.location.href),null,function(o){
        o = JSON.parse(o);
        cfg(a.title, a.desc, a.link, a.imgUrl, o.content);
    })
}
export default share