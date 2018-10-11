/*
该组件用到drag组件，使用前须引用drag组件
*/
function crop() {
    crop.prototype = {
        Init: function (o) {
            C.Pt(o);
            o.style.width = o.ps.w + "px";
            o.style.height = o.ps.h + "px";
            if (o.ps.s)
                o.s = o.ps.w / o.ps.h;

            //o.ml = parseInt(C.CurrentStyle(o).marginLeft);
            //o.mt = parseInt(C.CurrentStyle(o).marginTop);
            o.img = C.G(o.ps.img);
            o.view = C.G(o.ps.prev);
            //C.evt("resize", false, true);
            C.evt("drop", false, true);
            //o.ot = window.getComputedStyle(o).left;//IE9以下:window.getComputedStyle ? window.getComputedStyle(boxs).left : boxs.currentStyle.left

            var ii = C.sliceC(C.Gs(o, "i"));
            ii.push(o)
            //Drags.apply(null, ii);
            Drags(o);
            C.AddEvent(o, "drop", function fun(o, e) {
                o.ol = parseInt(o.style.left);
                o.ot = parseInt(o.style.top);
                o.w = parseInt(o.style.width);
                o.h = parseInt(o.style.height);

                o.te = o.e;
                crop.clip(o);
            }, o);
            if(false)
            for (var j = 0; j < ii.length; j++) {
                var i = ii[j];
                i.p = o;
                //console.log(i)
                //C.AddEvent(i, "resize", crop.resize, i);
                C.AddEvent(i, "drop", function fun(i, e) {

                    //i.w=si.offsetWidth;
                    //i.h=si.offsetHeight;
                    /*
                    i.p.ol = parseInt(i.p.style.left);
                    i.p.ot = parseInt(i.p.style.top);
                    i.p.w = parseInt(i.p.style.width);
                    i.p.h = parseInt(i.p.style.height);
                    
                    o.ol = parseInt(o.style.left);
                    o.ot = parseInt(o.style.top);
                    o.w = parseInt(o.style.width);
                    o.h = parseInt(o.style.height);*/

                    i.p.te = i.e;
                    crop.clip(o);
                }, i);
            }
            //o.ot = o.offsetTop;

            /*图像加载时显示裁切效果*/
            o.img.onload = function view() {
                if (!o.view) {
                    o.view = C.G(o.ps.prev);
                }
                o.view.src = o.img.src;
                crop.clip(o);
            }
            o.img.src = o.img.src;
        },
        /*预览*/
        clip: function (i) {
                i.ot = i.offsetTop - i.mt;
                i.ol = i.offsetLeft - i.ml;
            i.ct = i.ot+ i.mt;
            i.r = i.offsetLeft + i.offsetWidth;
            i.b = i.ct + i.offsetHeight;
           // console.log(i.ot, i.offsetTop)
            i.ot = parseInt(i.style.top)
            i.view.style.clip = "rect(" + i.ct + "px " + i.r + "px " + i.b + "px " + i.offsetLeft + "px" + ")";
            i.view.style.left = -i.offsetLeft + "px";
            i.view.style.top = -i.offsetTop + "px";

        },
        /*调整大小,本质上也是一个拖动处理*/
        resize: function (o, e) {
            o.p = o.parentNode;
            if (!o.p.w) {
                o.p.w = o.p.offsetWidth;
                o.p.h = o.p.offsetHeight;
            } 
                /*var sy = e.clientY || e.changedTouches[0].clientY;
                if (o.p.te && o.p.te != e) {
                    sy = o.p.te.clientY || o.p.te.changedTouches[0].clientY;
                    o.p.te = e;
                    //console.log((o.p.te&&o.p.te!=e)+"__only one")
                }
                */

            // x - o.offsetLeft + o.ml
            console.log(C.Ge(e))
            var mx = (e.clientX || e.changedTouches[0].clientX) - o.p.ox;//o.p.rx,
            my = (e.clientY || e.changedTouches[0].clientY) - o.p.oy,// o.p.ry;//e.clientY
            l = parseInt(o.p.style.left),
            t = l = parseInt(o.p.style.top);
           // console.log(mx)

                //o.p.te=e.clientY
                //o.p.ot = parseInt(o.p.style.top)- o.p.ot 	;
                //	my =(o.p.ey|| e.clientY) - o.y;
                var cls = C.Attr(o, "class");/*y

                var  xe = parseInt(o.p.style.left) <= -o.p.ml,
                    ye = parseInt(o.p.style.left) <= -o.p.mt;
                if (!o.p.pss) {
                    o.p.style.top = o.p.ot + my + "px";//yv;//
                    o.p.style.left = o.p.ol + mx + "px";
                    o.p.pss = true;
                }*/
               // console.log(o.p.ml,xe);
                switch (cls) {
                    case "a":
                        if(!o.p.s)
                        //o.p.style.top = o.p.ot + my+"px";//yv;//
                        //o.p.style.left = o.p.ol + mx+ "px";
                        mx = -mx;
                        my = -my;
                        break;
                    case "b":
                        //o.p.style.top = o.p.ot + my + "px";
                        my = -my;
                        mx = 0;
                        break;
                    case "c":
                        if (!o.p.s)
                        //o.p.style.top = o.p.ot + my + "px";
                        my = -my;
                        break;
                    case "d":
                        l = o.p.rx / 2;
                        my = 0;
                        break;
                    case "e":
                        break;
                    case "f":
                        mx = 0;
                        break;
                    case "g":
                        //o.p.style.left = (o.p.ol || 0) + mx + "px";
                        mx = -mx;
                        break;
                    case "h":
                        //o.p.style.left = (o.p.ol || 0) + mx  + "px";
                        mx = -mx;
                        break;
                }
            //o.p.w += mx;
                console.log(mx,o.p.rx,'____')
                o.p.style.width = o.p.w + mx + "px";
               // o.p.style.left = l + "px";
                //o.p.style.top = t + "px";
                return;
                //o.p.style.left = o.p.offsetWidth / 2+"px";
               // o.p.style.height = o.p.h + my + "px";
            /*
                if (o.p.s>0)
                {
                    if(mx!=0)
                    {
                       // console.log("mx",mx)
                        o.p.style.width = o.p.w + mx + "px";
                        o.p.style.height = (o.p.w + mx) / o.p.s + "px";
                        //o.p.style.top = o.p.ot  +"px";
                    }
                    else if(my!=0)
                    {
                        //console.log("my")
                        o.p.style.height = o.p.h + my + "px";
                        o.p.style.width = (o.p.h + my) * o.p.s + "px";
                    }
                }
                else
                {
                    if (mx != 0)
                        o.p.style.width = o.p.w + mx + "px";
                if (my != 0)
                    o.p.style.height = o.p.h + my + "px";
                }
            */
        }
    }
    crop.clip = crop.prototype.clip;
    crop.resize = crop.prototype.resize;
    C.Batch();
}