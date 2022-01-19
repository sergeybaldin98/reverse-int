module.exports = function reverse (n) {
  var a=Math.abs(n);
    num = String (a);
    var arr = [];
    for (var i = num.length; i>=0; i--){
        arr.push(num[i]);
    }
    str = arr.join('');
    let m = Number (str);
    return m;
}
