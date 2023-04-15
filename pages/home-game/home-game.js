var MWOverworld = new Audio('/sounds/MW_Overworld.mp3');
MWOverworld.autoplay = true;
MWOverworld.loop = true;

function startGame() {
    MWOverworld.pause();

    var MWCoin = new Audio('/sounds/MW_Coin.wav');
    MWCoin.play();

    setTimeout(() => 
    {
        window.location.href='/pages/play-game/play-game.html'
    }, 900)
}
