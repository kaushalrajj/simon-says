let gameseq = [];
let userseq = [];
let btns = ["red","purple","yellow","green"];
let started = false; 
let level = 0; 
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function() {
  if (!started) {
    console.log("game started");
    started = true;
    levelup();
  }
});
function gameflash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },500);
}
function userflash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },400);
}

function levelup(){
  userseq = [];
   level++;
   h2.innerText = `Level ${level}`;
   let randidx = Math.floor(Math.random()*4  );
   let randcolor = btns[randidx];
   let randbtn = document.querySelector(`.${randcolor}`);
  gameseq.push(randcolor);
  console.log(gameseq);
   gameflash(randbtn);
}
function checkans(idx){
  if(gameseq[idx] === userseq[idx]){
    if(userseq.length === gameseq.length){
      setTimeout(levelup,1000)
    }
    console.log("same value");
  }
  else{
    h2.innerHTML = `Game over <br> your score was <b>${level}</b> <br> press any key to restart game `;
    document.querySelector("body").style.background = "red";
    setTimeout(function(){
      document.querySelector("body").style.color = "white";
    }, 150);
  }
}
function press(){
  let btn = this;
  console.log(this );
  userflash(btn);
  let usercolor = btn.getAttribute("id");
  console.log(usercolor);
  userseq.push(usercolor);
  checkans(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
  btn.addEventListener("click",press);
}
function reset(){
  started = false;
  gameseq = [];
  userseq = [];
  level = 0 ; 
}
