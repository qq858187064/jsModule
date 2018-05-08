function Rba()
{
}
//    /* 隐藏元素 */
//    Hide: function (Id)
//    {
//        var oE = C.G(Id),
//        H = oE.offsetHeight;
//        if (H > 0)
//        {
//            H--;
//        }
//        else
//        {
//            return;
//        }
//        oE.style.height = H + "px";
//        setTimeout(function () { C.Hide(Id) }, 100);
//    },

//    /* 显示元素 */
//    Show: function (Id)
//    {
//        var oE = C.G(Id),
//        Max = parseInt(Id.substring(2));
//        oE.style.height = !oE.style.height ? "0px" : oE.style.height;
//        Ch = parseInt(oE.style.height.slice(0, -2));
//        if (Ch < Max)
//        {
//            Ch++;
//            oE.style.height = Ch + "px";
//            setTimeout(function () { C.Show(Id) }, 0);
//        }
//    },