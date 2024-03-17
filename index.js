//console.log('javascript world');
//console.log('i like pizza');

//console.log('learning javascript');

//window.alert('I like pizza');

//document.getElementById("myh1").textContent = 'Hello';
//document.getElementById('mypara').textContent = 'javascript';
/*let fname = "peter"
let age = 56;
let gpa = 4.40;
let salary = 4500;

let Enrolled = true;

console.log("hello " + fname + " Your age is "  + age + " years");
console.log(typeof fname);

document.getElementById("myh1").textContent
 = "Student Data"
document.getElementById("p1").textContent
 = "Name: " + fname;
 document.getElementById("p2").textContent
 = "Age: " + age;
 document.getElementById("p3").textContent
 = "GPA: " + gpa;
 document.getElementById("p4").textContent
 = "Enrolled: " + Enrolled;
*/
// let Student = 40;

 //Student = Student ** 2;

 //console.log(Student);

 //let username;
 
//document.getElementById("submit").onclick = updateUsername;

// function updateUsername ()
/*{
username = document.getElementById("username").value;
document.getElementById("myh1").textContent = " Hello " + username;
} //username = window.prompt("What is your name?");

 console.log(username);
 
 const PI = 3.142;
 let radius;
 let circumference;
 let ra = 35;

 document.getElementById("submit").onclick = updateans;

 function updateans(){
    radius = document.getElementById("radius").value;
    radius = Number(radius);
    circumference = 2 * radius * PI;
    document.getElementById("ans").textContent = circumference + " cm";
 } 
 console.log(`The circumference is ${circumference}`);*/
 //counter program
 
/* const btnincreaseincrease = document.getElementById("btnincrease");
 const btnreset = document.getElementById("btnreset");
 const btndecrease = document.getElementById("btndecrease");
 
 const counter = document.getElementById("counter");
 let count = 0;
 
 //on button clicks
 btnincrease.onclick = counterIncrease;
 btnreset.onclick = counterReset;
 btndecrease.onclick = counterDecrease;

//functions 
function counterIncrease() {
  count++;
  counter.textContent = count;
}
 function counterReset(){
  count = 0;
counter.textContent = count;
}
function counterDecrease(){
  count--;
counter.textContent = count;
}
 */
 //random no generator
/* const dice = document.getElementById("rolled");
 const count1 = document.getElementById("dice1");
 const count2 = document.getElementById("dice2");
 const count3 = document.getElementById("dice3");
 let min = 1;
 let max = 6;
 let randomNum1;
 let randomNum2;
 let randomNum3;
 // on click
 dice.onclick = rolls;
 
 //function to show random
 function rolls () {
   randomNum1= Math.floor(Math.random() * max) + min;
   randomNum2 = Math.floor(Math.random() * max) + min;
   randomNum3 = Math.floor(Math.random() * max) + min;
   count1.textContent = randomNum1;
   count2.textContent = randomNum2;
   count3.textContent = randomNum3;
 }
 */
 //for check click
/* const subscribe= document.getElementById("subscribe");
 const visa = document.getElementById("visa");
 const mastercard = document.getElementById("mastercard");
 const submitbtn= document.getElementById("submitbtn");
 const info = document.getElementById("info");
 const info2 = document.getElementById("info2");
 
 //if submit clicked
 submitbtn.onclick = result;
 
 //function foe checkaction
 
 function result (){
   info.textContent= !subscribe.checked ? "You did not subscribe!" : "Thanks,you subscribed!";
   if(visa.checked) info2.textContent = "You selected visa for payment";
   if(mastercard.checked) info2.textContent = "You selected mastercard for payment";
 }*/
 
/* let banana = "bola";
 let amount;
 switch(banana)
 {
   case 6:
     amount= 100;
     break;
   case 7:
     amount = 200;
     break;
   default:
   console.log(`${banana} is not a number to get price`);
 }
 console.log(`banana is $${amount}`);
 */
 /*let userName ="fellowBro";
 console.log(userName.length);
 console.log(userName.indexOf("w"));
 console.log(userName.charAt("5"));
 console.log(userName.lastIndexOf("o"));
 userName = userName.trim("B");
 console.log(userName);
 let phoneno = "123-4567-8890";
 phoneno= phoneno.padStart("14",'+');
 console.log(phoneno);
 */
 
 /*let fullName = "kazeem lawal";
 let firstName = fullName.slice("0",fullName.indexOf(" "));
 let lastName= fullName.slice(fullName.indexOf(" ") + 1);
 console.log(firstName);
 console.log(lastName);*/
 /*let fullName = window.prompt("Enter your name");
 let result = fullName.trim().charAt("0").toUpperCase() + fullName.trim().slice(1).toLowerCase();
 console.log(result);*/
 
 //Number guessing game
 /*
 const min = 50;
 const max = 100;
 let answer = Math.floor(Math.random() * (max - min)+ min);
 let guess;
 let attempt= 0;
 let running = true;
 
 while(running)
 {
   guess = window.prompt(`Guess a number between ${min} & ${max}`);
   guess = Number(guess);
   if(isNaN(guess))
   {
   window.alert("Enter a vilad Number!");
   }
 else if(guess < min || guess > max)
 {
   window.alert("Your input is out of range!");
 }
 else 
 {
   attempt++;
   if(guess < answer)
   {
     window.alert("GUESS TOO LOW!. try again");
   }
  else if(guess > answer)
   { 
     window.alert("GUESS TOO HIGH!. try again");
   }
   else
   {
     window.alert(`congrats you WIN ! at ${attempt} attempt`);
     running = false;
   }
 }
 }
*/

//check if domain or email is valid
/*let email;
let login = false;

while(!login)
{
  email = window.prompt("Enter your .com domain:");
  if(!email.includes(".com"))
  {
    window.alert("invalid domain");
  }
  else
  {
    window.alert(`you are logged in. your domain ${email}`);
    login = true;
  }
}
*/
/*const textbox = document.getElementById("textbox");
const farenheit = document.getElementById("farenheit");
const celsius= document.getElementById("celsius");
const result = document.getElementById("result");
let temp;

function convert()
{
  if(farenheit.checked)
  {
    temp = Number(textbox.value);
   temp =( temp * 9/ 5) + 32;
    result.textContent = temp.toFixed(1) + "°C";
  }
  else if(celsius.checked)
  {
    temp= Number(textbox.value);
    temp = (temp - 32) * (5/9);
    result.textContent = temp.toFixed(1) + "°F";
  }
  else
  {
    result.textContent ="Select a unit";
  }
*/
//Dice Roller

function rolldice(){
  const diceno = document.getElementById("diceno");
const diceresult = document.getElementById("diceresult");
const diceimg = document.getElementById("diceimg");
const Values = [] ;
const Diceimg =[];

  for(let i = 0; i < diceno.value; ++i)
  {
    const value = Math.floor(Math.random() * 6 + 1);
    Values.push(value);
    Diceimg.push(`<img src="assets/${value}.png" alt="Dice${value}">`);
  }
diceresult.textContent =`Dice: ${Values.join(', ')}`;
diceimg.innerHTML=`${Diceimg.join('')}`;
}
