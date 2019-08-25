/*
qin 20190722
  k:key,键；v:value,值；e:expire,过期时间，单位：分钟。
  存储介质可根据情况切换：cookie、localStorage sessionStorage.......暂时使用localStorage
  */
var stor = {
  s: {},
  get: function (k) {
    var o = localStorage.getItem(k);
    if (this.s[k] && this.s[k].e >= Date.now() / 1000) {
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