/**
 * Created by YSD on 2017/4/14.
 */
var tips=document.getElementsByClassName("tips")[0];
var mydiv=document.getElementById("mydiv")[0];

var timediv=setTimeout(function () {
    mydiv.style.display="none";
},2000);

tips.onmouseover=function () {
    mydiv.style.display="block";
};

tips.onmouseout=function () {
    timediv();
};


mydiv.onmouseover=function () {
    clearTimeout(timediv);
    mydiv.style.display="block";
};

mydiv.onmouseout=function () {
    mydiv.style.display="none";
};
