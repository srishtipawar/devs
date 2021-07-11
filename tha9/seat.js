<<<<<<< HEAD
var row = '<tr>'
for(i=0;i<15;i++){
    row+='<td class="col" value="burly"></td>';
    
}
row+='</tr>';

var content = '';
for(i=0;i<3;i++){
    content+=row;
    
}

let c=0;
let total = 45;
document.getElementById('booked').innerHTML=c;
document.getElementById('left').innerHTML = total;


document.getElementById('tab').innerHTML = content;
let cell=document.querySelectorAll('td');
    cell.forEach( (link) => {
        link.addEventListener("click", function() {
            
            if(link.getAttribute("value")=="burly"){
                link.setAttribute("value","green");
                link.style.backgroundColor = "aqua";
                c++;
                total--;
                document.getElementById('booked').innerHTML = c;
                document.getElementById('left').innerHTML = total;
                
            }else{
                link.setAttribute("value","burly");
                link.style.backgroundColor = "burlywood";
                c--;
                total++;
                document.getElementById('booked').innerHTML = c;
                document.getElementById('left').innerHTML = total;
                
            }
            
    })});




=======
var row = '<tr>'
for(i=0;i<15;i++){
    row+='<td class="col" value="burly"></td>';
    
}
row+='</tr>';

var content = '';
for(i=0;i<3;i++){
    content+=row;
    
}

let c=0;
let total = 45;
document.getElementById('booked').innerHTML=c;
document.getElementById('left').innerHTML = total;


document.getElementById('tab').innerHTML = content;
let cell=document.querySelectorAll('td');
    cell.forEach( (link) => {
        link.addEventListener("click", function() {
            
            if(link.getAttribute("value")=="burly"){
                link.setAttribute("value","green");
                link.style.backgroundColor = "aqua";
                c++;
                total--;
                document.getElementById('booked').innerHTML = c;
                document.getElementById('left').innerHTML = total;
                
            }else{
                link.setAttribute("value","burly");
                link.style.backgroundColor = "burlywood";
                c--;
                total++;
                document.getElementById('booked').innerHTML = c;
                document.getElementById('left').innerHTML = total;
                
            }
            
    })});




>>>>>>> a35bc386b4c05a42e03803026b93295a96e5655e
