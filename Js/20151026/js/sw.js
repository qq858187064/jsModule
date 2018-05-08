function sw()
{
    sw.prototype = {
        Init: function (o)
        {
            o.p = C.Gs(o, "p")[0];
            
            o.ls = C.Gs(o.p, "a");
            o.aw = o.ls[0].offsetWidth;
            console.log(o.aw)
            var cs = C.Gs(o, "i"),
                len = o.ls.length;
            if (len < 2) return;

            o.pre = cs[0];
            o.nxt = cs[1];
            o.ci = Math.floor(len / 2)
            C.AddEvent(o.pre, "click", function () { o.s = -1; sw.prototype.swc(o);});
            C.AddEvent(o.nxt, "click", function () { o.s = 1; sw.prototype.swc(o); });
      },
      swc:function(o)
      {
          o.ci = o.ci + o.s;
          if (o.ci < 0&&o.s==-1)
          {
              o.ci = o.ls.length - 1;
          } else if (o.ci > o.ls.length)
          {
              o.ci = 0;
          }
          n = o.s == 1 ? -o.s * o.ci * o.aw : o.s * o.ci * o.aw;
          o.p.style.marginLeft = n + "px";

          //for(var i=0;i<o.aw;i++)
          //{

          //}
      }
    }
    C.Batch();
}