

// import {requestURL,heroCart,cardId,exampleModalLable,height,mass,hair,skin,birth,gender,wrapper,inputText} from './variables.js';

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

inputText.addEventListener('focus', async function() {
     swordUp.play();
     swoedSound.play()
})
inputText.addEventListener('blur', function() {
    swoedDown.play();
    swoedSound.pause();
})



//INPUT SERCH
inputText.addEventListener('keydown', function () {
    swoedSound2.play();
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


