/*图片切换中简单结构切换*/
function sw()
{
    sw.prototype = {
        Init: function (o)
        {
            var it= o.id.indexOf("_")+1;
            if (it > 0)
                {
                o.tm = o.id.substring(it);
                o.tmr = setInterval(function () { o.s = 1; sw.prototype.swc(o); }, o.tm)
                C.AddEvent(o, "mouseover", function () { clearInterval(o.tmr); });
                C.AddEvent(o, "mouseout", function () { o.tmr = setInterval(function () { o.s = 1; sw.prototype.swc(o); }, o.tm) });
                }
            o.p = C.Gs(o, "p")[0];
            o.ls = C.Gs(o.p, "a");
            o.aw = o.ls[0].offsetWidth;

            var cs = C.Gs(o, "a"),
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
          }
          else if (o.ci >= o.ls.length)
          {
              o.ci = 0;
          }
          o.a = o.ls[o.ci];
          o.img = C.Gs(o.a, "img")[0];
         // sw.prototype.ts(o.p);
         // var ls = C.Gs(o.p, "a"),
            //  fst = ls[0],
             // lst = ls[o.ls.length - 1],
             // ma = fst;
          if (o.s > 0)
          {
              console.log('向右',o.s)
             /* C.AddClass(ma, "w5Animate")
              setTimeout(function () {
                  C.DelClass(ma, "w5Animate")
                  o.p.insertBefore(C.Gs(o.p, "a")[o.ls.length - 1], fst);
              }, 4000)*/
          }
          else
          {
              console.log('向左', o.s)
              /*ma = fst;
              
              C.AddClass(ma, "w4Animate")
              setTimeout(function () {
                  C.DelClass(ma, "w4Animate")
                  o.p.appendChild(fst);
                  //o.p.insertBefore(C.Gs(o.p, "a")[o.ls.length - 1], fst);
              }, 4000)
              */
          }
          this.mv(o);
      },
        /*移动*/
      mv: function (o) {
          var cf = C.Gs(o.p, "a")[0];
         /* if (Math.abs(cf.ml) > o.aw)
          {
              cf.style.marginLeft = "0";
                o.p.appendChild(cf);
          }
          cf.style.marginLeft = (cf.ml + o.s) + "px"*/

          var ms = 5;
          var step = function () {
              cf.ml = parseInt(cf.style.marginLeft) || 0;
             if (Math.abs(cf.ml) < o.aw) {
                 cf.style.marginLeft = (cf.ml + o.s) + "px"
                 setTimeout(step, ms);
             }
              else{
                 cf.style.marginLeft = "0";
                 if(o.s==1)
                      o.p.insertBefore(C.Gs(o.p, "a")[o.ls.length - 1], cf);
                 else
                    o.p.appendChild(cf);
             }
         };
          setTimeout(step, ms);

      },
        /*半透明渐变*/
      ts:function (o,ms) {
          var s = 0,
           step = function () {
               o.style.opacity = s / 100;
               if (!o.style.opacity)
               o.style.filter = 'alpha(opacity=' + s + ')';
               if (s < 100) {
                   s ++;
                   setTimeout(step, ms);
               }
           };
          setTimeout(step, ms);
      }
    }
    C.Batch();
}

/*tab中：
function (o, s, e, m)//过渡透明效果：o为欲透明对象；透明度级别从1－100，s为起始值；e为始束值;m是执行周期（毫秒）
      {
          o.ft = setInterval(function () {
              s = s + 2;
              if (s <= e) {
                  o.style.opacity = s / 100;
                  if(!o.style.opacity)
                      o.filters.alpha.opacity += s;
              }
              else {
                  o.style.opacity = 1;
                  if (!o.style.opacity)
                      o.filters.alpha.opacity = 100;
              }
             
          }, m)
      }

        ts: function (o,s,e,m)//过渡透明效果：o为欲透明对象；透明度级别从1－100，s为起始值；e为始束值;m是执行周期（毫秒）
{
    o.tm = setInterval(function ()
    {
        s = s +2;
        if (s<=e)
        {
            o.style.opacity = s / 100;
        }
        else
        {
            o.style.opacity = 1;
            clearInterval(o.tm);
        }
    }, m)
}
};
C.Batch();
}
*/