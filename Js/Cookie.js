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