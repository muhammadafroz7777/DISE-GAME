// var user_number = document.getElementById("user_number");
// var random_number = document.getElementById("random_number");
// var result = document.getElementById("result");
// var info_box_result = document.getElementById("info_box_result");
// var win_html = document.getElementById("win");
// var loss_html = document.getElementById("loss");
// var total = document.getElementById("total");
// var msg = document.getElementById("msg");

// var count = 10;
// var win = 0;
// var loss = 0;

// function tryMyLuck(userNumber) {
//   // alert(userNumber);
//   var randomNumber = Math.random() * 6;
//   var ceil = Math.ceil(randomNumber);
//   console.log(ceil);
//   user_number.innerText = userNumber;
//   random_number.innerText = ceil;

//   // total count mein se aik minus krdo
//   total.innerText = --count;
  
//   if (ceil === userNumber) {
//     console.log("user wins");
//     result.innerText = "You won";
//     info_box_result.style.backgroundColor = "Green";
//     result.style.color = "White";
//     // total count mein se aik minus krdo
//     win_html.innerText = ++win;
//   } else {
//     result.innerText = "You Loss";
//     info_box_result.style.backgroundColor = "red";
//     result.style.color = "White";
//     loss_html.innerText = ++loss;
//   }

//   checkResult();
// }

// function checkResult() {
//   if (count == 0) {
//     if (win >= 3) {
//       msg.innerText = "Congrats! You won";
//     } else {
//       msg.innerText = "Sorry! You loss try again";
//     }
//     count = 10;
//     win = 0;
//     loss = 0;
//     total.innerText = count;
//     win_html.innerText = loss;
//     loss_html.innerText = win;
//   }
// }
// <---------------sir code------------>


// ----------------me code--------------

var user_Number = document.getElementById("user_number");
var random_Number = document.getElementById("random_number");
var result = document.getElementById("result");
var info_box_result = document.getElementById("info_box_result");
var total = document.getElementById("total");
var win_html = document.getElementById("win");
var loss_html = document.getElementById("loss");
var msg = document.getElementById("msg");

// console.log(user_Number, random_Number, result, info_box_result, total, win_html, loss_html);

var count = 10;
var win = 0;
var loss = 0;
//  console.log(count, win,loss);

function tryMyLuck(userNumber) {
  var randomNumber = Math.random() * 4;
  var ciel = Math.ceil(randomNumber);
  console.log(ciel);
user_Number.innerText = userNumber;
random_Number.innerText = ciel;
total.innerText = --count;

if(userNumber === ciel){
  result.innerText = "You Win";
  info_box_result.style.backgroundColor = "Green";
  result.style.color = "White";
  win_html.innerText = ++win;

}
else{
  result.innerText = "You Loss";
  info_box_result.style.backgroundColor = "Red";
  result.style.color = "White";
  loss_html.innerText = ++loss;

  
}

checkResult();
}
function checkResult() {
  if(count == 0){
  if(win >= 3){
msg.innerText = "Congratulation You Win This Price";
msg.style.color = "Green";
} 
else{
  msg.innerText = "Sorry You Loss this Price Try Again";
  msg.style.color = "Red";
}
count = 10;
win = 0;
loss = 0;
total.innerText = count;
win_html = win;
loss_html = loss;
}
}
// --------------------------



