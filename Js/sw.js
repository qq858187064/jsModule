/*自动特效：
            ef:
                1:移动切换；ms:每移动1像素的时间间隔，如ms:5
                2：透明渐变切换；每1/100透明度切换的时间间隔
                3：Y轴3D旋转
            efm:效果切换时长，单位：毫秒；该值须与css是动画持续时间一致
            ms:停留时长，单位：毫秒；
            dir:移动方向
                1、从左到右；
                -1、从右到左；默认值
            at:自动切换属性，其值代表自动切换时间间隔,单位：毫秒；l
            bn:小圆点标识当前高亮样式名
            ls: 指定要从o中获取的标签名，默认为o本身
            tg:指定标签名，默认为"a"本身

            */
function sw()
{
    sw.prototype = {
        Init: function (o)
        {
            o.pt = C.Pt(o);
            if (o.pt.at > 0)
            {
                o.s = o.pt.dir || 1;
                sw.prototype.ar(o); 
                C.AddEvent(o, "mouseover", sw.prototype.ca,o);
                C.AddEvent(o, "mouseout", sw.prototype.ar,o);
            }
            o.p = o.pt.ls ? C.Gs(o, o.pt.ls)[0] : o;
            if (!o.pt.tg)
            {
                    o.pt.tg="a"
            }
            o.pt.tg ? o.pt.tg : "a"
            o.ls = C.Gs(o.p,o.pt.tg);
            o.bs = C.Gs(o, "i");
            console.log(o.p.tagName,o.ls)

            o.aw = o.ls[0].offsetWidth;
            console.log(o.aw)
            var cs = C.Gs(o, "a"),
                len = o.ls.length;
            if (len < 2) return;
            o.pre = cs[0];
            o.nxt = cs[1];
            o.ci = 0;//Math.floor(len / 2);
            if (o.pt.bn)
            {
                o.lb = o.bs[o.ci];
                C.AddClass(o.lb, o.pt.bn);
            }
            if (o.pre){
            C.AddEvent(o.pre, "click", function () { o.s = -1; sw.prototype.swc(o);});
            C.AddEvent(o.nxt, "click", function () { o.s = 1; sw.prototype.swc(o); });}
        },
        ar: function (o) {
            o.tmr = setInterval(function () {if(!document.hidden)sw.prototype.swc(o); }, o.pt.at);
        },
        ca:function(o)
        {
            clearInterval(o.tmr);
        },
      swc:function(o)
      {
          //effect
		  //o.ci=o.ci+o.s;
		  
          o.ci = o.ci + o.s;
          if (o.ci < 0&&o.s==-1)
          {
              o.ci = o.ls.length - 1;
          }
          else if (o.ci >= o.ls.length)
          {
              o.ci = 0;
          }
          //o.a = o.ls[o.ci];
          //o.img = C.Gs(o.a, "img")[0];

          o.cls = C.Gs(o.p, o.pt.tg);
          o.cf = o.cls[0];//当前第一个
          o.cl = o.cls[o.cls.length - 1];//当前最后一个
          if (o.pt.bn)
          {
			  
              C.DelClass(o.lb, o.pt.bn);
              o.lb = o.bs[o.ci];
              C.AddClass(o.lb, o.pt.bn);
          }
          if(o.pt.ef==1)
              this.mv(o);
          else if (o.pt.ef == 2)
          {
              if (o.s ==1)
                  o.p.appendChild(o.cf);
              else {
                  o.p.insertBefore(o.cl, o.cf)
              }
              this.ts(o)
          }
          else if(o.pt.ef==3)
          {
              C.AddClass(o.cf, "trs")
              setTimeout(function () {
                  C.DelClass(o.cf, "trs")
                  o.p.appendChild(o.cf);
              }, o.pt.efm)
          }
      },
        /*移动切换效果*/
      mv: function (o) {
         o.pt.ms = 0;
          var step = function () {
              if (o.s == 1) {
                 // console.log('向右', o.s)
                  //如果多于视窗可展示数，则先最后一个先移到最前面,并将其margin-left设为负值，使它起始在不可见区域
                  o.cl.style.marginLeft = (parseInt(o.cf.style.marginLeft) || -o.aw) + "px";
                  o.p.insertBefore(o.cl, o.cf);
                  o.cf = o.cl;
              }
              o.cf.ml = parseInt(o.cf.style.marginLeft) || 0;
              var am = Math.abs(o.cf.ml);
              if  ((o.s == -1 && am <= o.aw) || (o.s == 1 && am != 1))
              {
                  o.cf.style.marginLeft = (o.cf.ml + o.s) + "px"
                 //setTimeout(step, o.pt.ms);
             }
              else
              {
                  o.cf.style.marginLeft = "0";
                 if (o.s ==-1)
                 {
                     o.p.appendChild(o.cf);
             }
             }
         };
         setTimeout(step, o.pt.ms);
      },
        /*半透明渐变*/
      ts: function (o) {
          var s = 0,
           step = function () {
               o.p.style.opacity = s / 100;
               if (!o.p.style.opacity)
                   o.p.style.filter = 'alpha(opacity=' + s + ')';
               if (s < 100) {
                   s ++;
                   setTimeout(step, o.pt.ms);
               }
               //else
                 //  o.p.appendChild(C.Gs(o.p, "a")[0]);
           };
          setTimeout(step, o.pt.ms);
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