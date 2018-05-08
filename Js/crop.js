/*
该组件用到drag组件，使用前须引用drag组件
*/
function crop() {
    crop.prototype = {
        Init: function (o) {
            C.Pt(o);
            o.img = C.G(o.ps.img);
            o.view = C.G(o.ps.prev);
            C.evt("resize", false, true);
            C.evt("drop", false, true);
            /*初始化拖拽*/
            var ii = C.sliceC(C.Gs(o, "i"));
            ii.push(o)
            Drags.apply(null, ii);
            for (var j = 0; j < ii.length; j++) {
                var i = ii[j];
                i.p = o;
                C.AddEvent(i, "resize", crop.resize, i);

                C.AddEvent(i, "drop", function fun(i, e) {

                    //i.w=si.offsetWidth;
                    //i.h=si.offsetHeight;

                    i.p.ol = parseInt(i.p.style.left);
                    i.p.ot = parseInt(i.p.style.top);
                    i.p.w = parseInt(i.p.style.width);
                    i.p.h = parseInt(i.p.style.height);
					
					i.p.te=i.e;
                    crop.clip(o);
                }, i);
            }

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
            i.ml = parseInt(C.CurrentStyle(i).marginLeft);
            i.mt = parseInt(C.CurrentStyle(i).marginTop);
            i.t = i.mt + i.offsetTop;
            i.r = i.offsetLeft + i.offsetWidth;
            i.b = i.t + i.offsetHeight;

            i.view.style.clip = "rect(" + i.t + "px " + i.r + "px " + i.b + "px " + i.offsetLeft + "px" + ")";
            i.view.style.left = -i.offsetLeft + "px";
            i.view.style.top = -i.offsetTop + "px";

        },
        /*调整大小*/
        resize: function (o) {
            if (!o.p.w) {
                o.p.w = o.p.offsetWidth;
                o.p.h = o.p.offsetHeight;
            }
            if (o.e) {
								console.log((o.p.te&&o.p.te!=o.e)	)

			var sy=o.e.clientY;
			if(o.p.te&&o.p.te!=o.e)
			{
				sy=o.p.te.clientY;
				o.p.te=o.e;
				console.log((o.p.te&&o.p.te!=o.e)+"__only one")
}
				
                var mx = o.e.clientX - o.x,
		my =o.e.clientY- o.y;//o.e.clientY
		//o.p.te=o.e.clientY
				                    //o.p.ot = parseInt(o.p.style.top)- o.p.ot 	;
					//	my =(o.p.ey|| o.e.clientY) - o.y;
			                console.log("o.p.ot："+o.p.ot+"_o.e.clientY："+o.e.clientY)

                   

                var cls = C.Attr(o, "class");
                switch (cls) {
                    case "a":
                        o.p.style.top = o.p.ot+ my + "px";//yv;//
                        o.p.style.left = o.p.ol + mx + "px";
                        mx = -mx;
                        my = -my;
                        //console.log(cls+"_crop             my______"+ my)
                        console.log("ge:")
                        console.log(o)//
                        console.log(cls + "_crop  o.e.clientY____________" + o.e.clientY)

                        //console.log(cls+"_crop            o.y__________________"+ o.y)
                        break;
                    case "b":
                        o.p.style.top = o.p.ot + my + "px";
                        my = -my;
                        mx = 0;				
                        break;
                    case "c":
                        o.p.style.top = o.p.ot + my + "px";
                        my = -my;				

                        // break;
                    case "d":
                        my = 0;
                        break;
                    case "e":
                        break;
                    case "f":
                        mx = 0;
                        break;
                    case "g":
                        o.p.style.left = (o.p.ol || 0) + mx + "px";
                        mx = -mx;
                        break;
                    case "h":
                        o.p.style.left = (o.p.ol || 0) + mx + "px";
                        mx = -mx;
                        my = 0;
                        break;
                }

                if (mx != 0)
                    o.p.style.width = o.p.w + mx + "px";
                if (my != 0)
                    o.p.style.height = o.p.h + my + "px";
            }
        }
    }
    crop.clip = crop.prototype.clip;
    crop.resize = crop.prototype.resize;
    C.Batch();
}