var aa = C.Gs(document, "a", true).concat(C.Gs(document, "area", true));
for (var i = 0; i < aa.length; i++) {
    var a = aa[i],
        sj = a.href.startsWith("javascript:");
    isj = a.href.endsWith("#") || a.href.endsWith("&") || sj;
    if (!isj || a.tagName == "area")
        a.target = "_blank";
    // if (isj && !sj) {
    //    C.DelAttr(a, "href");
    //}
}