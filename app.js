document.writeln("Hello World")
document.writeln("<h1>Hello World</h1>")

console.log("Hello World")

// alert("Hello World");

// x=confirm("Are you sure to visit website");
// console.log(x)

// a=prompt("Enter first number");
// b=prompt("Enter second number"); //add the numbers like string 2334

// sum=a+b;2
// console.log(sum)

age=prompt("Enter your age");

if(age>=18){
  is_having_voterId=confirm("Do you have voter id");

  if(is_having_voterId){
    console.log("You can vote")
  }
  else{
  console.log("You cannot vote")
  }
}
  else{
    console.log("You are not eligible for vote")
  }


