var n=2;
function square(num){
  var ans  = num *num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);
console.log(square2);
console.log(square4);


var x=7;
function getName(){
  console.log('Hello JavaScript')
}
getName();
console.log(x);



var y=1;
a();
b();
console.log(y);

function a(){
  var y=10
  console.log(y);
}

function b(){
  var y=100;
  console.log(y)
}