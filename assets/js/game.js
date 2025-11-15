var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10; 

// You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);


var fight = function(enemyName) {
    // Alert players that they are starting the rounds
    //window.alert("Welcome to Robot Gladiators!");

     while (playerHealth > 0 && enemyHealth > 0) {
         //   window.alert(enemyNames + " has died!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

     // If player choses to skip 
      if (promptFight === "skip" || promptFight === "SKIP") {
        // Confirm player wants to skip 
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // If yes (true), leave fight 
        if (confirmSkip) {
            window.alert(playerName + " has decidied to skip this fight. Goodbye!");
            // Subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10; 
            console.log ("playerMoney" , playerMoney);
            break;
        }
    }
        //Remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack
        console.log (
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // Check enemy's health 
        if (enemyHealth <= 0) {
            window.alert(enemyName  + ' has died!');

            // Award player money for winning 
            playerMoney = playerMoney + 20;
            // Leave while () loop since enemy is dead
            break;
     } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        
        // Remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // Check player's health 
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
             // Leave while () loop since enemy is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } // End of while loop
}; // End of fight function 

var startGame = function(){
    //Reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

// Fight each enemy-robot by looping over them and fighting them one at a time
for(var i = 0; i < enemyNames.length; i++) {
    //if player is still alive, keep fighting 
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
        // Pick new enemy to fight based on the index of the enemyNames array 
        var pickedEnemyName = enemyNames[i];

        // Reset enemyHealth befor starting new fight
        enemyHealth = 50;

        // Use debugger to pause script from running and check what's going on at that moment in the code
        //debugger 

        // Pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter 
        fight(pickedEnemyName);
        // If we're not at the last enemy in the array
        if (playerHealth > 0 && i < enemyNames.length - 1){
            // Ask if player wants to use the store before next round
            var storeConfirm = window.confirm(" The fight is over, visit the store before the next round?");
            
            // If Yes, take them to the store() function 
            if (storeConfirm){
                shop();
            }
        }
    }
    // If player isn't alive, stop the game 
        else {
        window.alert( "You have lost your robot in battle! Game over ");
        break; 
     }
} 
// After loop ends, we are either out of playerHealth 
endGame();
};

// Function to end the entire game
var endGame = function () {
    // If player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great Job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else{
         window.alert("You've lost your robot in battle.");
    }

    // Ask player if they'd like to play again
     var playAgainConfirm = window.confirm("Would you like to play again?");

     if (playAgainConfirm) {
         // Restart the game 
         startGame();
     }
     else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
     }
    };

var shop = function(){
    // Ask player what they'd like to do 
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.")
        console.log("entered the shop");

        // Use switch to carry out action 
        switch (shopOptionPrompt) {
            case "REFILL": // New case
            case "refill":
                if (playerMoney >= 7){
                window.alert("Refilling player's health by 20 for 7 dollars.");

                // Increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
                }
                else{
                    window.alert("You don't have enough money!");
                }  

                break;
            case "UPGRADE": // New case
            case "upgrade":
                
                if (playerMoney >=7) {
                window.alert(" Upgrading player's attack by 6 for 7 dollars.");

                // Increase attack and decrease money 
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
                }
                else {
                    window.alert("You don't have enough money!");
                }

                break; 
            case "LEAVE": // New case
            case "leave":
                window.alert("Leaving the store.");

                //Do nothing, so function will end
                break;
            default:
                window.alert("You did not pick a valid option.Try again.");

                // Call shop() again to force player to pick a valid option
                shop();
                break;
        }
    };
// Start the game when the page loads
startGame();