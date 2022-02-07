async function getJoke() {
    let joke;
    const data = await fetch("https://catfact.ninja/fact");
    const json = await data.json();
    joke = json.fact;

    if (joke) {
        document.getElementById("facts").innerHTML = joke;
        console.log()
    }
}

getJoke();

async function getDog() {
    let dog;
    const data = await fetch("https://catfact.ninja/fact");
    const json = await data.json();
    joke = json.dog;

    if (joke) {
        document.getElementById("dog").innerHTML = joke;
        console.log()
    }
}

getDog();

async function getJoke() {
    let joke;
    const data = await fetch("https://catfact.ninja/fact");
    const json = await data.json();
    joke = json.fact;

    if (joke) {
        document.getElementById("facts").innerHTML = joke;
        console.log()
    }
}

getJoke();
















