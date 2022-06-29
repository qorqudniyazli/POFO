

const list = document.querySelector('.page');
const btn = document.querySelector('button');
const page = document.querySelector('.sub-page');
const button = document.querySelector('#btn');

const toggleList = () =>{
  list.attributes[0].value = "page"
    list.attributes[0].value ="";
  }

btn.addEventListener('click',toggleList);


const pagesList = () =>{
  page.attributes[0].value === ""
    list.attributes[0].value ="page";
   
  }

button.addEventListener('click',pagesList);


 