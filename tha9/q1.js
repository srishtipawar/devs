<<<<<<< HEAD
var obj1 = {
    name:"Srishti",
    func: function(a,b){
        console.log(this);
        console.log(this.name);
        console.log(a*b);
    }
}
var obj2 = {
    name:"Palak",
    branch:"CSI"
}
function func2(a,b){
    
    console.log(a+b);
}

obj1.func.call(obj2,1,2);
obj1.func.apply(obj2,[2,3]);
const ab = func2.bind(obj2,3,4);
ab();

//events have been used in the project



=======
var obj1 = {
    name:"Srishti",
    func: function(a,b){
        console.log(this);
        console.log(this.name);
        console.log(a*b);
    }
}
var obj2 = {
    name:"Palak",
    branch:"CSI"
}
function func2(a,b){
    
    console.log(a+b);
}

obj1.func.call(obj2,1,2);
obj1.func.apply(obj2,[2,3]);
const ab = func2.bind(obj2,3,4);
ab();

//events have been used in the project



>>>>>>> a35bc386b4c05a42e03803026b93295a96e5655e
