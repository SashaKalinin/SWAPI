const requestURL = "https://swapi.dev/api/people/?page=1";
const heroCart = document.querySelector('#hero_cart');
const cardId = document.querySelector('#cardId');
const exampleModalLable = document.querySelector('#exampleModalLable');
const height = document.querySelector('#height');
const mass = document.querySelector('#mass');
const hair = document.querySelector('#hair');
const skin = document.querySelector('#skin');
const birth = document.querySelector('#birth');
const gender = document.querySelector('#gender');
const homeworld = document.querySelector('#homeworld');
const films = document.querySelector('#films');
const starships = document.querySelector('#starships');
const inputText = document.querySelector('#inputText');

var arr = [];

function sendRequest(method, url) {
    return fetch(url)
        .then(response => {
            return response.json();
        })

}


//INIT FUNCTION
function generateData(data) {
    arr = [];
    localStorage.clear();
    for (let item of data) {
        arr.push(item);
    }
    localStorage.setItem('StarWars', JSON.stringify(arr));
    //SORT
    if (inputText.value) {
        let newArr = arr.filter((elem) => {
           return elem.name.toLowerCase().includes(inputText.value.toLowerCase());
        })
        heroCart.innerHTML = '';
        newArr.forEach((item) => {
            heroCart.innerHTML +=
                `<p class="p_text" id="cardId" data-toggle="modal" data-target="#exampleModal">${item.name}</p>`
        })
    } 
    else {
        heroCart.innerHTML = '';
        arr.forEach((item) => {
            heroCart.innerHTML +=
            `<p class="p_text" id="cardId" data-toggle="modal" data-target="#exampleModal">${item.name}</p>`
        })
    }
}

//MAIN FUNCTION
if(localStorage.key(0) === "StarWars") {
    let localStorageData = JSON.parse(localStorage.getItem('StarWars'));
    generateData(localStorageData);
}else {
    sendRequest('GET', requestURL)
    .then(data => generateData(data.results))
    .catch(err => console.log(err))
}





//INPUT SERCH
inputText.addEventListener('keydown', function () {
    if(localStorage.key(0) === "StarWars") {
        let localStorageData = JSON.parse(localStorage.getItem('StarWars'));
        generateData(localStorageData);
    }else {
        sendRequest('GET', requestURL)
        .then(data => generateData(data.results))
        .catch(err => console.log(err))
    }
})



















heroCart.addEventListener('click', function (e) {

    for (let i = 0; i < arr.length; i++) {
        if (e.target.innerHTML == arr[i].name) {
            exampleModalLable.innerHTML = arr[i].name;
            height.innerHTML = arr[i].height;
            mass.innerHTML = arr[i].mass;
            hair.innerHTML = arr[i].hair_color;
            skin.innerHTML = arr[i].skin_color;
            birth.innerHTML = arr[i].birth_year;
            gender.innerHTML = arr[i].gender;
            inputText.value = '';
        }
    }
})









// //PARENT NODE ARR
// let arrayData = []; 
// function perentElem() {
// let num = 0; 
// $('#hero_cart').each(function(){ 
//     let oneDiv = $(this);
//     let countSpan = oneDiv.find('p#cardId').length - 1; 
//     let spansData = []; 
//     for(i = 0; i <= countSpan; i++){ 
//         let dataSpan = oneDiv.find('p#cardId').eq(i).html(); 
//         spansData[i] = dataSpan; 
//     }
//     arrayData[num] = spansData; 
//     num ++; 
// });
// console.log(arrayData)
// }