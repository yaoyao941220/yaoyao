/**
 * Created by YSD on 2017/4/1.
 */
var index=1;
var time;

time=window.setInterval("show()",2000);

function show(id) {
    if(Number(id)){
        clearInterval(time);
    }else{
        index=index%5+1;
    }
    document.getElementById("Pic").setAttribute("src","image/Img"+index+".jpg");
    var lis=document.getElementsByTagName("li");
    for(var i=0;i<5;i++){
        lis[i].setAttribute("class","scroll_number_out");
        if(index==i+1){
            lis[i].setAttribute("class","scroll_number_over");
        }

    }
}
function start() {
    time=window.setInterval("show()",2000);
}
