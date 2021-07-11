


let moves=0;
let points= 0;

var card = document.querySelectorAll('.card');

let hasFlipped = false;
let first, second;
let lockBoard = false;

function func(){
    if(lockBoard)return;
    if(this==first)return;

    this.classList.add('flipped');
        
        if(!hasFlipped){
            hasFlipped=true;
            first = this;
            return;
        }else{
            hasFlipped=false;
            second = this;

            if(first.dataset.frame===second.dataset.frame){
                console.log(first.dataset.frame,second.dataset.frame);
                first.removeEventListener("click",func);
                second.removeEventListener("click",func);
                
                
                lockBoard = true;
                setTimeout(()=>{
                first.innerHTML = null;
                second.innerHTML = null;
                points+=1;
                moves+=1;
                document.querySelector('.move').innerHTML = moves;
                document.querySelector('.point').innerHTML = points;
                lockBoard = false;
                }
                
                ,1700);
                
               

                
        }else{
            //if not a match -> flip the cards
            console.log(1);
            lockBoard = true;
        
            setTimeout(()=>{
            first.classList.remove('flipped');
            second.classList.remove('flipped');
            moves+=1;
            document.querySelector('.move').innerHTML = moves;

            lockBoard = false;
            reset();
             },1700 );
            
            
        }
      
    }
        // console.log(first,second);
        //check if cards match
       
}

function reset(){
    [hasFlipped,lockBoard] = [false,false];
    [first,second] = [null,null];
}

(function shuffle(){
    card.forEach(e =>{
        let pos = Math.floor(Math.random()*12);
        e.style.order = pos;
    })
})();

card.forEach((e)=>
    e.addEventListener("click",func)
        
);



