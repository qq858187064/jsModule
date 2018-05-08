function Drags()
{
    Drags.prototype = {
        Init: function (o)
        {
            o.Rx = o.Ry = 0;
            o.ML = o.MT = 0;
            var f = !o.id ? o.parentNode : o;

            if (f.id.charAt(0).toLowerCase() == "s")
            {
                o.Bar = o;
                //o.s = true;
            }
            else
            {
                o.Bar = o.firstChild.nodeType == 1 ? o.firstChild : C.Nxt(o.firstChild);
            }
            C.AddEvent(o.Bar, "mousedown", Drags.prototype.Start, o);
        },
        Start: function (e, o)
        {
            console.log(e.target + "_" + o.tagName + "_" + o.Bar.tagName)
            o.Rx = e.clientX - o.offsetLeft;
            o.Ry = e.clientY - o.offsetTop;
            o.ML = parseInt(C.CurrentStyle(o).marginLeft) || 0;
            o.MT = parseInt(C.CurrentStyle(o).marginTop) || 0;
            document.onmousemove = function (e)
            {
                Drags.prototype.Move(e, o);
            };
            C.AddEvent(document, "mouseup", Drags.prototype.Stop, o);
            C.StopBubble(e);
            //C.PreventDefault(e);
        },
        Move: function (e, o)
        {
            var e = e || window.event;
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            o.style.left = (e.clientX - o.Rx - o.ML) + "px";
            o.style.top = (e.clientY - o.Ry - o.MT) + "px";
        },
        Stop: function ()
        {
            document.onmousemove = null;
            //document.onmouseup = null;
        }
    };
    C.Batch();
}
