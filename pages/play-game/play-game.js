const mario = document.querySelector('.mario-walking');
const pipe = document.querySelector('.pipe');
const montain1 = document.querySelector('.montain-1');
const montain2 = document.querySelector('.montain-2');
const clouds = document.querySelector('.clouds');
const animationPipe = getComputedStyle(document.documentElement).getPropertyValue('--o-animation-pipe-initial');
const res = document.querySelector('#score-text');

var score = 0;

window.onload = function() {

    function jump(){
        mario.classList.add('jump');

        getSound('/sounds/MW_Jump.wav');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
    var MWOverworld = new Audio('/sounds/MW_Overworld.mp3');
    MWOverworld.play();

    const loop = setInterval(() => {
        const pipePositionLeft = pipe.offsetLeft;
        const marioPositionBotton = +window.getComputedStyle(mario).bottom.replace('px', '');
        const montain1PositionLeft = +window.getComputedStyle(montain1).left.replace('px', '');
        const montain2PositionLeft = +window.getComputedStyle(montain2).left.replace('px', '');
        const cloudsPositionLeft = +window.getComputedStyle(clouds).left.replace('px', '');

        if(pipePositionLeft <= 70 && pipePositionLeft > 0 && marioPositionBotton > 75) {
            console.log(score);
            score += 1;
        }

        if (pipePositionLeft <= 70 && pipePositionLeft > 0 && marioPositionBotton < 75) {
    
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePositionLeft}px`;

            mario.style.animation = 'none';
            mario.style.bottom  = `${marioPositionBotton}px`;

            montain1.style.animation = 'none';
            montain1.style.left = `${montain1PositionLeft}px`;

            montain2.style.animation = 'none';
            montain2.style.left = `${montain2PositionLeft}px`;

            clouds.style.animation = 'none';
            clouds.style.left = `${cloudsPositionLeft}px`;
            MWOverworld.pause();
            getSound('/sounds/MW_Lose.wav');
            res.innerHTML = score;
            mario.src = '/images/mario_gameover.gif';
            openResult('score');
            clearInterval(loop);
        }

    }, 1);

    document.addEventListener('keypress', function(key){
        if(key.code == 'Space')
           jump();
        
    }, false);
}

function changeFrame(){
    document.documentElement.style.setProperty('--o-animation-pipe-initial', 1)
}

function openResult(el) {
    document.getElementById(el).style.display = 'block';
}

function getSound(sound) {
    var audio = new Audio(sound);
    audio.addEventListener('canplaythrough', function() {
        audio.play();
    });
}