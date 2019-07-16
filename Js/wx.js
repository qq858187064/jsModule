//var config = require('../../../config/sy3.0'),
 // apihost = process.env.NODE_ENV === 'production' ? config.api_production : config.api_dev;

var ws = {
    /*登录： 
    0、判断用户是否登录、token是否有效，如果在微信环境，且未登录或token失效
1、用户同意授权，获取code
2、获取微信用户信息
3、验证是否绑定过,已经绑定的账号调登录，未绑定则跳转到微信绑定页
4、非created、mounted等事件中的调用，需要在页面事件中加入：beforeCreate(){ if(C.param('code'))  wx.authorize();},

    */
    //1、用户同意授权，获取code
    authorize: function (cb, appid) {
        var appid = appid || config.appId,
          code = C.param('code'),
          path = localStorage.getItem('tu') || (location.pathname + location.search.replace(/code=\w+&/, "")),//跳转微信授权页地址,localStorage.getItem('tu')|| tu是用户想去而因未授权而不能去的path
          codes = sessionStorage.getItem('codes');
        /*
        if(cb)
        sessionStorage.setItem("wxlgcb",cb)*/
        if (!code)//||sessionStorage.getItem('cd')
        {
            window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid
              + '&redirect_uri=' + location.origin + path + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';
        }
        else {
            //
            if (!codes || codes && codes.indexOf(code) == -1)//code been used qin
            {
                //2、获取微信用户信息
                //if(sessionStorage.getItem('usd')) 
                C.EXHR(function (r) {
                    /*
                    if(r.message.indexOf("code been used")>-1)
                    {
                      //C.setParam('code','');
                      alert("code been used"+"else中code："+code+"_"+codes);
                      sessionStorage.setItem('cd', 1);
                      wx.authorize();
                      sessionStorage.removeItem("cd");
                    } 
                    */
                    sessionStorage.setItem('codes', '')
                    if (r && r.code == 200) {
                        //wxType参数是/user-center/usr/checkWxReg接口需要, loginType: "wx_login",  inviteCode: ""
                        var p = {
                            wxOpenId: r.content.openid,
                            wxUnionId: r.content.unionid,
                            nickname: r.content.nickname,
                            sex: r.content.sex,
                            headimgurl: r.content.headimgurl,
                            wxType: "wx_pub",
                            loginType: "wx_login",//code_login, pwd_login, wx_login, invite_login。四种种登录方式，对应验证码登录，密码登录，微信登录，邀请登录
                        };
                        //3、验证是否绑定过,已经绑定的账号调登录，未绑定则跳转到微信绑定页
                        if (r.content) {
                            C.EXHR(function (res) {

                                //alert('111'+res.code+res.content+(typeof res.content))
                                if (res.code == 200) {//4、绑定过的登录
                                    /*var cfg = {
                                      //可以写所有接口共用的config 配置,服务端要求设置该头，20181214服务端又不要了
                                      headers: {
                                          "Content-type": "application/x-www-form-urlencoded",
                                          platform: C.from().env == 1 ? "wx" : "h5"
                                      }
                                  };
                                  p.headers=cfg.headers;*/
                                    p.where = path;
                                    if (res.content) {
                                        wx.login(p)
                                    }
                                    else {
                                        // bridge.appOpen("weChartLogin", p)
                                        //var url = window.location.pathname.substring(1) + window.location.search;+
                                        location.href = location.origin + '/weChartLogin' + '?wxOpenId=' + p.wxOpenId
                                          + '&wxUnionId=' + p.wxUnionId
                                          + '&nickname=' + p.nickname
                                          + '&inviteCode=' + p.inviteCode
                                          + '&wxType=' + p.wxType + '&where=' + p.where;
                                        // this.appOpen("weChartLogin", p);
                                    }
                                }
                            },
                              "GET", apihost + "/user-center/usr/checkWxReg"
                              + '?wxOpenId=' + p.wxOpenId
                              + '&wxUnionId=' + p.wxUnionId
                              + '&wxType=' + "wx_pub"
                            );
                        }
                    }
                },
                  'GET', apihost + '/user-center/wxApi/userInfo?code=' + code
                );
                sessionStorage.setItem('codes', code);
            }
        }
    },
    login: function (p) {
        var fd = new FormData();
        fd.append('wxOpenId', p.wxOpenId);
        fd.append('wxUnionId', p.wxUnionId);
        fd.append('nickname', p.nickname);
        fd.append('gender', p.sex);
        fd.append('headimgurl', p.headimgurl);
        fd.append('wxType', p.wxType);
        fd.append('loginType', p.loginType);
        if (p.mobile) {
            fd.append('mobile', p.mobile);
            fd.append('appId', config.appId);
            fd.append('mcode', p.mcode);
            fd.append('avatar', p.avatar);
            fd.append('inviteCode', p.inviteCode);
            fd.append('source', p.source);
            // fd.append('gender', p.sex);
            // fd.append('sex', p.gender);
        }
        //platform: "H5",
        /*
              inviteCode: this.inviteCode,
              platform: "H5",
      */
        C.ajax("POST", apihost + "/user-center/auth/login", fd, function (res) {
            res = JSON.parse(res);
            // if(!cb)
            //var cb= window.wxcb 
            if (res)
                if (res.code == 200) {
                    cookie('token', res.content.userToken);
                    cookie('token', res.content.userToken, 1, '/', '.17shanyuan.com');
                    localStorage.removeItem('tu');
                    //syJsbStoreToken(res.content.userToken); 此处多余 qin
                    //cookie('token', res.content.userToken,1,'/');
                    //cb(res);
                    //location.reload();
                    //this.tokenChange = this.token; //token 监听变化
                    // this.needFresh = 123;
                    if (!p.where) {
                        p.where = C.param('where');
                        p.where = p.where ? decodeURIComponent(p.where) : '/downLoad?where=' + (res.content.isRegister ? 'register' : 'alerdyRegister');
                    }
                    //location.replace(p.where);
                    /*   var cb=C.param('callback');
             if(cb)
             window.backPath=decodeURIComponent(cb)*/
                    if (localStorage.getItem('tu') && localStorage.getItem('history').indexOf('%2Fmine') > -1) {
                        p.where = localStorage.getItem('tu');
                        localStorage.removeItem('tu');
                    }
                    location.href = p.where;
                }
                else if (res.code == 431) {
                    alert("该手机号已绑定其他微信账号，请到APP解绑");
                } else if (res.code == 432) {
                    alert("当前微信已被其他用户绑定，请到APP解绑");
                }
                else {
                    alert(res.message)
                }
        });
    },
    /*分享：
    必须先进入微信分享sdk:
    import wx from 'weixin-js-sdk'//http://res.wx.qq.com/open/js/jweixin-1.0.0.js
    */
    cfg: function (title, desc, link, imgUrl, sign) {
        var arg = {
            title: title, desc: desc, link: link, imgUrl: imgUrl,
            success: function (res) { },
            trigger: function () { },//监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。
            cancel: function () { }
        };
        //type 判断是否需要调用分享的时候监听点击分享与否
        //初始化配置信息
        //wx_config(signPackage.appId, signPackage.timestamp, signPackage.nonceStr, signPackage.signature,);
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: sign[0],//.appId,// 必填，公众号的唯一标识
            timestamp: sign[1],//.timestamp,// 必填，生成签名的时间戳
            nonceStr: sign[2],//.nonceStr,// 必填，生成签名的随机串
            signature: sign[3],//.signature,// 必填，签名
            jsApiList: [// 必填，需要使用的JS接口列表
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

        wx.ready(function () {
            wx.hideMenuItems({
                menuList: ["menuItem:favorite"], // 隐藏微信收藏按钮
                success: function (res) { }
            });
            if (location.pathname.indexOf('fightIng') !== -1) {
                wx.hideMenuItems({
                    menuList: ["menuItem:share:timeline"], // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
                    success: function (res) { }
                });
            }
            /*
            if (location.pathname.indexOf('mine') !== -1 && type.type != 3) {//判断是否是 个人中心页面 yzy 2018/12/10
                console.log("隐藏了")
                wx.hideAllNonBaseMenuItem();//隐藏所有非基础按钮接口yzy 2018/12/10
                wx.hideMenuItems({
                    menuList: ["menuItem:readMode", "menuItem:openWithSafari", "menuItem:openWithQQBrowser", "menuItem:share:email", "menuItem:share:brand", "menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:favorite", "menuItem:share:facebook", "menuItem:share:QZone"], // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
                    success: function (res) { }
                });
            }*/
            wx.onMenuShareTimeline(arg);

            //有这个需求时，要向arg添加
            //分享朋友特有属性type: '', // 分享类型,music、video或link，不填默认为link dataUrl: 
            wx.onMenuShareAppMessage(arg);
            wx.onMenuShareQQ(arg);
            wx.onMenuShareQZone(arg);

        });
        wx.error(function (res) {
            console.log(res)
        })
    },
    share: function (a) {
       
        C.ajax("get", "/wx/sign", null, function (o) {//?url=' + encodeURIComponent(window.location.href
            o = JSON.parse(o);
            ws.cfg(a.title, a.desc, a.link, a.imgUrl, o);
        });

        
        /*支付： */
    }
}