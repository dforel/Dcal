(function(){
  var leftMove= function(v1,v2){
      return Math.max(decimalLength(v1),decimalLength(v2));
      }

  var decimalLength=function(x) {
        var temp = x.toString().split('.');
        return (temp.length < 2) ? 1 : Math.pow(10, temp[1].length)
    }

  var isNumber=function(v){
    if(typeof v !=='number'){
      console.error("输入的应该是个数字！");
      return false;
    }
    return true;
  }

  Number.prototype.$add=function(v){
    if(!isNumber(v)){return;}
    var times= leftMove(this,v);
    return parseInt(this*times + v*times)/times;
  }

  Number.prototype.$sub=function(v){
    if(!isNumber(v)){return;}
    var times= leftMove(this,v);
    return parseInt(this * times - v * times) / times;
  }

  Number.prototype.$mul=function(v){
    if(!isNumber(v)){return;}
    var ttimes= decimalLength(this);
    var vtimes= decimalLength(v);
    return parseInt(this * ttimes) * parseInt(v * vtimes) / (ttimes*vtimes);
  }

  Number.prototype.$div=function(v){
    if(!isNumber(v)){return;}
    var times= leftMove(this,v);
    return parseInt(this * times) / parseInt(v * times)
  }
})();
