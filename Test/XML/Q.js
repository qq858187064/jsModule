function GDt()
{
    var Ts=document.getElementsByTagName("dt");
    for(var i=0;i<Ts.length;i++)
    {
        Ts[i].getElementsByTagName("a")[0].onclick=function(){Sc(this);};
    }
}
function Sc(FA)
{
    var Ds=FA.parentNode.parentNode.getElementsByTagName("dd");
        for(var i=0;i<Ds.length;i++)
        {
            if(Ds[i].style.display=="block")
            {
                Ds[i].removeAttributeNode(Ds[i].attributes["style"]);//For Chromium
                Ds[i].removeAttribute("style");
                FA.removeAttribute("className");// For IE
                FA.removeAttribute("class");
            }
            else
            {
                Ds[i].style.display="block";
                FA.className="CM";
            }
        }
}
window.onload=GDt;