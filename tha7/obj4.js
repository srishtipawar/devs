<<<<<<< HEAD
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
 { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

for(let item in library){
    let status = false;
    if(library[item].readingStatus==true){
        status = true;
    }

    if(status==true){
    console.log("I have read "+library[item].title+" by "+library[item].author+".");
    }else{
        console.log("I have not read "+library[item].title+" by "+library[item].author+".");
    }

}


=======
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
 { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

for(let item in library){
    let status = false;
    if(library[item].readingStatus==true){
        status = true;
    }

    if(status==true){
    console.log("I have read "+library[item].title+" by "+library[item].author+".");
    }else{
        console.log("I have not read "+library[item].title+" by "+library[item].author+".");
    }

}


>>>>>>> a35bc386b4c05a42e03803026b93295a96e5655e
