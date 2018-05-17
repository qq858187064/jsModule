(function tracer() {
	tracer.errors=[];
	if(typeof tracer.init == "undefined")
	{
	    tracer.prototype.init=function(){
        /*window异常监听*/
	        window.onerror = function (msg, url, line, col, er) {
	            var e = [
                    ["异常类型", er.name],
                    ["异常信息", er.message],
                    ["异常文件", url],
                    ["异常行号", line],
                    ["异常列号", col]
	            ];
	            tracer.errors.push(e);
				
				setTimeout(function(){
					if(tracer.errors.length>0)
					{
						/*异常上报*/
						var o={
							errors:tracer.errors,
							device:tracer.device
						}
						var aa = {
						    logtype:1,
                            data:["1","3","5"]
						};
                        
						console.log(JSON.stringify(o));
						P.post("/report/realtime/log/data", aa, function (d) {
						    console.log(d);
						}, function (d) {
						    console.log(d);
						});

     /*
					    
                           C.EXHR(function(o){
                               console.log(o)
                           }, "POST", "/klian/report/realtime/log/data", o);
                          // "&t=mm&v=@a0`" + fid + "&n=id,pid";
                          
                  
                       
                           $http.post('/klapi/report/realtime/log/data', {
                               uid: parseInt(uid),
                               logtype: parseInt(logtype),
                               source: parseInt(source)
                           }).success(function (data) {
                               if (data.ret != 1) {
                                   alert(data.msg);
                                   return;
                               }
                               alert('成功');
                               $route.reload();
                           });
                       
                        */



				
				
				}
				tracer.errors=[];
					
					
				},3000);
	        };
			
	    };
		/*用户设备信息*/
tracer.prototype.ua=function(){
    var n = navigator,
		 a = [
				["操作系统", n.platform],
				["浏览器", n.appName],
				["版本", n.appVersion],
				 //["代码", n.appCodeName],
				["Cookies 启用", n.cookieEnabled],
				["用户代理userAgent", n.userAgent]
		 ];
    return a;
};
/*图片异常监听*/
tracer.prototype.imger=function(){
    var i = document.images;
    for(var n=0;n<i.length;n++)
    {
        var ci = i[n];
        
        ci.onerror = function () {
            return function (o) {
                console.log("ci.src：" + ci.src);
                //img.onerror = null;
            }();
        }(ci);
    }
};
/*错误上传*/
        tracer.prototype.up = function (e) {
			 /*
	c.EXHR(function(o){
		console.log(e)
		//
	}, "POST", "/klapi/report/realtime/log/data", e);
    "&t=mm&v=@a0`" + fid + "&n=id,pid";
   


    $http.post('/klapi/report/realtime/log/data', {
	    uid: parseInt(uid),
	    logtype: parseInt(logtype),
	    source: parseInt(source)
	}).success(function (data) {
	    if (data.ret != 1) {
	        alert(data.msg);
	        return;
	    }
	    alert('成功');
	    $route.reload();
	});

 */
        };
		tracer.device=tracer.prototype.ua();
		tracer.prototype.init();
        tracer.init = true;
    }
	//this.o.device=tracer.prototype.ua();
}())