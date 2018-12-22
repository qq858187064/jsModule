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
            o.img = C.G(o.ps.img);
            o.view = C.G(o.ps.prev);

            C.evt("drop", false, true);
            var ii = C.sliceC(C.Gs(o, "i"));
            ii.push(o)
            Drags(o);
            C.AddEvent(o, "drop", function fun(o, e) {
                o.ol = parseInt(o.style.left);
                o.ot = parseInt(o.style.top);
                o.w = parseInt(o.style.width);
                o.h = parseInt(o.style.height);

                o.te = o.e;
                crop.clip(o);
            }, o);
            /*图像加载时显示裁切效果*/
            o.img.onload = function view() {
                if (!o.view) {
                    o.view = C.G(o.ps.prev);
                }
                o.view.src = o.img.src;
                crop.clip(o);
            }
            o.img.src = o.img.src;
            /*为file上传框加事件*/
            if (o.ps.fu) {
                o.fu = C.G(o.ps.fu);
                C.AddEvent(o.fu, 'change', this.setImg,o)
            }
            if(o.ps.up)
            {
                o.up = C.G(o.ps.up);
                C.AddEvent(o.up,'click',this.draw,o)
            }

        },
        /*预览*/
        clip: function (i) {
                i.ot = i.offsetTop - i.mt;
                i.ol = i.offsetLeft - i.ml;
            i.ct = i.ot+ i.mt;
            i.r = i.offsetLeft + i.offsetWidth;
            i.b = i.ct + i.offsetHeight;
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
            var mx = (e.clientX || e.changedTouches[0].clientX) - o.p.ox;//o.p.rx,
            my = (e.clientY || e.changedTouches[0].clientY) - o.p.oy,// o.p.ry;//e.clientY
            l = parseInt(o.p.style.left),
            t = l = parseInt(o.p.style.top);
                var cls = C.Attr(o, "class");
                switch (cls) {
                    case "a":
                        if(!o.p.s)
                        mx = -mx;
                        my = -my;
                        break;
                    case "b":
                        my = -my;
                        mx = 0;
                        break;
                    case "c":
                        if (!o.p.s)
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
                        mx = -mx;
                        break;
                    case "h":
                        mx = -mx;
                        break;
                }
                o.p.style.width = o.p.w + mx + "px";
                //return;
        },
       // var img = C.G("img"),
       // fs, ou, sd, mime;
/*设置图片处理*/
 setImg:function(o)
 {

     var fs = o.fu.files;
     o.ou =window[window.URL ? 'URL' : 'webkitURL']['createObjectURL'](fs[0]);// imgUrl(fi.files[0]);
    if (o.ou && fs[0].size < 1024000 * 5) {
        img.src = o.view.src = o.ou;
       // img.onload = crop.prototype.draw(o);
    }
   // else
       // alert("图片超过5M或不存在");
    img.src = o.view.src = o.ou
    o.mime = fs[0].type;
},
    /*将图片指定区域画到画布上,并在加载完成后提取数据并上传*/
 draw: function (o)
 {
        var w = si.offsetWidth,
        h = si.offsetHeight,
        cvs = C.Ce('canvas'); //C.G('cvs');
        cvs.width =w;
        cvs.height = h;
        cct = cvs.getContext('2d');
     o.img.src = o.ou || o.img.src;

     var path = o.ou?o.img.src+o.mime.replace('image/','.'):o.img.src
     fn = path.substring(path.lastIndexOf("/") + 1);
     o.img.onload = function () {
            //以下两步必须要在img load后执行：
            cct.drawImage(img, si.offsetLeft, si.offsetTop, w, h, 0, 0, w, h);
            console.log('si.offsetLeft, si.offsetTop, w, h, 0, 0, w, h', si.offsetLeft, si.offsetTop, w, h, 0, 0, w, h)
            sd = cvs.toDataURL(o.mime, o.q);//.replace('data:image/jpeg;base64,', '');
            sd = crop.prototype.toBlob(sd,o.mime);
            //fun(fn);//加入数
            crop.prototype.upload(fn)
            o.img.onload = null;//避免每次加载时执行裁剪
        }
    },
    /*dataurl转成blob*/
     toBlob:function(dataurl,mime) {
        var arr = dataurl.split(','),
           // mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--)
        {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    },
    /*纯前端裁剪后上传*/
     upload:function(fn) {
        var fd = new FormData();
        fd.append('Fu', sd, fn);
        //fd.append('Fu', fs[0]);
        C.EXHR(
      function (o) {
          r.innerHTML = "图片处理完成，返回值：" + o + "<br />";
          r.href = o;
          ri.src = o + "?" + Math.random();
          r.appendChild(ri)
      },
      'POST',
      '/Hs/Handler.ashx?f=up',// +(a.i || 1),+"&token=" + this.cookie("token"),
      fd
    );
        /*
         //ie下报Promise未定义：
           C.ajax('POST',
            '/Hs/Handler.ashx?f=up',// +(a.i || 1),+"&token=" + this.cookie("token"),
            fd,
            function(o){
                    r.innerHTML = "图片处理完成，返回值：" + o+"<br />";
                    r.href =o;
                    ri.src= o+"?"+Math.random();
                    r.appendChild(ri)
            },
            function(o){console.log(o)}
          ); 
         */
    },
    }
    crop.clip = crop.prototype.clip;
    crop.resize = crop.prototype.resize;
    C.Batch();
}