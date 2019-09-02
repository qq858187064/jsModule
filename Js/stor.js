//import C from "./base";

/*
qin 20190722
  k:key,键；v:value,值；e:expire,过期时间，单位：分钟。
  存储介质可根据情况切换：cookie、storage.......暂时使用storage
  */
var stor = {
    s: {},
    get: function (k) {
        var o = localStorage.getItem(k),
        i=this.s[k];
        if (i && (!i.e||i.e >= Date.now() / 1000)) {
            return o;
        }
        else
            this.del(k);
    },
    //增、改
    set: function (k, v, e) {
        localStorage.setItem(k, v);
        stor.s[k] = { v: v, e: Date.now() / 1000 + e * 60 }
    },
    //删
    del: function (k) {
        localStorage.removeItem(k);
        stor.s[k] = null;
    },
    //存储介质处理：cookie、localStorage、sessionStorage
    med: function () {
        //待处理
    }
}
/*
C.export(stor)
if (typeof module === "object" && typeof module.exports === "object") {
  module.exports =o
}
*/