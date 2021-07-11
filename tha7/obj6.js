<<<<<<< HEAD
var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
library.sort((a, b) => (a.libraryID > b.libraryID) ? -1 : 1);
for(let item in library){
  console.log(library[item].title+" "+library[item].author+" "+library[item].libraryID);
=======
var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
library.sort((a, b) => (a.libraryID > b.libraryID) ? -1 : 1);
for(let item in library){
  console.log(library[item].title+" "+library[item].author+" "+library[item].libraryID);
>>>>>>> a35bc386b4c05a42e03803026b93295a96e5655e
}