let imgArray = ["NewCig.png","communism.png","congress.png","China.png","love.png"];
let imgUrl;
let count;
let enter = 0;
setTimeout(() => { 
    const obstacle = document.getElementById("obstacle");   
    let span = document.getElementById("score");
    console.log("Span is inti",span);
    console.log("obs",obstacle);
    obstacle.style.display ="none";
    let ins = document.getElementById("Instructions");
    let btn = document.getElementById("btn");
    
    count = 0;
    span.innerText = count;
    
 }, 20);


function startGame(){
let btn = document.getElementById("btn");
btn.addEventListener('click', event =>{
   
        let ins = document.getElementById("Instructions");
        ins.style.display="none";
        if(obstacle.style.display ="none"){

        
            obstacle.style.display ="block";
            enter = 1;
            console.log("value of enter",enter);
            obstacle.style.backgroundImage = "url(NewCig.png)";
        
        
        }
        //your code

setTimeout(() => { 
const mishra = document.getElementById("mishra");

console.log("mishra is",mishra);

console.log("obs",obstacle);

}, 10);



function jump(){
    if(mishra.classList !="jump"){
    mishra.classList.add("jump");

    
    setTimeout(function(){
        mishra.classList.remove("jump");
        if(enter ==1){
        count = count + 1;
    }
        let span = document.getElementById("score");
        console.log("Count is", count);
        span.innerText = count;
        let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
       if(obstacleLeft>600){
        imgUrl = imgArray[Math.floor(Math.random()*imgArray.length)];
        console.log(imgUrl);
        obstacle.style.backgroundImage = "url("+imgUrl+")";
       }
        
    },300);
}

}

let isAlive = setInterval(function (){
    let mishraTop = parseInt(window.getComputedStyle(mishra).getPropertyValue("top"));
    // console.log("TOP",mishraTop);
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    // console.log(mishraTop);
    console.log("Mishra top ",mishraTop);
    console.log("Obstacle left",obstacleLeft);
if(obstacleLeft<50 && obstacleLeft>0 && mishraTop > 350){
    alert("Game Over!! Restart");
   restart();

}
// if(obstacleLeft<80 && obstacleLeft>0 && mishraTop == 0){
//     count = count + 1;
//     let span = document.getElementById("score");
//     console.log("Count is", count);
//     span.innerText = count;
// }

},10);

document.addEventListener("touchstart",function(event){
   
    jump();
    
});


})

}
function restart(){
    obstacle.style.display ="none";
    let span = document.getElementById("score");
    count = 0;
    span.innerText = count;
    let ins = document.getElementById("Instructions");
    ins.style.display="block";
    enter =0 ;
    startGame();
}
startGame();