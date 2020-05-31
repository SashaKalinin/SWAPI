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



sendRequest('GET', requestURL)
    .then(data => generateData(data.results))
    .catch(err => console.log(err))

    // let array = [];
    // let str = 'star';
    // let spliter = str.split('');
    // spliter.forEach((item) => array.push(item))
    // console.log(array)

function generateData(data) {
    for (let item of data) {
        arr.push(item);
            heroCart.innerHTML +=
                `<div class="cart" data-toggle="modal" data-target="#exampleModal">
                 <p class="p_text" id="cardId">${item.name}</p>
            </div>`
        
    }
}







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



inputText.addEventListener('keydown', function () {
    sendRequest('GET', requestURL)
        .then(data => generateData(data.results))
        .catch(err => console.log(err))
})
