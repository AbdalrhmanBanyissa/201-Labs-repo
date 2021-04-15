/* eslint-disable no-unused-vars */
'use strict';

let counter = 0;
let userName = prompt( 'Welcom to my website, What is your name?' );
alert(
  'Hello ' + userName + ', I\'m Abdalrhman and I\'m Very happy to have you, I wanna play with you a very quich game, All I want you to do is answer my questions by yes or no okay?'
);

alert( 'Good luck buddy' );

// Q#1
let nameQuestion = prompt( 'My name is Abdalrhman?' ).toLowerCase();
while ( nameQuestion !== 'yes' && nameQuestion !== 'y' && nameQuestion !== 'no' && nameQuestion !== 'n' ) {
  nameQuestion = prompt( ' Please answer with (Yes or Y) and (No or N) ' ).toLowerCase();
}
console.log( nameQuestion );

if ( nameQuestion === 'yes' || nameQuestion === 'y' ) {
  counter += 2;
  alert( 'Bravo, but trust me this is just a warm-up, now let\'s talk :D' );
} else {

  alert( ' Whaaat!!! loool that\'s one is funny hahahahahahahaha' );
}

// Q#2
let backgroundQuestion = prompt( 'my cv logo background color is red?' ).toLowerCase();
while ( backgroundQuestion !== 'yes' && backgroundQuestion !== 'y' && backgroundQuestion !== 'no' && backgroundQuestion !== 'n' ) {
  backgroundQuestion = prompt( ' Please answer with (Yes or Y) and (No or N) ' ).toLowerCase();
}
console.log( backgroundQuestion );

if ( backgroundQuestion === 'yes' || backgroundQuestion === 'y' ) {

  alert( 'Catch you :p, It\'s Black' );
} else {
  counter += 2;
  alert( 'Bingo, It\'s Black' );
}

// Q#3
let collageQuestion = prompt( 'I graduated from TTU as Mechanical Engineer in 2019?' ).toLowerCase();
while ( collageQuestion !== 'yes' && collageQuestion !== 'y' && collageQuestion !== 'no' && collageQuestion !== 'n' ) {
  collageQuestion = prompt( ' Please answer with (Yes or Y) and (No or N) ' ).toLowerCase();
}
console.log( collageQuestion );

if ( collageQuestion === 'yes' || collageQuestion === 'y' ) {
  counter += 2;
  alert( 'That\'s right, actually it was a great summer I got the best graduation party ever ^^' );
} else {

  alert( 'In fact I did :D' );
}

// Q#4
let developerQuestion = prompt( 'I\'m a full-stack developer and works as an instructor in ASAC?' ).toLowerCase();
while ( developerQuestion !== 'yes' && developerQuestion !== 'y' && developerQuestion !== 'no' && developerQuestion !== 'n' ) {
  developerQuestion = prompt( ' Please answer with (Yes or Y) and (No or N) ' ).toLowerCase();
}
console.log( developerQuestion );

if ( developerQuestion === 'yes' || developerQuestion === 'y' ) {

  alert( 'Wrong! I\'m a full-stack development student in ASAC' );
} else {
  counter += 2;
  alert( 'That\'s right, I\'m studing software development in ASAC' );
}

// Q#5
let workQuestion = prompt( 'I worked in microelectronics feild as a team leader?' ).toLowerCase();
while ( workQuestion !== 'yes' && workQuestion !== 'y' && workQuestion !== 'no' && workQuestion !== 'n' ) {
  workQuestion = prompt( ' Please answer with (Yes or Y) and (No or N) ' ).toLowerCase();
}
console.log( workQuestion );

if ( workQuestion === 'yes' || workQuestion === 'y' ) {
  counter += 2;
  alert( 'That\'s right, and it was fantastic experiment' );
} else {
  alert( 'No sir I did and honestly it was a great experiment' );
}


// Q#6
let i = 0;

let guessingGame = prompt( 'Okay, Now I want to play with you a guessing Game, \n In the below dialog box I want you to guess the secret number that I got in my mind. hint: use the number domain between (1 - 100)', '1-100' );
console.log( guessingGame );

for ( i = 1; i < 4; i++ ) {
  if ( guessingGame < 1 ) {
    guessingGame = prompt( 'You entered wrong value, please enter a number between 1 and 100' );
    console.log( guessingGame );
  } else if ( guessingGame > 100 ) {
    guessingGame = prompt( 'You entered wrong value, please enter a number between 1 and 100' );
    console.log( guessingGame );
  } else if ( guessingGame >= 1 && guessingGame <= 25 ) {
    guessingGame = prompt( 'That was too low choise :D' );
    console.log( guessingGame );
  } else if ( guessingGame > 75 && guessingGame <= 100 ) {
    guessingGame = prompt( 'That was too high choise :D' );
    console.log( guessingGame );
  } else if ( guessingGame > 25 && guessingGame < 75 ) {
    guessingGame = prompt( 'That was close, but it\'s not right :P' );
    console.log( guessingGame );
  } else if ( guessingGame === '75' ) {
    alert( 'You are the master of the guessing game ^_^, 75 is the right answer' );
    counter += 2;
    break;
  } else {
    guessingGame = prompt( 'not a words not an emojis only numbers please' );
    console.log( guessingGame );
  }
}

if ( i === 4 && guessingGame === '75' ) { alert( 'You are the master of the guessing game ^_^, 75 is the right answer' ); counter += 2; }
if ( guessingGame !== '75' ) {
  alert( 'Oobs, You run out of attempts and I beat you in my guessing game :D, the right answer is 75 ' );
}


// Q#7

let guessingGamePart2 = prompt( 'Now I want you to choose my favorite lunch. Hint: I probably like more than one dish. ',
  'Mansaf, Maqluba, Kabsa, Grape leaves(Dwali), Shawarma, Burger, Fish, Grills' ).toLowerCase();

let myFavorateLunch = ['mansaf', 'burger', 'grills'];
for ( i = 1; i < 6; i++ ) {
  if ( guessingGamePart2 !== myFavorateLunch[0] && guessingGamePart2 !== myFavorateLunch[1] && guessingGamePart2 !== myFavorateLunch[2] ) {
    guessingGamePart2 = prompt( 'Nop, try again', 'Mansaf, Maqluba, Kabsa, Grape leaves(Dwali), Shawarma, Burger, Fish, Grills' ).toLowerCase();
    console.log( guessingGamePart2 );
  }
}

if ( guessingGamePart2 === myFavorateLunch[0] || guessingGamePart2 === myFavorateLunch[1] || guessingGamePart2 === myFavorateLunch[2] ) {
  alert( 'That\'s right, I really like ' + myFavorateLunch[0] + ' and ' + myFavorateLunch[1] + ' and ' + myFavorateLunch[2] + ', They are the best' );
  counter += 2;
}

switchFunction( counter );

alert( 'Thank you '+userName+' for visiting, \n I am looking for your visit again because I really enjoy it, \n and I hope you enjoyed my annoying questions sorry for that :D. \n Thanks again and now I will leave you with my cv.' );



function switchFunction ( x ){
  switch( counter ) {
  case 14:
    alert( ' YAAAY! You answered all the  7 questions correctly, Good job. You\'r score is 14/14 ' );
    break;
  case 12:
    alert( ' WOw! You answered  6 of 7 questions correctly, Good job. You\'r score is 12/14 ' );
    break;
  case 10:
    alert( ' Great! You answered  5 of 7 questions correctly, Good job. You\'r score is 10/14 ' );
    break;
  case 8:
    alert( ' Good job! You answered  4 of 7 questions correctly, You\'r score is 8/14 ' );
    break;
  case 6:
    alert( ' Unlucky! You answered  3 of 7 questions correctly, You\'r score is 6/14 ' );
    break;
  case 4:
    alert( '  obs! You answered  2 of 7 questions correctly, You\'r score is 4/14 ' );
    break;
  case 2:
    alert( '   You only answered  1 of 7 questions correctly, You\'r score is 2/14 ' );
    break;
  default:
    alert( '  Whaat!! You  answered  0 of 7 questions correctly, You\'r score is 0/14 lol ' );
  }
}

