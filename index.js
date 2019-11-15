var container = document.getElementsByTagName("section")[0];
var rahmen = document.getElementsByClassName(".container")[0];
var oUl = document.getElementsByTagName("ul")[0];
var uLi = oUl.getElementsByTagName("li");
var oImge = document.getElementsByTagName("img");
var oOl = container.getElementsByTagName("ol")[0];
var oLi = oOl.getElementsByTagName("li");
var buttonD = container.getElementsByClassName(".buttonD")[0];
var oSpan = container.getElementsByTagName("span");
   
         
  //  点击左右按钮事件
  function animate(offset){
    // 获取style.left，是相对左边获取距离
    // style.left获取的是字符串，用parseInt取整转化为数字
      var newLeft = parseInt(oUl.style.left) + offset;
      console.log(newLeft)
      oUl.style.left = newLeft + "px";
     if(newLeft<-2600){
      oUl.style.left = -520 + "px";
     }
     if(newLeft>-520){
      oUl.style.left = -2600+ "px";
     }
  }
  
  oSpan[0].onclick = function(){
    index  -= 1;
    if(index<1){
      index = 5;
    }
    oliShow();
    animate(520);
   
  }
  oSpan[1].onclick = function(){
    index+=1;
    if(index>5){
      index=1;
    }
    oliShow();
    animate(-520);
  
  }

  // 图片自动循环事件
  var timer;
  function play(){
    timer = setInterval(function(){
      oSpan[1].onclick();
    },1500)
  }
  play();
  // 鼠标移入移出事件
  function stop(){
    clearInterval(timer);
  }
 container.onmouseover = stop;
 container.onmouseout = play;

  //  小圆点事件 
  var index = 1;
  function oliShow(){
    for(i = 0;i<oLi.length;i++){
        if(oLi[i].className = "on"){
          oLi[i].className = "";
        }
    }
    oLi[index - 1].className = "on";
    
  }
//  for( let i = 0;i<oLi.length;i++) {
//    oLi[i].onclick = function(){
//      console.log(this);
//      var clickIndex = parseInt(this.getAttribute("index"));
//      var offset = 520*(index-clickIndex);
//      animate(offset);
//      index = clickIndex;
//      oliShow();
//    }
//  }
