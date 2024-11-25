let gameSeq =[];
let userSeq=[];
let des = document.querySelector(".des");
let btns = ["b1", "b2", "b3","b4"]

let started =false;
let level = 0;


document.addEventListener("keypress", function(){
    if(started == false){
        
        started = true;
        setTimeout(levelUp ,1000);
        
    };
})

// function game(){
//     if(started == false){
        
//         started = true;

//         levelUp();
//     };

// };
// ["click", "keypress"].forEach((event) => {
//     document.addEventListener(event, game)
//  });



 function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function() {
        btn.classList.remove('flash')
    },200);
 };


 function levelUp(){
    userSeq = [];
    level++;
    des.innerText =  `Level ${level} \n`;

    //random btn choose to flash
    let randomId = Math.floor(Math.random() *4);
    let randomColor = btns[randomId] ;
    let randombtn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnFlash(randombtn);
 };

 function checkAns(index){

    if(userSeq[index] === gameSeq[index]){
        if(userSeq.length ==  gameSeq.length ){
            setTimeout(levelUp,200);
        }
    }
    else{
        if(level > 0 ){
        des.innerHTML = ` GAME OVER!!! Your Score: <b>${level}</b> Press any Key to Restart A Game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "#223B4F";
        },150);
    }
        again();
    }
 }


 function buttonPress(){
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");

    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
 };

 let buttons = document.querySelectorAll(".btn")
 for(btn of buttons){
    
    btn.addEventListener("click", buttonPress);
 };


 function again(){
     gameSeq =[];
     userSeq=[];
     started =false;
     level = 0;
 };