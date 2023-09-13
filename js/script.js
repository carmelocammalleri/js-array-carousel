// 2. collegare elementi html/js

const imageWrapper = document.querySelector('.image-wrap');
const btnUp = document.querySelector('.arrow-up');
const btnDown = document.querySelector('.arrow-down');

// 3. creare array
const listImages = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
]

//5. creare contatore
let counter = 0;

//4. inserire img dentro html
for(let i=0; i< listImages.length; i++){
  const image = listImages[i];
  imageWrapper.innerHTML += `<img src="${image}" class= " item hide">`;
}

//6.
btnUp.classList.add('hide');
const itemHide = document.getElementsByClassName('item');
itemHide[counter].classList.remove('hide');

btnDown.addEventListener('click', function (){
  itemHide[counter].classList.add('hide');

  counter++;

  itemHide[counter].classList.remove('hide');

  btnUp.classList.remove('hide')

  if(counter === itemHide.length - 1){
    btnDown.classList.add('hide');
  }
})

btnUp.addEventListener('click', function(){
  
})