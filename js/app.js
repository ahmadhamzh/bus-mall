'use strict';
let counter = 0;
const att = 25;

const leftImg = document.getElementById('leftImg');
const midImg = document.getElementById('midImg');
const rightImg = document.getElementById('rightImg');

function Busimg(name, path) {
    this.name = name;
    this.path = path;
    this.votes = 0;
    this.showen = 0;
    Busimg.gloArr.push(this)

};

Busimg.gloArr = [];
// console.log(Busimg.gloArr);

new Busimg('bag', 'css/imgs/bag.jpg');
new Busimg('banana', 'css/imgs/banana.jpg');
new Busimg('bathroom', 'css/imgs/bathroom.jpg');
new Busimg('boots', 'css/imgs/boots.jpg');
new Busimg('breakfast', 'css/imgs/breakfast.jpg');
new Busimg('bubblegum', 'css/imgs/bubblegum.jpg');
new Busimg('chair', 'css/imgs/chair.jpg');
new Busimg('cthulhu', 'css/imgs/cthulhu.jpg');
new Busimg('dog-duck', 'css/imgs/dog-duck.jpg');
new Busimg('dragon', 'css/imgs/dragon.jpg');
new Busimg('Pen', 'css/imgs/pen.jpg');
new Busimg('pet-sweep', 'css/imgs/pet-sweep.jpg');
new Busimg('scissors', 'css/imgs/scissors.jpg');
new Busimg('shark', 'css/imgs/shark.jpg');
new Busimg('sweep', 'css/imgs/sweep.png');
new Busimg('tauntaun', 'css/imgs/tauntaun.jpg');
new Busimg('unicorn', 'css/imgs/unicorn.jpg');
new Busimg('water-can', 'css/imgs/water-can.jpg');
new Busimg('wine-glass', 'css/imgs/wine-glass.jpg');





function randomNum() {
    return Math.floor(Math.random() * Busimg.gloArr.length)

}
// console.log(randomNum());
let leftIndex;
let midIndex;
let rightIndex;
function renderThreeImg() {
    leftIndex = randomNum();
    midIndex = randomNum();
    rightIndex = randomNum();
    // console.log('before', leftIndex);
    // console.log('before', midIndex);
    // console.log('before', rightIndex);
    while (leftIndex === midIndex || leftIndex === rightIndex) {
        leftIndex = randomNum()
    }
    while (midIndex === rightIndex || midIndex === leftIndex) {
        midIndex = randomNum()
    }
    // console.log(leftIndex);
    // console.log(midIndex);
    // console.log(rightIndex);
    leftImg.src = Busimg.gloArr[leftIndex].path;
    Busimg.gloArr[leftIndex].showen++;
    midImg.src = Busimg.gloArr[midIndex].path;
    Busimg.gloArr[midIndex].showen++;
    rightImg.src = Busimg.gloArr[rightIndex].path;
    Busimg.gloArr[rightIndex].showen++;

    // console.log(Busimg.gloArr[rightIndex].showen++);
    // console.log(Busimg.gloArr[midIndex].showen++);
    // console.log(Busimg.gloArr[leftIndex].showen++);

    // console.log(Busimg.gloArr);

}
renderThreeImg()

leftImg.addEventListener('click', handelClick)
midImg.addEventListener('click', handelClick)
rightImg.addEventListener('click', handelClick)

let unOrderList = document.getElementById('unOrder');

function handelClick(event) {
    event.preventDefault();
    counter++;
    // renderThreeImg();
    if (counter < 25) {
        if (event.target.id === 'leftImg') {

            Busimg.gloArr[leftIndex].votes++;
            // console.log(Busimg.gloArr);
        }
        else if (event.target.id === 'midImg') {

            Busimg.gloArr[midIndex].votes++;
        }
        else if (event.target.id === 'rightImg') {

            Busimg.gloArr[rightIndex].votes++;
        }
    } else {
        
        leftImg.removeEventListener('click', handelClick);
        midImg.removeEventListener('click', handelClick);
        rightImg.removeEventListener('click', handelClick);
        let sec = document.getElementById('result');
        let btn = document.createElement('button');
        sec.appendChild(btn);
        btn.innerHTML = 'result'
        btn.addEventListener('click',renderList)

        
        // renderList()
    }
    console.log(Busimg.gloArr);
    renderThreeImg();
}

// console.log(Busimg.gloArr);

function renderList() {
    for (let i = 0; i < Busimg.gloArr.length; i++) {
        let list = document.createElement('li');
        unOrderList.appendChild(list);
        list.textContent = Busimg.gloArr[i].name + ' had ' + Busimg.gloArr[i].votes + ' votes, and was seen ' + Busimg.gloArr[i].showen + ' times.';
    }

}
