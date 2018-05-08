function Cookie(key, value, expires, path, domain, secure, raw)
{
    if (arguments.length > 1 && String(value) !== "[object Object]")
    {
        if (value === null || value === undefined)
        {
            expires = -1;
        }
        if (typeof expires === 'number')
        {
            var days = expires, t = expires = new Date();
            t.setDate(t.getDate() + days);
        }
        // value = String(value);
        //var s = document.cookie.indexOf(key);
        //if (s > -1 )
        //{
        //    //var b=/key\=.*;/.test(document.cookie);
        //    //document.cookie = document.cookie.replace(/key=.*;/, "");
        //}
        return document.cookie = [
            encodeURIComponent(key), '=',
           raw ? value : encodeURIComponent(value),
           expires ? '; expires=' + expires.toUTCString() : '',
           path ? '; path=' + path : '; path=/',
           //path ? '; path=' + path : '; path=/',
           domain ? '; domain=' + domain : '',
           secure ? '; secure' : ''
        ].join('');
    }
    var result, decode = raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
}
/*
function delCookie(name) 
{ 
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval=getCookie(name); 
    if(cval!=null) 
        document.cookie= name + "="+cval+";expires="+exp.toGMTString()+“;path=/”; 
} 

function delCookie(name){//为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
   var date = new Date();
   date.setTime(date.getTime() - 10000);
   document.cookie = name + "=a; expires=" + date.toGMTString();
}


//设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
//获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
//清除cookie  
function clearCookie(name) {  
    setCookie(name, "", -1);  
}  
*/