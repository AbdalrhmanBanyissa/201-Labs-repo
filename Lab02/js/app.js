'use strict';

let counter = 0;
let userName = prompt( 'Welcom to my website, What is your name?' );
alert(
  'Hello ' + userName + ', I\'m Abdalrhman and I\'m Very happy to have you, I wanna play with you a very quich game, All I want you to do is answer my questions by yes or no okay?'
);

alert( 'Good luck buddy' );

// Q#1
let nameQuestion = prompt( 'My name is Abdalrhman?' ).toLowerCase();
// console.log( nameQuestion );

if ( nameQuestion === 'yes' || nameQuestion === 'y' ) {
  counter+=2;
  alert( 'Bravo, but trust me this is just a warm-up, now let\'s talk :D' );
} else {

  alert( ' Whaaat!!! loool that\'s one is funny hahahahahahahaha' );
}

// Q#2
let backgroundQuestion = prompt( 'my cv logo background color is red?' ).toLowerCase();
// console.log( backgroundQuestion );

if ( backgroundQuestion === 'yes' || backgroundQuestion === 'y' ) {

  alert( 'Catch you :p, It\'s Black' );
} else {
  counter+=2;
  alert( 'Bingo, It\'s Black' );
}

// Q#3
let collageQuestion = prompt( 'I graduated from TTU as Mechanical Engineer in 2019?' ).toLowerCase();
// console.log( collageQuestion );

if ( collageQuestion === 'yes' || collageQuestion === 'y' ) {
  counter+=2;
  alert( 'That\'s right, actually it was a great summer I got the best graduation party ever ^^' );
} else {

  alert( 'In fact I did :D' );
}

// Q#4
let developerQuestion = prompt( 'I\'m a full-stack developer and works as an instructor in ASAC?' ).toLowerCase();
// console.log( developerQuestion );

if ( developerQuestion === 'yes' || developerQuestion === 'y' ) {

  alert( 'Wrong! I\'m a full-stack development student in ASAC' );
} else {
  counter+=2;
  alert( 'That\'s right, I\'m studing software development in ASAC' );
}

// Q#5
let workQuestion = prompt( 'I worked in microelectronics feild as a team leader?' ).toLowerCase();
// console.log( workQuestion );

if ( workQuestion === 'yes' || workQuestion === 'y' ) {
  counter+=2;
  alert( 'That\'s right, and it was fantastic experiment' );
} else {
  alert( 'No sir I did and honestly it was a great experiment' );
}

switch( counter ) {
case 10:
  alert( ' YAAAY! You answered all the 5 questions correctly, Good job. ' );
  break;
case 8:
  alert( ' Great! You answered 4 of 5 questions correctly, Good job. ' );
  break;
case 6:
  alert( ' Good job! You answered 3 of 5 questions correctly. ' );
  break;
case 4:
  alert( '  You answered 2 of 5 questions correctly. You are not lucky today :p ' );
  break;
case 2:
  alert( '  You answered 1 of 5 questions correctly. You need to read my cv first I think :D ' );
  break;
default:
  alert( '  You answered 0 of 5 questions correctly. Try again dude :/ lol ' );
}

alert( 'Thank you '+userName+' for visiting, \n I am looking for your visit again because I really enjoy it, \n and I hope you enjoyed my annoying questions sorry for that :D. \n Thanks again and now I will leave you with my cv.' );
