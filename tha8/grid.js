<<<<<<< HEAD
var row='<tr>';
for (i = 0; i <30; i++) {
    row+='<td></td>';   //<tr><td></td><td></td></tr> -row   //row - "<tr><td></td>....</tr>"
  }
  row+='</tr>';
  console.log(row);
=======
var row = '<tr>';
for(i=0;i<30;i++){
    row+='<td></td>';
}
row+='</tr>';
>>>>>>> a35bc386b4c05a42e03803026b93295a96e5655e
var content='';
for(i=0;i<20;i++){
    content+=row;
}
<<<<<<< HEAD
document.getElementById('tab').innerHTML = content;
let cell=document.querySelectorAll('td');
    cell.forEach( (link) => {
        link.addEventListener("click", function() {
            link.classList.toggle("white");
    })});
=======

document.getElementById('tab').innerHTML = content;
let buttons = document.querySelectorAll('td');

buttons.forEach(cell=>{
    cell.addEventListener('click',e=>{
        cell.classList.toggle("white");
    });
});
>>>>>>> a35bc386b4c05a42e03803026b93295a96e5655e
