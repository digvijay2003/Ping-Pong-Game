const  p1display = document.querySelector("#p1");
const  p2display = document.querySelector("#p2");
const p1button = document.querySelector("#p1button");
const p2button = document.querySelector("#p2button");
const Reset = document.querySelector("#reset");
const playertoo = document.querySelector("#playertoo");
const winns = document.querySelector("#winn");

p1score =0;
p2score =0;
let winningscore = 3;
let isGameOver = false;

p1button.addEventListener('click', (e) => {
    if (!isGameOver){
    p1score +=1;
      if(p1score === winningscore){
        isGameOver = true;
        p1.classList.add('winner')
        p2.classList.add('loser')
        p1button.disabled = true;
        p2button.disabled = true;
        winns.innerText = "PLAYER ONE WINS"
        winn.classList.add('winner')
      }
    p1.textContent = p1score;  
    }
})

p2button.addEventListener('click', (e) => {
    if (!isGameOver){
    p2score +=1;
      if(p2score === winningscore){
        isGameOver = true;
        p2.classList.add('winner')
        p1.classList.add('loser')
        p1button.disabled = true;
        p2button.disabled = true;
        winns.innerText = "PLAYER TWO WINS"
        winn.classList.add('winner')
      }
    p2.textContent = p2score;  
    }
})

Reset.addEventListener('click', reset);

playertoo.addEventListener('change', function (e){
    winningscore = parseInt(this.value);
    reset();
})

function reset() {
    isGameOver = false;
    p1score = 0;
    p2score = 0;
    p1.textContent = 0;
    p2.textContent = 0;
    p1.classList.remove('winner','loser');
    p2.classList.remove('winner','loser');
    p1button.disabled = false;
    p2button.disabled = false;
    winns.innerText ="";
}