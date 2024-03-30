//fetchdata();

async function fetchdata(){
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok)
        {
        throw new Error("unable to fetch data");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;

    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
    imgElement.style.blockSize= "200px";
}
catch(error)
{
    console.error(error);
}
}