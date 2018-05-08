function Fixed(Cid, X, Y)
{
    //if (window.ActiveXObject && parseInt(navigator.userAgent.toLowerCase().match(/msie ([\d.]+)/)[1].charAt(0)) < 7)
        var Rh = document.documentElement,
                o = C.G(Cid),
                hg = o.offsetTop,
                Cx = X.charAt(0) == "L" ? "left" : "right",
                Cy = Y.charAt(0) == "T" ? "top" : "bottom",
                f = Cid.charAt(Cid.length-1).toLowerCase() == "r" ? fr : fx;
          C.AddEvent(window, "scroll", f, o);
          function fx(e,o)
          {
              o.style.top = Cy == "top" ? Rh.scrollTop + parseInt(Y.substring(1)) : Rh.scrollTop - parseInt(Y.substring(1)) + Rh.offsetHeight - o.offsetHeight
          }
          function fr(e,o)
          {
              var h = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
              if (h > hg)
              {
                  o.style.position = "fixed";
                  o.style.top = "0px";
              }
              else
              {
                  o.style.position = "";
                  o.style.top = "";
              }
          }
}
/*还需要安善*/