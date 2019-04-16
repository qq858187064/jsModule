<%@ Page Title="滑动切换" Language="C#" %>
<script runat="server">
</script>
<asp:Content ContentPlaceHolderID="hd" runat="Server">
    <link href="../App_Themes/Black/Style.css" rel="stylesheet" />
        <style>
            .DW {
                 display:block!important;
                 left:-9999px;
                width:100%;
                height:100%;
                background: #000!important;
               /*z-index:99;
               line-height:100%;
               vertical-align:middle;
                  */
            }
            .Cls{
                color:#fff;
            }
            .sip {
                position:static!important; 
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
        /*.dw{
             width: 99%;
            border:none;
            background:none;
            text-align: center;
        }*/
        .prev{
            display:block;
             width: 100%;
                 margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
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

/*sw1*/
.sw1{
    text-align:center;
    white-space: nowrap;
    margin-right: 2%;
    margin-bottom:200%;
}
.sw1 p{
    display:inline-block;
    width:11rem;
    height:8rem;
    background:#eee;
    margin-right:2%;
}

    </style>

</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" runat="Server">swipe</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" runat="Server">滑动切换</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" runat="Server"><a>滑动切换</a></asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" runat="Server">
    <dd class="sip">
        
               <div id="sw1" class="sw1"><p>p1</p><p>p2</p><p>p3</p><p>p4</p><p>p5</p></div> 
        1'56"<i class="audio" id="abt">
        <img class="w3" id="w3" src="../App_Themes/Black/images/wave3.png" />
        <img class="w2" id="w2" src="../App_Themes/Black/images/wave2.png" />
        <img src="../App_Themes/Black/images/wave1.png" />
            <audio id="audio" src="http://obj00.cdn.ipalfish.com/aud/65/82/84025b7bf7e1939500c72f8292c4"></audio>
    </i>
        <img src="" />
<%--<p id="img" class="img" p="box:dw,bg:'bg',h:350,tit:0,v:'prev',s:['../Images/3.gif','../Images/6.gif','../Images/Smt.gif','../Images/Pf.jpg']">--%>
        <p id="img" class="img" p="box:dw,bg:'bg',tit:0,v:prev,s:['../Images/uimg/tmp/aa.jpg','../Images/uimg/tmp/bb.jpg','../Images/uimg/tmp/cc.jpg','../Images/uimg/tmp/dd.jpg']">
        <img src="../Images/by.jpg" />
        <img src="../Images/by.jpg" />
        <img src="../Images/by.jpg" />
        <img src="../Images/by.jpg" /></p>
    <p id="dw" class="DW"><%-- src="../Images/by.jpg"--%>
        <a class="Cls" id="cls" onclick="pop.close();C.DelClass(document.documentElement, 'fix');">X</a>
        <img id="prev" class="prev" />
        <i id="pg" class="pg"></i><i id="count" class="pg"></i>
    </p>
<%--    <div id="bg" class="DBg"></div>--%>
    </dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" runat="Server">
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="FBd" runat="Server">
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="IptJs" runat="Server">
    <script src="../Js/pop.js"></script>
    <script src="../Js/swipe.js"></script>
</asp:Content>
<asp:Content ID="Content8" ContentPlaceHolderID="RunJs" runat="Server">
      
</asp:Content>
<asp:Content ID="Content9" ContentPlaceHolderID="endRun" runat="Server">
    <script>
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
        
        var uid = parseInt(C.param().user_id),
            pg = C.G('pg'),
            im = C.G("img");
        pop(im);//弹出框
        swipe(im);//滑屏切换


        /*
        C.AddEvent(window, "touchstart", swipe.prototype.rule, window);
        C.AddEvent(window, "touchmove", swipe.prototype.rule, window)
        C.AddEvent(window, "touchend", swipe.prototype.rule, window);*/
    </script>
</asp:Content>