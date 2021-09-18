

var Dice = document.body.querySelectorAll("div.dice img");
var Title = document.body.querySelector("div h2");
var Player1Color = "#227ce7";
var Player2Color = "#8e4efc";

document.getElementsByClassName("Player1")[0].firstElementChild.style.color = Player1Color;
document.getElementsByClassName("Player2")[0].firstElementChild.style.color = Player2Color;

//This will return the Image
function RollDice(PlayerNumber)
{
    var NumberRolled = Math.floor(Math.random()*10);
    console.log(NumberRolled);
    if(NumberRolled > 6 || NumberRolled === 0)
    {
        return RollDice(PlayerNumber);
    }
       switch (NumberRolled) {
           case 1:
               Dice[PlayerNumber].src = "images/dice1.png";
               break;
           case 2:
               Dice[PlayerNumber].src = "images/dice2.png";
               break;
           case 3:
               Dice[PlayerNumber].src = "images/dice3.png";
               break;
           case 4:
               Dice[PlayerNumber].src = "images/dice4.png";
               break;
           case 5:
               Dice[PlayerNumber].src = "images/dice5.png";
               break;
           case 6:
               Dice[PlayerNumber].src = "images/dice6.png";
               break;
           default:
               break;
       }
    
    return NumberRolled;
}

var Player1Number = RollDice(0);
var Player2Number = RollDice(1);

if(Player1Number > Player2Number)
{
    Title.textContent = "Player 1 Wins!"
    Title.style.color = Player1Color;
}else if(Player1Number < Player2Number)
{
    Title.textContent = "Player 2 Wins!"
    Title.style.color = Player2Color;
    
}else
{
    Title.textContent = "Tie!"
    Title.style.color = "#4ECCA3";
}