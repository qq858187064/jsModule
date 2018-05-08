function Dialog()
{
    Dialog.Mask = function (o)
    {
        if (frameElement)
        { 
            var Sf = FramEle(),
            o = C.G(o),
            Htm = top.document.documentElement,
            Wp = top.C.G(o.id.slice(-3)) || top.C.G(Dialog.arguments[0]);
            Ms = top.C.Gs(Wp, "i");
            Ms[0].style.width = Ms[2].style.width = "100%";
            Ms[0].style.height = o.offsetTop + Sf.top + "px";
            Ms[2].height = Htm.scrollHeight - o.offsetHeight - o.offsetTop - Sf.top + "px";
            Ms[2].style.top = o.offsetHeight + o.offsetTop + Sf.top + "px";
            Ms[1].style.width = Htm.scrollWidth - o.offsetWidth - o.offsetLeft - Sf.left + "px";
            Ms[1].style.height = Ms[3].style.height = o.offsetHeight + "px";
            Ms[1].style.top = Ms[3].style.top = Ms[0].style.height
            Ms[3].style.width = o.offsetLeft + Sf.left + "px";
            Ms[1].style.left = o.offsetLeft + o.offsetWidth + Sf.left + "px";
            Ms[2].style.height = Htm.scrollHeight - o.offsetHeight - o.offsetTop - Sf.top + "px";
            Wp.style.display = "block";
        }
    }
    var Sh = document.documentElement.scrollHeight,
        Sw = document.documentElement.scrollWidth,
        B = !arguments[1] ? C.G(arguments[0]) : C.G(arguments[1]),
        Pst = B.id.substring(0, 2).toUpperCase(),
        Ist = Pst == "TM",/*参数id前两字符是“TM”时*/
        that = this;
        B.style.display = "block";
        B.T = (document.documentElement.clientHeight - B.offsetHeight) / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
        B.L = (Sw / 2 - B.offsetWidth / 2);
		/*id前两字符是“AC”时自动关闭*/
        if (Pst == "AC")
        {
            var Ac = !arguments[1] ? C.G(arguments[0]) : C.G(arguments[1]);
            Ac.style.display = "block";
            Ac.style.top = B.T + "px";
            Ac.style.left = B.L + "px";
            (arguments.length == 2 && top.C.G(arguments[0])) && Dialog.Mask(Ac);            
            setTimeout(function () { Dialog.Close(Ac, arguments[1]); }, parseInt(B.id.charAt(2)) * 1000);
        }
        else
        {
            if (Ist)
            {
                var Fe = FramEle();
                if (Fe)
                {
                    B.Bg = top.C.G(B.id.slice(-3));
                    B.T = top.document.documentElement.clientHeight / 2 - (Fe.top - top.document.documentElement.scrollTop - top.document.body.scrollTop) - B.offsetHeight / 2;
                    B.T = B.T < 0 ? 0 : B.T;
                    B.L += (top.document.documentElement.offsetWidth - Fe.f.offsetWidth) / 2 - Fe.f.offsetLeft;
                }
            }
            this.Bx = B;
        }	
        B.style.top = B.T + "px";
        B.style.left = B.L + "px";
        
        if (Ist)
        {
            Dialog.Mask(B);
        }
        if (arguments.length > 1)
        {
            B.Bg = C.G(arguments[0]) || top.C.G(arguments[0]);
            B.Bg.style.width = Sw + "px";
            B.Bg.style.height = Sh + "px";
            B.Bg.style.display = "block";
            
        }
  function FramEle()
        {
            if (frameElement)
            {
                var f = frameElement,/*包含本页面的iframe或frame对象*/
			    fTop = 0,
			    fLeft = 0;
                while (f.offsetParent.tagName.toLowerCase() != "body")
                {
                    f = f.offsetParent;/*与当前元素最近的经过定位(position不等于static)的父级元素*/
                    fTop += f.offsetTop;
                    fLeft += f.offsetLeft;
                }
                fTop = fTop ? fTop + frameElement.offsetTop : frameElement.offsetTop;
                fLeft = fLeft ? fLeft + frameElement.offsetLeft : frameElement.offsetLeft;
                return {
                    f: f,
                    top: fTop,
                    left: fLeft
                };
            }
	}
	Dialog.Close = function ()
	{
	    if (arguments.length > 0)
	    {
	        for (var i = 0; i < arguments.length; i++)
	        {
	            var od = C.G(arguments[i]);
	            if (od)
	            {
	                od.style.display = "none";
	                if (od.Bg)
	                {
	                    od.Bg.style.display = "none";
	                }
	            }
	        }
	    }
	    else
	    {
	        if (that.Bx)
	        {
	            that.Bx.style.display = "none";
	            if (that.Bx.Bg)
	            {
	                that.Bx.Bg.style.display = "none";
	            }
	        } else if (that.Ab)
	        {
	            that.Ab.style.display = "none";
	            if (that.Ab.Bg)
	            {
	                that.Ab.Bg.style.display = "none";
	            }
	        }
	    }
	}
}