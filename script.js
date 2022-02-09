document.querySelector('.input').value = " ";
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = document.querySelector('.score').textContent;
let highscore = document.querySelector('.highscore').textContent;
let guessing = document.querySelector('.guessing');

document.querySelector('.check').addEventListener('click',function(){

    let input = document.querySelector('.input').value;
    if(score > 1){
        if(!input){
            guessing.textContent = 'No Number!';
        }
        else if((input > 20) || (input < 1)  ){
            alert("Please enter the number between 1 to 20!");
            document.querySelector('.input').value = " ";
        }
        else if(input == secretNumber){
            guessing.textContent = 'Correct!';
            if(score > highscore){
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
            document.querySelector('.box').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = 'green';
            document.querySelector('.check').addEventListener('click',function(){
                alert("You have already guessed the number!");
            })
            
           
           
        }
        else if(input > secretNumber){
            guessing.textContent = 'Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else if(input < secretNumber){
            guessing.textContent = 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
    else if( score == 1){
        score--;
        document.querySelector('.score').textContent = score;
        guessing.textContent = 'You Lost!';
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.check').addEventListener('click',function(){
            alert("Game Over!");
        })
    }

})
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor = '#101010';
    secretNumber = Math.trunc(Math.random()*20) + 1;
    guessing.textContent = 'Start Guessing...';
    document.querySelector('.input').value = " ";
    document.querySelector('.score').textContent = '20';
    score =  document.querySelector('.score').textContent;
    document.querySelector('.box').textContent = '?';
})
