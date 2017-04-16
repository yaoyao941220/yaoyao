function changeB(){
	document.getElementById("colorB").style.borderColor="#000";
	document.getElementById("colorH").style.borderColor="#ccc";
	document.getElementById("colorW").style.borderColor="#ccc";
}
function changeH(){
	document.getElementById("colorH").style.borderColor="#000";
	document.getElementById("colorB").style.borderColor="#ccc";
	document.getElementById("colorW").style.borderColor="#ccc";
}
function changeW(){
	document.getElementById("colorW").style.borderColor="#000";
	document.getElementById("colorB").style.borderColor="#ccc";
	document.getElementById("colorH").style.borderColor="#ccc";
}
/*改变尺寸*/
function changeSizeS(){
	document.getElementById("sizeS").className="size-focuse";
	document.getElementById("sizeM").className="";	
	document.getElementById("sizeL").className="";	
	document.getElementById("sizeXL").className="";	
	document.getElementById("sizeInfo").innerHTML="腰围98CM";
}
function changeSizeM(){
	document.getElementById("sizeM").className="size-focuse";
	document.getElementById("sizeS").className="";	
	document.getElementById("sizeL").className="";	
	document.getElementById("sizeXL").className="";	
	document.getElementById("sizeInfo").innerHTML="腰围102CM";
}
function changeSizeL(){
	document.getElementById("sizeL").className="size-focuse";
	document.getElementById("sizeM").className="";	
	document.getElementById("sizeS").className="";	
	document.getElementById("sizeXL").className="";	
	document.getElementById("sizeInfo").innerHTML="腰围104CM";
}
function changeSizeXL(){
	document.getElementById("sizeXL").className="size-focuse";
	document.getElementById("sizeM").className="";	
	document.getElementById("sizeL").className="";	
	document.getElementById("sizeS").className="";	
	document.getElementById("sizeInfo").innerHTML="腰围106CM";
}

/*数量加*/
function addNum(){
	document.getElementById("minusNum").style.color="#000";
	var num=document.getElementById("num").innerHTML;
	num++;
	document.getElementById("num").innerHTML=num;
	
}
function minusNum(){
		var num=document.getElementById("num").innerHTML;
		if(num>1){
			num--;
			document.getElementById("num").innerHTML=num;
		}
		if(num==1){
			document.getElementById("minusNum").style.color="#b0b0b0";
		}
		
}
/*修改图片*/
function changeImg1(){
	document.getElementById("smallImg1").className="thumb active";	
	document.getElementById("smallImg2").className="thumb";	
	document.getElementById("smallImg3").className="thumb";	
	document.getElementById("bigImg").src="image/大图1.jpg";
	document.getElementById("b_bimg").style.backgroundImage="url(image/veryBig1.jpg)";
}
function changeImg2(){
	document.getElementById("smallImg2").className="thumb active";	
	document.getElementById("smallImg1").className="thumb";	
	document.getElementById("smallImg3").className="thumb";	
	document.getElementById("bigImg").src="image/大图2.jpg";
	document.getElementById("b_bimg").style.backgroundImage="url(image/veryBig2.jpg)";
}
function changeImg3(){
	document.getElementById("smallImg3").className="thumb active";	
	document.getElementById("smallImg2").className="thumb";	
	document.getElementById("smallImg1").className="thumb";	
	document.getElementById("bigImg").src="image/大图3.jpg";
	document.getElementById("b_bimg").style.backgroundImage="url(image/veryBig3.jpg)";
}

function bigimg(){
	  var bbox = document.getElementById("minImg");
	  var bmove = document.getElementById("magnifier");
	  var bbimg = document.getElementById("bimg");
	  var b_bimg = document.getElementById("b_bimg");
  bbox.onmouseover = function(){//鼠标移动到box上显示大图片和选框
		bbimg.style.display = "block";
		bmove.style.display="block";
	  }
  bbox.onmouseout = function(){//鼠标移开box不显示大图片和选框
		bbimg.style.display = "none";
		bmove.style.display="none";
  }
  bbox.onmousemove = function(e){//获取鼠标位置
    var x = e.clientX;//鼠标相对于视口的位置
    var y = e.clientY;
    var t = bbox.offsetTop;//box相对于视口的位置
    var l = bbox.offsetLeft;
    var _left = x - l - bmove.offsetWidth/2;//计算move的位置
    var _top = y - t -bmove.offsetHeight/2;
    if(_top<=0)//滑到box的最顶部
      _top = 0;
    else if(_top>=bbox.offsetHeight-bmove.offsetHeight-5)//滑到box的最底部
      _top = bbox.offsetHeight-bmove.offsetHeight-5 ;
    if(_left<=0)//滑到box的最左边
      _left=0;
    else if(_left>=bbox.offsetWidth-bmove.offsetWidth)//滑到box的最右边
      _left=bbox.offsetWidth-bmove.offsetWidth ;
    bmove.style.top = _top +"px";//设置move的位置
    bmove.style.left = _left + "px";
    var w = _left/(bbox.offsetWidth-bmove.offsetWidth); 
    var h = _top/(bbox.offsetHeight-bmove.offsetHeight);
    var b_bimg_top = (b_bimg.offsetHeight-bbimg.offsetHeight)*h*112;//计算大图的位置   比例严重不够
    var b_bimg_left = (b_bimg.offsetWidth-bbimg.offsetWidth)*w*48;
   // b_bimg.style.top = -b_bimg_top + "px";//设置大图的位置信息
   // b_bimg.style.left = -b_bimg_left + "px";
	b_bimg.style.backgroundPosition=b_bimg_left+"px "+b_bimg_top+"px";
	//console.log("左："+x+"==上："+y);
  }
}
