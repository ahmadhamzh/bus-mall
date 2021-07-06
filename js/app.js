'use strict';
let counter = 0;
const att = 25;



// const leftImg = document.getElementById('leftImg');
// const midImg = document.getElementById('midImg');
// const rightImg = document.getElementById('rightImg');

function Busimg(name, path) {
    this.name = name;
    this.path = path;
    this.votes = 0;
    this.showen = 0;
    Busimg.gloArr.push(this)
    Busimg.arrOfNames.push(this.name)

};

Busimg.gloArr = [];
Busimg.arrOfNames = [];
Busimg.arrOfVotes = [];
Busimg.arrOfShowen = [];
console.log(Busimg.arrOfNames);
console.log(Busimg.arrOfVotes);
console.log(Busimg.arrOfShowen);
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
let imgNumbers = [];
function renderThreeImg() {
    // console.log('before' + imgNumbers);
    leftIndex = randomNum();
    midIndex = randomNum();
    rightIndex = randomNum();
    while (imgNumbers.includes(midIndex) || imgNumbers.includes(rightIndex) || imgNumbers.includes(leftIndex)) {
        // console.log('inside if includes ' + midIndex + ' ' + rightIndex + ' ' + leftIndex);
        midIndex = randomNum();
        leftIndex = randomNum();
        rightIndex = randomNum();
        // console.log('incudes condition active');
    };

    imgNumbers = [];

    imgNumbers.push(leftIndex, midIndex, rightIndex)
    console.log('after' + imgNumbers);

    while (leftIndex === midIndex || leftIndex === rightIndex) {
        leftIndex = randomNum()
    }
    while (midIndex === rightIndex || midIndex === leftIndex) {
        midIndex = randomNum()
    }


    leftImg.src = Busimg.gloArr[leftIndex].path;
    Busimg.gloArr[leftIndex].showen++;
    midImg.src = Busimg.gloArr[midIndex].path;
    Busimg.gloArr[midIndex].showen++;
    rightImg.src = Busimg.gloArr[rightIndex].path;
    Busimg.gloArr[rightIndex].showen++;


}
renderThreeImg()


let sec = document.getElementById('the-imgs');
sec.addEventListener('click', handelClick)

let btn = document.createElement('button');
sec.appendChild(btn);


function handelClick(event) {
    event.preventDefault();
    counter++;
    // renderThreeImg();
    
    if (counter < att) {
        if (event.target.id === 'leftImg') {
            
            Busimg.gloArr[leftIndex].votes++;
            // console.log(Busimg.gloArr);
            renderThreeImg();
        }
        else if (event.target.id === 'midImg') {

            Busimg.gloArr[midIndex].votes++;
            renderThreeImg();
        }
        else if (event.target.id === 'rightImg') {
            
            Busimg.gloArr[rightIndex].votes++;
            renderThreeImg();
        } else {
            counter--;
            return
        }
    } else {
        if (counter = att) {
            if (event.target.id === 'leftImg') {

                Busimg.gloArr[leftIndex].votes++;
            // console.log(Busimg.gloArr);
            // renderThreeImg();
        }
        else if (event.target.id === 'midImg') {
            
            Busimg.gloArr[midIndex].votes++;
            // renderThreeImg();
        }
        else if (event.target.id === 'rightImg') {

            Busimg.gloArr[rightIndex].votes++;
            // renderThreeImg();
        } else {
            counter--;
            return
        }

    }
    
    
    sec.removeEventListener('click', handelClick);
    btn.innerHTML = 'result';
    btn.addEventListener('click', resultShow);
}
    // console.log(Busimg.gloArr);
}

function resultShow() {
    renderList()
    let btnChart = document.createElement('button');
    sec.appendChild(btnChart);
    btnChart.innerHTML = 'Show Chart';
    btnChart.addEventListener('click', chartShow);
    btn.removeEventListener('click', resultShow);
    
}

function chartShow(){
    drwingChart()
}

// console.log(Busimg.gloArr);

let unOrderList = document.getElementById('unOrder');
function renderList() {
    for (let i = 0; i < Busimg.gloArr.length; i++) {
        Busimg.arrOfShowen.push(Busimg.gloArr[i].showen)
        Busimg.arrOfVotes.push(Busimg.gloArr[i].votes)

        let list = document.createElement('li');
        unOrderList.appendChild(list);
        list.textContent = Busimg.gloArr[i].name + ' had ' + Busimg.gloArr[i].votes + ' votes, and was seen ' + Busimg.gloArr[i].showen + ' times.';
    }

}
function drwingChart() {
    let ctx = document.getElementById('myChart')
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Busimg.arrOfNames,
            datasets: [{
                label: '# of Votes',
                data: Busimg.arrOfVotes,
                backgroundColor: [
                    'black',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            },
            {
                label: '# of Shown',
                data: Busimg.arrOfShowen,
                backgroundColor: [
                    'gray'
                ]
            }
            ]
        },
    })
}
console.log(Busimg.arrOfShowen);
console.log(Busimg.arrOfVotes);

