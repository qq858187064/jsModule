/*
function resize() {
    resize.prototype = {
        Init: function (o) {
            var b = C.Gs(o, "i");
            //b.prototype = resize;
            for (var n = 0; n < b.length; n++)
            {
                var i = b[n];
                i.o = o;
                C.AddEvent(i, "mousedown", resize.prototype.Start, i);
            }
        },
        Start: function (e, o) {
            o.Rx = e.clientX - o.offsetLeft;
            o.Ry = e.clientY - o.offsetTop;
            o.ML = parseInt(C.CurrentStyle(o).marginLeft) || 0;
            o.MT = parseInt(C.CurrentStyle(o).marginTop) || 0;
            document.onmousemove = function (e)
            {
                resize.prototype.Move(e, o);
                //C.StopBubble(e);
            };
        },
        Move: function (e, o) {
            var e = e || window.event;
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            o.style.left = (e.clientX - o.Rx - o.ML) + "px";
            o.style.top = (e.clientY - o.Ry - o.MT) + "px";
            o.o.style.width = (e.clientX - o.Rx - o.ML) + "px";
            console.log(e.offsetX+"_"+e.offsetY);

            C.AddEvent(document, "mouseup", resize.prototype.Stop, o);
        },
        Stop: function ()
        {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    };
    C.Batch();
}
*/
/*
function resize() {
    resize.prototype = {
        Init: function (o)
        {
            var b = C.Gs(o, "i");
            //b.prototype = resize;
            for(var n=0;n<b.length;n++)
            {
                var i = b[n];
                i.o = o;
                C.AddEvent(i, "mousedown", resize.prototype.rs, i);
            }
        },
        rs:function(e,i)
        {
            //i.o.mousedown = null;
            //document.onmousemove = null;
            //document.onmouseup = null;
            i.sx = e.clientX;
            i.sy = e.clientY;

            document.onmousemove = function (e)
            {
                resize.prototype.re(e, i);
            };
        },
        re: function (e, i)
        {
            
            i.o.style.width = i.o.offsetWidth + e.clientX - i.sx + "px";
            if (!document.onmouseup) {
                C.AddEvent(document, "mouseup", function () { document.onmousemove = null; });
            }

        },
        ed:function(e,i)
        {
            //i.ex = e.clientX;
            //i.ey = e.clientY;
            //console.log(i.ex - i.sx);
            //i.onmousemove = null;
        }
    };
    C.Batch();
}
*/