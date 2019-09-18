//Create a program that will iterate through //numbers from one to 101 and log each number in //the console.

//In the loop, every time a number is divisible by //three, instead of logging the number itself, the //word "fizz" should appear.

//If the number is divisible by five, the word //"buzz" should be logged.

//If the number is divisible by both three and five,//then the word "fizzbuzz" should be logged.


for (let i=1;i<=101;i++){
  if (i%3===0 && i%5===0){
    console.log("fizzbuzz");
  }
  else if (i % 5===0){
    console.log("buzz");
  }
  else if (i % 3===0){
    console.log("fizz");
  }
  else{
    console.log(i);
  }
}