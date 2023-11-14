const joke = document.getElementById('joke');
const jokeButton = document.getElementById('button');

const apiKey = 'fmegL9X+vlVIrygW8ssJcg==CCjp5G8QteFxZAlH'
const apiURL= 'https://api.api-ninjas.com/v1/dadjokes?limit=1'


const options = {
    method: 'GET',
    headers:{
       'X-Api-Key': apiKey
    }
}

async function getJoke(){


    try{
        joke.textContent = 'Updating...';
        jokeButton.textContent = 'Loading...';
        jokeButton.disabled = true;
    
        const respons = await fetch(apiURL, options);
        const data = await respons.json();
    
        jokeButton.disabled = false;
        jokeButton.textContent = 'Tell me a JOKE';
        joke.textContent = data[0].joke;    
    }catch (error){
        joke.textContent = 'Try Again Later...'

        jokeButton.disabled = false;
        jokeButton.textContent = 'Tell me a JOKE';
    }

}

jokeButton.addEventListener('click', getJoke)