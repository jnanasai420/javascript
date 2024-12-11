//Voting Eligibility
var name = prompt("Enter your name :");
var age = prompt("Enter your age :");
if (age >= 18) {
  console.log(name, "you are eligible to vote");
} else {
  console.log(name, "you are not elegible to vote");
}

//Marriage Eligibility
var name1 = prompt("Enter your name :");
var gender = prompt("Enter your gender male or female :");
var age1 = prompt("Enter your age :");

if (gender == "male") {
  var gender = confirm("Confirm that your are male.");
  if (age1 >= 22) {
    console.log(name1, " You are eleigible for marriare.");
  } else {
    console.log(name1, "you are not eligible for marriage.");
  }
} else {
  var gender = confirm("Confirm that your are Female.");
  if (age1 >= 18) {
    console.log(name1, " You are eleigible for marriare.");
  } else {
    console.log(name1, "you are not eligible for marriage.");
  }
}

//Driving License Eligibility
var name2 = prompt("Enter your name :");
var age2 = prompt("Enter your age :");
if (age2 >= 18) {
  console.log(name2, "you are eligible to apply for driving licence.");
} else {
  console.log(name2, "you are noteligible to apply for driving licence.");
}

//Exam Eligibility
var name3 = prompt("Enter your name :");
var Attendence = prompt("Enter your attendence percentage:");
if (Attendence >= 75) {
  console.log(name3, "you are eligible to appear for the exam.");
} else {
  console.log(name3, "you are noteligible to appear for the exam.");
}

//Senior Citizen Discount Eligibility
var name4 = prompt("Enter your name :");
var age3 = prompt("Enter your age :");
if (age3 >= 60) {
  console.log(name4, "you are eligible for senior citizen discount..");
} else {
  console.log(name4, "you are noteligible for senior citizen discount.");
}
