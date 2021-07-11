let screen = document.getElementById('in');
let buttons = document.querySelectorAll('button');
let value='';




for(item of buttons){
    item.addEventListener('click',(e)=>{
        // ('but').click(function(){
        //     ('but').css('box-shadow','inset 2px 2px black');
        // });

        buttonText = e.target.innerText;
        console.log(buttonText);

        if(buttonText=='X'){
            buttonText = '*';
            value += buttonText;
            screen.value = value;
        }else if(buttonText=='C'){
            value  = '';
            screen.value = value;
        }else if(buttonText=='='){
            screen.value = eval(value);
        }else if(buttonText=='Del'){
            
            value = value.slice(0,value.length-1);
            screen.value = value;
        }else if(buttonText=='^'){
            
            value += buttonText;
            screen.value = value;
        }else if(value[(value.length)-1]=='^'){
            value +=buttonText;
            screen.value = value;
            var c = "";
            if(value.length!=3){
                c = value.slice(0,value[value.length-3]);
            }
            var ans  = Math.pow(parseInt(value[value.length-3]),parseInt(buttonText));
            console.log(value[value.length-3]);
            console.log(buttonText);
            console.log(ans);
            value = ""+ans;
            
            screen.value = c+value;
            value = screen.value;
        }
        
        
        else{
            value += buttonText;
            screen.value = value;
        }


    })
}