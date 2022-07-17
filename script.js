const road_bg = document.getElementById('road-bg');
const runnigCar = document.getElementById('running-car');
const dangerCar = document.getElementById('danger-car');
const result = document.getElementById('result');
const score = document.querySelector('.score');
const jumpSound = document.getElementById('jump-sound')
const endSound = document.getElementById('end-sound')
let count = 0;

runnigCar.addEventListener('animationiteration',()=>{
    const random = Math.floor(Math.random()*3) * 140;
    runnigCar.style.left = random + 'px';
    count++;
})


window.addEventListener('keydown', (e)=>{
    if(e.keyCode == '39'){
        const dangerCarLeft = parseInt(window.getComputedStyle(dangerCar).getPropertyValue('left'));
    if(dangerCarLeft < 280){ dangerCar.style.left = (dangerCarLeft + 140) + 'px'};
    jumpSound.play()
    }
    
    if(e.keyCode == '37'){
        const dangerCarLeft = parseInt(window.getComputedStyle(dangerCar).getPropertyValue('left'));
    if(dangerCarLeft > 0){ dangerCar.style.left = (dangerCarLeft - 140) + 'px'};
    jumpSound.play()
    }
})


setInterval(function gameOver (){
    const runnigCarTop = parseInt(window.getComputedStyle(runnigCar).getPropertyValue('top'))
    const runnigCarLeft = parseInt(window.getComputedStyle(runnigCar).getPropertyValue('left'))
    const dangerCarLeft = parseInt(window.getComputedStyle(dangerCar).getPropertyValue('left'));
    if(dangerCarLeft == runnigCarLeft && runnigCarTop > 310 && runnigCarTop < 530){
        endSound.play()
        result.style.display = 'block';
        road_bg.style.display = 'none';
        score.innerHTML = `Score : ${count}`;
        count = 0;
    }
},10)