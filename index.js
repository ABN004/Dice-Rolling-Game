var player1=prompt("Enter Player1 Name");
var player2=prompt("Enter Player2 Name");
document.querySelector(".p1").innerHTML=player1;
document.querySelector(".p2").innerHTML=player2;
document.querySelector(".btn").addEventListener("click",function(){
var randomNumber1= Math.floor((Math.random()*6)+1);
var randomNumber2= Math.floor((Math.random()*6)+1);
var randomDiceImg1="images/"+"dice"+randomNumber1+".png";
var randomDiceImg2="images/"+"dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src",randomDiceImg1);
document.querySelector(".img2").setAttribute("src",randomDiceImg2);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="WooHooo.... "+player1+" Wins🏴";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="WooHooo.... "+player2+" Wins🏴";
}
else{
  document.querySelector("h1").innerHTML="Wow... It's a Tie";
}
document.querySelector(".btn").innerHTML="Play Again";
})

// // var tweet = prompt("Enter your tweet");
// // var tweetLn = tweet.length;
// // alert("You have entered "+ tweetLn +" Charecters and "+(140-tweetLn)+ " charecters left");

// // // var comment = prompt("Enter your comment");
// // // var comment140 = comment.slice(0,140);
// // // // alert(comment140);
// // // // alert(prompt("Enter your comment").slice(0,140));
// // // var name = prompt("What is your name");
// // // // var l = name.length;
// // // // var firstL = name.slice(0,1);
// // // // alert("Hello " + firstL.toUpperCase() + name.slice(1,l).toLowerCase());
// // // var dogAge = prompt("Enter your Dog Age");
// // // var humanAge = (dogAge-2)*4+21;
// // // alert("If your Dog was a Human, Its age will be "+ humanAge);
// // // var n = Math.random();
// // // alert(Math.floor(n*6)+1);
// // var yourName = prompt("Enter your name");
// // var loverName = prompt("Enter your lover name");
// // var love = Math.floor((Math.random()*100));
// // alert("You guys have "+ love + "% match ");
// isLeap(prompt("Enter the year"));
// function isLeap(year) {

//     if(year%4==0)
//     {
//         console.log("Leap year.");
//     }
//     else if(year%100==0)
//     {
//        if(year%400==0)
//        {
//            console.log("Leap year.");
//        }
//        else{
//            console.log("Not leap year.");
//        }
//     }
//     else{
//         console.log("Not leap year.");
//     }


// // }
// var guestList = ["Amal","Amaldev","Arun","Shambhu","Akki"];
// var guestName = prompt("Enter the name")
// if (guestList.includes(guestName))
// {
//     alert("Welcome");
// // }else{
// //     alert("Sorry may be next time");
// // }
// // var output = [];
// // var count = 1;
// //  function fizzBuzz() {
// //      if(count%3===0)
// //      {  if(count%5===0)
// //      {
// //         output.push("FizzBuzz");
// //      }else{
// //         output.push("Fizz");
// //      }
// //      }
// //       else if(count%5===0)
// //      {
// //          output.push("Buzz");
// //       }else{
// //          output.push(count);
// //       }

// //      count++;
// //      alert(output);

// //  }
// // fizzBuzz();
// // fizzBuzz();
// // fizzBuzz();
// // fizzBuzz();
// // fizzBuzz();
// // fizzBuzz();
// // fizzBuzz();
// // fizzBuzz();
// // fizzBuzz();
// // fizzBuzz();
// // fizzBuzz();
// // fizzBuzz();
// // fizzBuzz();
// // fizzBuzz();
// // fizzBuzz();
// // fizzBuzz();
// // fizzBuzz();
// // fizzBuzz();
// // fizzBuzz();
// // fizzBuzz();
// // fizzBuzz();
// // fizzBuzz();
// // fizzBuzz();
// // fizzBuzz();
// function whosPaying(name) {

// /******Don't change the code above*******/

//     //Write your code here.
//  var num = name.length;
//  var pick = Math.floor(Math.random()*num);
// alert(name[pick]+" is going to buy lunch today!");





// /******Don't change the code below*******/
// }
// var namess= ["Amal", "Amaldev","Shambhu","Arun"];

// whosPaying(namess);
//
// function fibonacciGenerator (n) {
//
//     var output = [];
//     if(n===1){
//         output=[0];
//     }
//     else if(n===2){
//         output = [0,1];
//     }
//     else{
//         output = [0,1];
//         for(var i = 2; i<n; i++)
//         {
//             output.push(output[output.length-1]+output[output.length-2]);
//         }
//     }
//     return output;
//
// }
//
// var result = fibonacciGenerator (10);
// alert(result);
