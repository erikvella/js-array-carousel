// 1 prendo tutti gli elementi 
// 2 creo una lista con tutte le foto (array)
// 3 creo un ciclo per generare le foto dinamicamente
// 4 creo dei trigger al click delle freccette
// 5 stabilisco le condizioni secondo le quali i bottono spariscono

const itemsWrapper = document.querySelector('.items-wrapper');
const nextBtn = document.querySelector('.up');
const prevBtn = document.querySelector('.down');

const imgCollection = [
  'img/01.webp' , 
  'img/02.webp' , 
  'img/03.webp' , 
  'img/04.webp' , 
  'img/05.webp' ,
];
let imgCounter = 0;



for(let i = 0 ; i < imgCollection.length ; i++){
  const image = imgCollection[i];
  itemsWrapper.innerHTML += `<img src="${image}" class="item hide" >`;
};

const itemCollection = document.getElementsByClassName('item')
itemCollection[imgCounter].classList.remove('hide');



nextBtn.addEventListener('click' , function(){
  itemCollection[imgCounter].classList.add('hide');
  imgCounter++;
  itemCollection[imgCounter].classList.remove('hide');

  prevBtn.classList.remove('hide'); 
  if(imgCounter === itemCollection.length - 1){
    nextBtn.classList.add('hide');
  }
})

prevBtn.addEventListener('click' , function(){
  itemCollection[imgCounter].classList.add('hide');
  imgCounter--;
  itemCollection[imgCounter].classList.remove('hide');


  nextBtn.classList.remove('hide');

  if(imgCounter === 0){
    prevBtn.classList.add('hide');
  }
})