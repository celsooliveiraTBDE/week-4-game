      // "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
      $(document).ready(function () {

        // VARIABLES
        // ====================================================================
        // Here we create variables for tracking different aspects of the game: 
              
        var totalScore = 0; 
        var wins = 0; 
        var losses = 0; 
        var random; 
       
       StartGame(); 
  
          // Here we use jQuery to create click events with the buttons using the correspondent image
          // And so whenever it is clicked...
  
          $("body").on("click", "#red-button", function() {
              console.log("this is the redButton value" , redButton);
              totalScore = totalScore+redButton;  // adds the button total to the total player score
              evaluateGuess(); //runs the function to evaluate the equation: is my number < than computer
              $("#total-score").text("Your Total Score Is: "+totalScore); 
          });
  
          $("body").on("click", "#blue-button", function () {
              console.log("this is the Blue Button value" , blueButton);
              totalScore = totalScore+blueButton; 
              evaluateGuess(); 
              $("#total-score").text("Your Total Score Is: "+totalScore); 
          });
  
          $("body").on("click", "#yellow-button", function () {
              console.log("this is the Yellow Button value" , yellowButton);
              totalScore = totalScore+yellowButton; 
              evaluateGuess(); 
              $("#total-score").text("Your Total Score Is: "+totalScore); 
          });
  
          $("body").on("click", "#green-button", function () {
              console.log(greenButton);
              totalScore = totalScore+greenButton; 
              evaluateGuess(); 
              $("#total-score").text("Your Total Score Is: "+totalScore); 
          });
          
           // Function to Start the Game
          // ... we generate the random numbers at the beginning of every game!
  
          function StartGame() {
     
           random = Math.floor(Math.random() * 100 + 1);
           redButton = Math.floor(Math.random() * 10 + 1);
           blueButton = Math.floor(Math.random() * 10 + 1);
           yellowButton = Math.floor(Math.random() * 10 + 1);
           greenButton = Math.floor(Math.random() * 10 + 1);
     
           $("#random-number").text(random); // sets the random number on the page
           $("#red-button").text(redButton); 
  
          }
          // Function to Evaluate the Guess
  
          function evaluateGuess(){
              if (totalScore<random) {
                  console.log("the random value", random);                 
              }
  
              else if (totalScore === random){
                  alert("You WIN!, Call an Uber, Let's go Home!", totalScore, random)
                  wins++; 
                  $("#wins").text("Had Just Enough! "+ wins)
                  totalScore = 0; 
                  StartGame(); 
              }
  
              else{
                  alert("Someone call an ambulance!", totalScore, random)
                  losses++; 
                  $("#losses").text("Too much! Call an Ambulance! LOSS: " +losses)
                  totalScore = 0; 
                  StartGame(); 
              }
          }
      });
  