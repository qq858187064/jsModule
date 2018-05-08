function Imgs(Imc)
{
    if (typeof Imgs.Initialized == "undefined" ? true : false)
    { 
       //添加事件
        var prt, Ims;
        Imgs.prototype.AE = function ()
        {
            alert("AE");
            //大图事件
            var I = G("Limg");
            I.prototype = new oImg(I);
            AddEvent(I, "mousemove", I.prototype.Ps);
            AddEvent(I, "click", I.prototype.Swc);

            //导航小图事件
            prt = G("Thumbnails");
            Ims = Gs(prt, "img");
            for (var i = 0; i < Ims.length; i++)
            {
                Ims[i].onmouseover = function () { if (this.className != "Crt") this.className += "Ho"; };
                Ims[i].onmouseout = function () { this.className = this.className.replace("Ho", ""); };
                Ims[i].onclick = function ()
                {
                    SetCss(this, "Crt");
                }
            }
            Nav();
        };

        Imgs.prototype.SetCss = function (M, Css)
        {
            var Ms = M.parentNode.getElementsByTagName(M.tagName);
            for (var j = 0; j < Ms.length; j++)
            {
                Ms[j].className = "";
            }
            M.className = Css;
            var s = M.getAttribute("src").toString();
            I = G("Limg");
            I.src = s.replace("/Thumbnail", "");
        };
        //根据传入图像获取其属性及方法
        Imgs.prototype.oImg = function (oI)
        {
            alert("oImg");
            this.oI = oI;
            var Img = this;
            this.fu = oI.src; //Full Path
            this.li = this.fu.lastIndexOf("/");     // "/" 's index
            this.di = this.fu.lastIndexOf(".");     // "." 's index
            this.bu = this.fu.substring(0, Img.li);     //Base of Url
            this.nm = this.fu.substring(Img.li + 1, Img.di);     //File Name
            this.tu = this.fu.substring(Img.di);     //Tail of Url
            this.Cx = oI.offsetWidth / 2;    //image center x
            var x;
            this.Ps = function (e)
            {
                var e = window.event || e;
                x = e.offsetX == undefined ? e.clientX - oI.offsetLeft - 2 : e.offsetX;
                if (x < Img.Cx)
                {
                    oI.className = "Previous";
                    oI.title = "上一张";
                }
                else
                {
                    oI.className = "Next";
                    oI.title = "下一张";
                }
            }
            this.Swc = function ()
            {
                var Step = x > Img.Cx ? 1 : -1;
                if (Img.nm == 1 && Step != 1)
                {
                    Sm();
                }
                else if (Img.nm == Imc && Step == 1)
                {
                    Em();
                }
                else
                {

                    oI.src = Img.bu + "/" + (parseInt(Img.nm) + parseInt(Step)) + Img.tu;
                    if (Step == 1)
                        Img.nm++;
                    else
                        Img.nm--;
                }
            }
        };
        //缩略图导航
        Imgs.prototype.Nav = function ()
        {
            var Ls = Gs(prt, "a");
            Ims[0].prototype = new oImg(Ims[0])
            var Furl = Ims[0].getAttribute("src").toString();
            var Curl = Furl.slice(0, Furl.lastIndexOf(".") - 1); //图片src前面公用部分
            for (var h = 0; h < 2; h++)
            {
                Ls[h].onclick = function ()
                {
                    var Rmd = Imc % 5;
                    var Fnm = parseInt(Ims[0].getAttribute("src").slice(Ims[0].getAttribute("src").lastIndexOf("/") + 1, -4));
                    var IsFirst = Fnm == 1 ? true : false;
                    var IsLast = Fnm + 4 < Imc ? false : true;
                    var IsBfLst = Fnm + 9 < Imc ? false : true;
                    if (IsFirst && this.className == "L")
                    {
                        Sm();
                    }
                    else if (IsLast && this.className == "R")
                    {
                        Em();
                    }
                    else
                    {
                        for (var k = 0; k < 5; k++)
                        {
                            var Cfn = Ims[k].getAttribute("src");
                            var Cn = Ims[k].getAttribute("src").slice(Cfn.lastIndexOf("/") + 1); //含扩展名的文件名
                            var Num = parseInt(Cn.slice(0, -4));
                            var NewNm;
                            if (this.className == "L")
                            {
                                NewNm = Rmd == 0 ? Num - 5 : k + 1;
                            }
                            else
                            {
                                NewNm = (Rmd != 0 && IsBfLst) ? Imc - 4 + k : Num + 5;
                            }
                            Ims[k].setAttribute("src", Curl + Cn.replace(Num, NewNm));
                        }
                    }
                }
            }
        };
        Imgs.prototype.Sm = function ()
        {
            alert("您已到最前面了！");
            return false;
        };
        Imgs.prototype.Em = function ()
        {
            alert("您已到最后面了！");
            return false;
        };
        Imgs.Initialized = true;
    }
}