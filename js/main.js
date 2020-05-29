

fetch("https://swapi.dev/api/people/")
.then(response => console.log(response.json()))
.then(count => console.log(count))

