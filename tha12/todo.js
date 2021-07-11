var enter = document.querySelector('.in');
var data = document.querySelector('.entry');

var div = document.querySelector('.main2');
var content="";

//Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-thin-circle";
const LINE = "line_through";

enter.addEventListener("click",()=>{
    console.log(1);
    
        console.log(2);
        var val = data.value;
        console.log(val);
        content+=` <div class="point"><button class="list">${data.value}</button><button class="cut">X</button></div><br>`;
        console.log(content);
        div.innerHTML = content;
        console.log(div.innerHTML);
        data.value="";

        
})




