const id_pokemon = +window.location.href.split('?id=')[1];

const url_endPoint = 'https://pokeapi.co/api/v2/pokemon';

const pokemonContainer = document.querySelector('.pokemon-detail');

function mostrarDetalle(pokemon){
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const number = document.createElement('p')
    number.classList.add('num')
    number.innerText = `#${pokemon.id}`; 

    const name = document.createElement('p');
    name.classList.add('name');
    name.innerText = pokemon.name;

    const spriteContainer =document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const tipo = document.createElement('p');
    tipo.classList.add('tipo');
    tipo.innerText = `Tipo: ${pokemon.types[0].type.name}`;

    const habilidad = document.createElement('p');
    habilidad.innerText = `Habilidad: ${pokemon.abilities[0].ability.name}`;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(habilidad);
    card.appendChild(tipo);
    
    

    pokemonContainer.appendChild(card);
}

function mostrarPokemonPorId(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((result) => result.json())
    .then((data) => {
        mostrarDetalle(data);
        guardarEnHistorial(id); 
    });
}