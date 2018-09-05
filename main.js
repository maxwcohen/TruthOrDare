var truth = [
  "Who is the most attractive person on the room?",
  "How many sexual partners have you ever had?",
  "How would you rate your oral sex skills 1 to 10?",
  "What’s your favorite type of porn?",
  "Would you kiss the person on your right?",
  "What turns you on the most?",
  "Describe your first time.",
  "How much do you rate your last partner in bed? Why?",
  "What’s your wildest sexual fantasy?",
  "Have you ever faked an orgasm?",
  "Have you ever had a crush on someone in this room?",
  "What’s the wildest thing you have ever done in your life so far?",
  "If you could pick one person in this room to join for a threesome, who would it be?",
  "Would you rather dominate someone or be dominated?",
  "What do you think is the sexiest body part of the opposite sex?",
  "What’s the hottest thing anyone’s ever said to you?",
  "What is a somewhat weird fetish that you would actually try?",
  "What fictional character do you have sexual fantasies about?",
  "Have you ever had sex with more than one person at a time?",
  "Do you have any sex tapes?",
  "What’s the song that turns you on?",
  "Who was your best partner and why?",
  "What sound do you make having sex?",
  "What’s your biggest turn off in a partner?",
  "What’s the perfect first date?",
  "What’s one embarrassing fact we should know about you?",
  "What was your best sexual experience?",
  "What’s the longest time you’ve gone without sex?",
  "Do you prefer to be on top or bottom?",
  "What’s your favorite position?",
  "Have you ever had sex outside?",
  "Who was your first partner?",
  "Do you prefer the lights on or off?",
  "Does size matter?",
  "Spit or swallow? We’re not talking about Sriracha.",
  "What’s your favorite part of my body?",
  "What would you do if you were the opposite sex for a month?",
  "What color underwear are you wearing right now?",
  "Have you ever done a striptease for someone?",
  "What’s the sexiest pick-up line you have ever heard?",
  "Have you ever had sex with a person much older or young than you? Who?",
  "What’s your favorite thing during sex?",
  "Have you ever cheated or been cheated on?",
  "Who have you loved but they didn’t love you back?",
  "What’s something that you have never told anyone?",
  "What’s one thing on your bucket list?",
  "If you could change one thing about your life, what would it be?",
  "Have you ever been in love?",
  "What’s your biggest pet peeve?",
  "What’s the last thing you searched on your phone?",
  "What’s your weirdest habit?",
  "If you were trapped on an island for 3 days, who would you take with you?",
  "Do you believe in love at all?",
  "Do you believe in love at first sight?",
  "Do you believe you already found your soul mate?",
  "If you could change one thing on your body, what would it be?"
];

var dare = [
  "Put some Sriracha on any part of your body and challenge someone to lick it.",
  "Take off your shirt for the rest of the game.",
  "Give someone in this room a lap dance.",
  "Call to your ex and say you still love him/her.",
  "Suck someone’s finger with Sriracha pretending you are performing oral sex.",
  "Send a Facebook message to someone you’ve slept with describing a dirty dream you’ve had about them.",
  "Take off your pants for the rest of the game.",
  "Show your sexiest picture that have on your phone.",
  "Fake an orgasm for 30 seconds.",
  "Give somebody a massage.",
  "Do an impression of your favorite celebrity.",
  "Take a selfie with the toilet and post it online.",
  "Get on the table (or in the middle/front) and do a strip tease.",
  "Slap the person to your left on the booty.",
  "Twerk on a handstand.",
  "Lick someone’s foot.",
  "Call someone random, and talk freaky to them.",
  "Do a handstand on the wall for the next two rounds.",
  "Text your crush and tell them how much you like them.",
  "Give a hickey on somebody’s chest.",
  "Do your favorite sex position with somebody on the room.",
  "Give a 3 minute lecture on Safe Sex.",
  "Flirt with a random person in the room.",
  "Dance like a ballerina.",
  "Trade clothes with somebody on the room.",
  "Let someone in the room write whatever they want from your Facebook account.",
  "Publish the most embarrassing picture of you taken recently. Caption it #Loveyourself.",
  "Remove somebody’s socks with your teeth.",
  "Fill your mouth with water, and each person in the group must tell the funniest joke they know. If you spit up the water, you have to eat a spoonful of Sriracha.",
  "Talk to a pillow like it’s your crush.",
  "Let someone else style your hair and keep it that way for the rest of the day.",
  "Let somebody draw a tattoo with a marker on your arm.",
  "Let everyone draw on your face.",
  "Sing a song for everyone.",
  "Make out with your hand.",
  "Pretend to “drunk dial” your ex and say “meow bear”.",
  "Let people read your 3 last messages.",
  "Call the last person in your call history and talk in a foreign accent. Then hang up.",
  "Lick the person nearest to you.",
  "Eat something with Sriracha in the sexiest way possible.",
  "Lick the ear of the person to your left.",
  "Pretend to be the person on your right for 5 minutes.",
  "Lay on the floor and act like a piece of frying bacon.",
  "Kiss the player on your right.",
  "Kiss the player on your left.",
  "Kiss the player in front of you.",
  "Wear your underwear on the outside of your clothing."
];

function getTitle(){
  window.coinFlip = Math.random();
  if(coinFlip > 0.5){
    $('#title').html("TRUTH");
  }
  else{
    $('#title').html("DARE");
  }
}

function getText(){
  if(coinFlip > 0.5){
    var truthIndex = Math.floor(Math.random()*truth.length);
    var truthValue = truth[truthIndex];
    $('#text').html(decodeURIComponent(truthValue));
  }
  else{
    var dareIndex = Math.floor(Math.random()*dare.length);
    var dareValue = dare[dareIndex];
    $('#text').html(dareValue);
  }
}

getTitle();
getText();
