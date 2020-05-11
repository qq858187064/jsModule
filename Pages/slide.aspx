<%@ Page Title="滑入滑出" Language="C#" %>
<script runat="server">
</script>
<asp:Content ContentPlaceHolderID="hd" runat="Server">
<style>
/*slide模块*/
        .s1, s2 {
            position: absolute;
            opacity:1;
        }
        .s1 {
            background: #ddd;
            height:100%;
            width:5em;
            top:0;
            left:100%;
        }
        .s2 {
            background: #eee;
            height: 5em;
            width: 100%;
            top:100%;
			position: fixed;
        }
		/*左右滑*/
        .lr {
            -webkit-animation: lr 2s;
            -o-animation: lr 2s;
            animation: lr 2s;
        }
		.rl {
            -webkit-animation: rl 2s;
            -o-animation: rl 2s;
            animation: rl 2s;
        }
        .lr1 {
            left: 95%;
        }
        /*从左往右*/
        @keyframes lr {
            0%{
                left: 100%;
            }
            100% {
                left: 95%;
            }
        }
        /*从右往左*/
        @keyframes rl {
            0% {
                left:95%;
            }
            100% {
                left: 100%;
            }
        }
		/*上下滑*/
        .btz {
            -webkit-animation: btz 2s;
            -o-animation: btz 2s;
            animation: btz 2s;
        }
		.tbz {
            -webkit-animation: tbz 2s;
            -o-animation: tbz 2s;
            animation: tbz 2s;
        }
        .tb1 {
            top: 62%;
        }
        /*从下往上*/
        @keyframes btz {
            0%{
                top: 100%;
            }
            100% {
                top: 62%;
            }
        }
        /*从上往下*/
        @keyframes tbz {
            0% {
                top:62%;
            }
            100% {
                top: 100%;
            }
        }


        .pause {
            animation-play-state: paused;
            -webkit-animation-play-state: paused;
        }
    </style>
</asp:Content>




<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" runat="Server">slide</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" runat="Server">滑入滑出</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" runat="Server"><a>滑入滑出</a></asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" runat="Server">
    <dd class="sip">
               <div id="s1" p="m:1,t:'t1',ac:'lr',rvs:'rl',ec:'lr1',s:1500" class="s1">从右滑出</div>
    <div id="s2" p="m:2,t:'t2',ac:'btz',rvs:'tbz',ec:'tb1',s:1500" class="s2">从下滑出</div>
    <a id="t1">右滑出</a>
    <a id="t2">下滑出</a>

    </dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" runat="Server">
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="FBd" runat="Server">
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="IptJs" runat="Server">
  <script type="text/javascript" src="/Js/slide.js"></script>
    <script type="text/javascript" charset="utf-8">
        window.Cm = 23;
        slide("s1", "s2")
    </script>
</asp:Content>