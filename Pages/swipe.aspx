<%@ Page Title="滑动切换" Language="C#" %>
<script runat="server">
</script>
<asp:Content ContentPlaceHolderID="hd" runat="Server">
        <style>
           html {
            height: 100vh;
        }

        body {
            padding: 0 1em;
        }

        p {
            display: block;
        }

        h2 {
            color: #666;
        }

        .bn {
            margin: 0 -1em;
            background: url('img/bg.jpg') no-repeat 0 0;
            text-align: center;
            height: 12.5rem;
            background-size: 100%;
        }

            .bn b {
                display: block;
                color: #fff;
                line-height: 1.6em;
            }

        .pf {
            margin-top: 1em;
            width: 6rem;
            height: 6rem;
            border: 2px solid rgba(255,255,255, 0.6);
            border-radius: 50%;
        }

        .audio {
            display: block;
            background:#d1ffd1; /*url('img/audio.png') no-repeat 95% center;*/
            color: #02bd00;
            border-radius: 1em;
            width: 40%;
            padding: 3px 24px 0px 18px;
    font-size: 1.25rem;
        }
        .audio img{
            float:right;
                padding-top: 3px;
        }
        .img {
            text-align: center;
                margin-bottom: 54px;
        }

            .img img {
                display: inline-block;
                white-space: nowrap;
                width: 22.5%;
                border: 1px solid #eee;
                margin-right: 0.5em;
            }

                .img img:last-child {
                    margin-right: 0;
                }

      
        .dbg{
                filter: alpha(opacity=9);
    opacity: 0.9;
        }
        .dw{
             width: 99%;
            border:none;
            background:none;
            text-align: center;
        }
        .cls{
            background:none;
            top:0;
            right:0;
        }
        .prev{
            display:block;
             width: 100%;
             margin:0 auto;
        }
        
.w2Animate {
    -webkit-animation: w2 .4s .1s infinite alternate;
    -o-animation: w2 .4s .1s infinite alternate;
    animation: w2 .4s .1s infinite alternate;
}

.w3Animate {
    -webkit-animation: w3 .4s .1s infinite alternate;
    -o-animation: w3 .4s .1s infinite alternate;
    animation: w3 .4s .1s infinite alternate;
}
@-webkit-keyframes w2 {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
}
@keyframes w2 {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
}

@-webkit-keyframes w3 {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes w3 {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
.pg{
    color:#ccc;
}
.fix{
    position: fixed;
    top: 0;
    left: 0;
}
    </style>

</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" runat="Server">swipe</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" runat="Server">滑动切换</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" runat="Server"><a>滑动切换</a></asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" runat="Server">
    <dd class="sip">1'56"<i class="audio" id="abt"><img class="w3" id="w3" src="../App_Themes/Black/images/wave3.png" />
        <img class="w2" id="w2" src="../App_Themes/Black/images/wave2.png" />
        <img src="../App_Themes/Black/images/wave1.png" />
            <audio id="audio" src="http://obj00.cdn.ipalfish.com/aud/65/82/84025b7bf7e1939500c72f8292c4"></audio>

    </i>
<p id="img" class="img" p="box:dw,bg:'bg',h:350,tit:0,img:'prev'">
        <img id="1" src="../Images/Pf.jpg" />
        <img id="2" src="../Images/Pf.jpg" />
        <img id="3" src="../Images/Pf.jpg" />
        <img id="4" src="../Images/Pf.jpg" />
    <p id="dw" class="dw"><a class="cls" id="cls" onclick="pop.close();C.DelClass(document.documentElement, 'fix');"></a><img id="prev" class="prev" /><i id="pg" class="pg"></i><i id="count" class="pg"></i></p>
    <div id="bg" class="dbg"></div>
    </dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" runat="Server">
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="FBd" runat="Server">
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="IptJs" runat="Server">
  <script type="text/javascript" src="/Js/Drags.js"></script>
  <script type="text/javascript" src="/Js/crop.js"></script>
    <!--<script type="text/javascript" src="/Js/resize.js"></script>-->
    <script type="text/javascript" charset="utf-8">
        window.Cm = 22;
        var audio = C.G("audio");
        //播放声音
        C.AddEvent(abt, "click", function () {
            var w2 = C.G("w2"),
             w3 = C.G("w3");
            if (audio !== null) {
                if (audio.paused) {
                    audio.play();
                    C.AddClass(w2, "w2Animate");
                    C.AddClass(w3, "w3Animate");
                } else {
                    audio.pause();
                    C.DelClass(w2, "w2Animate");
                    C.DelClass(w3, "w3Animate");
                }
            }
        });
        C.AddEvent(audio, "ended", function () {
            C.DelClass(w2, "w2Animate");
            C.DelClass(w3, "w3Animate");
        });

        /* var aaa = { "h_av": "2.9.14.0", "h_dt": 0, "h_did": "867398030057053", "h_nt": 0, "h_nst": 13, "h_m": 100234, "h_ch": "me", "h_ts": 1526297414595, "h_lc": "zh", "h_src": 2, "h_p": 5613, "zone": 28800, "token": "f6959a22a223dd64e24c4f60f881551a", "cate": 2, "offset": 0, "limit": 1 };
          C.EXHR(function (o) {
            console.log(o)
        }, "POST", "/klian/media/photo/get", aaa);//{"owner":222,"offset":0}
        261591 
        */
        /**/
        var uid = parseInt(C.param().user_id),
            pg = C.G('pg'),
            im = C.G("img"),
            prev = C.G("prev");
        //prev.s = [];//预览图的源

        //获取相册
        P.post("/klian/media/photo/get", { "owner": uid }, function (d) {
            var ps = C.Gs(im, "img");
            prev.ms = d.items;
            for (var i = 0; i < ps.length; i++) {
                let p = ps[i];
                p.src = prev.ms[i].tiny;
                //p.src = prev.s[i].origin;
                C.AddEvent(p, "click", function () {
                    prev.n = p.id - 1;//
                }, p);
            }
            C.AddEvent(prev, "load", function (e) {

                var imgs = new Image();
                imgs.src = prev.src;
                var w = imgs.width,
                h = prev.height;
                console.log(w + "__" + h)
                var ww = pop.co.offsetWidth
                if (h > ww) {
                    pop.co.style.top = "1px";//document.documentElement.scrollTop;
                    document.documentElement.scrollTop = 0;
                    C.AddClass(document.documentElement, "fix");
                    // document.documentElement.clientHeight
                    //pop.co.bg.style.height="100%";
                    prev.style.height = "auto";// prev.offsetWidth + "px";
                    prev.style.height = prev.offsetHeight - 24 + "px";
                    prev.style.width = ww + "px";
                }
                else if (h < ww) {
                    prev.style.height = "";
                    prev.style.width = "100%";
                    pop.co.style.top = (document.documentElement.clientHeight - prev.offsetHeight) / 2 + "px";
                }
                n = prev.n + 1;
                if (prev.r == 3)
                    n = prev.n + 1;
                else if (prev.r == 4) {
                    n = prev.n + 1;;
                }
                pg.innerHTML = n

                if (n == ps.length)//最后一页时请求更多图片
                {
                    console.log(2222)
                }
                //     n=pg.ci;

                /*  pg.innerHTML = prev.r == 3 ? ++pg.ci + 1 : --pg.ci + 1; */
                // if(n>ps)
                //if()
            });
        }, function (d) {
            console.log(d);
        });

        //获取老师详情
        P.post("/klian/general/otherbasicprofile", { "user_id": uid }, function (d) {
            var ps = C.Gs(im, "img"),
                abt = C.G("abt"),
                
            u = d.user_info,//d.data.items;photocn
            ms = document.createTextNode(Math.floor(u.audiolength / 60) + "'   " + u.audiolength % 60 + "\"");
            abt.insertBefore(ms, abt.firstChild)
            C.G("pf").src = u.avatar;
            C.G("nm").innerHTML = u.name + "&#160;" + u.country;
            C.G("tit").innerHTML = u.title;// + "&#160;|&#160;" + u.juniortitle;
            C.G("dscr").innerHTML = u.sign;

            audio.src = u.audiobrief;
            C.G("count").innerHTML = '/' + (d.photocn - 1);
           


        }, function (d) {
            console.log(d);
        });

        //可试听状态
        P.post("/klian/ugc/curriculum/audition/denystatus/get", { "uid": uid }, function (d) {
            var ps = C.Gs(im, "img"),
                u = "";
            if (d.ent.iskidteacher == 1) {
                u = "";//官方课老师且未设置为可试听时：跳转试听申请页面
                if (d.ent.status) {
                    u = "";//  官方课老师且设置为可试听时：跳转预约页面
                }
                location.replace(u);
            }
            else {
                var ap = C.G("apply");
                ap.innerText = "下载伴鱼 APP";
                if (P.isAndroid()) {
                    u = 'http://web.cdn.ibanyu.com/klian/html/app/reading_android/prod/palfish_reading.apk';
                } else {
                    u = 'https://itunes.apple.com/cn/app/id1203189645?mt=8';
                }
            }
            ap.href = u;
            // location.replace(u);

        }, function (d) {
            console.log(d);
        });

        pop(im);
        swipe(prev);

        /*
          (function po()
          {
              C.AddEvent(img, "click", function (e) {
                  var i = C.Ge(e);
                  if (i.tagName.toLowerCase() == "img")
                  console.log(e+i.id);
              })
          }())
  */
        function wechat(data) {
            var links = location.href;
            var content = '我觉得伴鱼上的' + data.data.name + '老师太棒了，你也来试试吧！';
            var imgurl = data.data.avatar;
            var audiobrief = data.data.audiobrief;
            wx.ready(function () {
                wx.onMenuShareTimeline({
                    title: '推荐老师 - ' + content, // 分享标题
                    link: links, // 分享链接
                    imgUrl: imgurl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareAppMessage({
                    title: '推荐老师', // 分享标题
                    desc: content, // 分享描述
                    link: links, // 分享链接
                    imgUrl: imgurl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareQQ({
                    title: '推荐老师', // 分享标题
                    desc: content, // 分享描述
                    link: links, // 分享链接
                    imgUrl: imgurl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareWeibo({
                    title: '推荐老师', // 分享标题
                    desc: content, // 分享描述
                    link: links, // 分享链接
                    imgUrl: imgurl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareQZone({
                    title: '推荐老师', // 分享标题
                    desc: content, // 分享描述
                    link: links, // 分享链接
                    imgUrl: imgurl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
            });

            wx.error(function (res) {
                consloe.log(res);
                alert('Error');
            });
        }
    </script>
</asp:Content>