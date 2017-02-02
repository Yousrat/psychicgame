
// Our array of possible computer choices.
      var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

      // Variables for tracking our wins, losses and ties. They begin at 0.
      var wins = 0;
      var losses = 0;
      var guessleft = 10;
      var wrongguess = [];



      // When the user presses a key, it will run the following function...
     

      document.onkeyup = function(event) {

        // Determine which key was pressed
        userGuess = event.key;
		//userGuess = String.fromCharCode(event.key).toLowerCase();

      

        // Sets the computerGuess variable equal to a random choice from the computerChoice array.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

          if (userGuess === computerGuess) {
            wins++;
            guessleft--;
              
      if (guessleft === 0){
      guessleft = 10;
      wins = 0;
      losses =0;
      }
      
          }
           

          else {
            losses++;
            guessleft--;
            
            if (guessleft === 0){
            guessleft = 10;
            wins = 0;
            losses =0;
            }

            wrongguess.push(userGuess);
         //   if (wrongguess.hasOwnProperty(userGuess) == false)
           //     wrongguess[userGuess] = " ";
            console.log( "wrongguess: " + wrongguess.join(", ") );
            }
  

          
          //checks if all letters have been found
  

// Here we create the HTML that will be injected into our div and displayed on the page.

// console.log("wins: " + wins);
//console.log("losses: " + losses);
//console.log("guesses made: " + guess);
//document.log("guesses left: " + guessleft - guess +);



var html = "Press a key to start playing!</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>guesses left: " + guessleft + "</p>" +
          "<p>wrong guess: " + wrongguess.join(", ") + "</p>";
//"<p>guesses made so far: " + guessleft - guess + "</p>";

// Injecting the HTML we just created into our div and updating the game information on our page.
          document.querySelector("#game").innerHTML = html;

        }
     
window.onload = init;