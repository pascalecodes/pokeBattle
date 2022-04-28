//Example fetch using pokemonapi.co
//pokemon effectiveness https://www.eurogamer.net/pokemon-go-type-chart-effectiveness-weaknesses

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const poke1 = (document.querySelector('#poke1').value).toLowerCase()
  const poke2 = (document.querySelector('#poke2').value).toLowerCase()
  console.log(poke1)
  console.log(poke2)
  const url = `https://pokeapi.co/api/v2/pokemon/${poke1}`
  const url2 = `https://pokeapi.co/api/v2/pokemon/${poke2}`
  let pokeStore = []
  let pokeImg = []

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        pokeStore.push(data.types[0].type.name)
        pokeImg.push(data.sprites.front_shiny)
        console.log(data.types[0].type.name)
        console.log(data.sprites.front_shiny)
        
        fetch(url2)
        .then(res => res.json()) // parse response as JSON
        .then(data => {

          pokeStore.push(data.types[0].type.name)
          pokeImg.push(data.sprites.front_shiny)
          console.log(data.types[0].type.name)
          console.log(data.sprites.front_shiny)
      
          if((pokeStore[0] === 'grass') && ((pokeStore[1] === 'water') || (pokeStore[1] === 'rock') || (pokeStore[1] === 'ground'))){
            document.querySelector('#pokeImg1').src = pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            document.querySelector('h2').innerText = " 2x Super-Effective > "
          }else if((pokeStore[0] === 'electric') && ((pokeStore[1] === 'flying') || (pokeStore[1] === 'water') )){
            document.querySelector('#pokeImg1').src= pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            document.querySelector('h2').innerText = " 2x Super-Effective > "
          }else if((pokeStore[0] === 'psychic') && ((pokeStore[1] === 'fighting') || (pokeStore[1] === 'poison') )){
            document.querySelector('#pokeImg1').src= pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            document.querySelector('h2').innerText = " 2x Super-Effective > "
          }else if((pokeStore[0] === 'ice') && ((pokeStore[1] === 'flying') || (pokeStore[1] === 'ground') || (pokeStore[1] === 'grass') || (pokeStore[1] === 'dragon'))){
            document.querySelector('#pokeImg1').src= pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            document.querySelector('h2').innerText = " 2x Super-Effective > "
          }else if((pokeStore[0] === 'dragon') && ((pokeStore[1] === 'dragon'))){
            document.querySelector('#pokeImg1').src= pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            document.querySelector('h2').innerText = " 2x Super-Effective > "
          }else if((pokeStore[0] === 'fairy') && ((pokeStore[1] === 'fighting') || (pokeStore[1] === 'dragon') || (pokeStore[1] === 'dark'))){
            document.querySelector('#pokeImg1').src= pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            document.querySelector('h2').innerText = " 2x Super-Effective > "
          }else if((pokeStore[0] === 'dark') && ((pokeStore[1] === 'ghost') || (pokeStore[1] === 'psychic') )){
            document.querySelector('#pokeImg1').src= pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            document.querySelector('h2').innerText = " 2x Super-Effective > "
          }else if((pokeStore[0] === 'fighting') && ((pokeStore[1] === 'normal') || (pokeStore[1] === 'rock')|| (pokeStore[1] === 'steel') || (pokeStore[1] === 'ice') || (pokeStore[1] === 'dark'))){
            document.querySelector('#pokeImg1').src= pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            document.querySelector('h2').innerText = " 2x Super-Effective > "
          }else if((pokeStore[0] === 'flying') && ((pokeStore[1] === 'fighting') || (pokeStore[1] === 'bug') || (pokeStore[1] === 'grass'))){
            document.querySelector('#pokeImg1').src= pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            document.querySelector('h2').innerText = " 2x Super-Effective > "
          }else if((pokeStore[0] === 'poison') && ((pokeStore[1] === 'grass') || (pokeStore[1] === 'fairy') )){
            document.querySelector('#pokeImg1').src= pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            document.querySelector('h2').innerText = " 2x Super-Effective > "
          }else if((pokeStore[0] === 'ground') && ((pokeStore[1] === 'poison') || (pokeStore[1] === 'rock')|| (pokeStore[1] === 'steel') || (pokeStore[1] === 'fire') || (pokeStore[1] === 'electric'))){
            document.querySelector('#pokeImg1').src= pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            document.querySelector('h2').innerText = " 2x Super-Effective > "
          }else if((pokeStore[0] === 'rock') && ((pokeStore[1] === 'flying') || (pokeStore[1] === 'bug') || (pokeStore[1] === 'fire')|| (pokeStore[1] === 'ice'))){
            document.querySelector('#pokeImg1').src= pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            document.querySelector('h2').innerText = " 2x Super-Effective > "
          }else if((pokeStore[0] === 'bug') && ((pokeStore[1] === 'grass') || (pokeStore[1] === 'psychic') || (pokeStore[1] === 'dark'))){
            document.querySelector('#pokeImg1').src= pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            document.querySelector('h2').innerText = " 2x Super-Effective > "
          }else if((pokeStore[0] === 'ghost') && ((pokeStore[1] === 'ghost') || (pokeStore[1] === 'psychic') )){
            document.querySelector('#pokeImg1').src= pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            document.querySelector('h2').innerText = " 2x Super-Effective > "
          }else if((pokeStore[0] === 'steel') && ((pokeStore[1] === 'rock') || (pokeStore[1] === 'ice') || (pokeStore[1] === 'fairy'))){
            document.querySelector('#pokeImg1').src= pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            document.querySelector('h2').innerText = " 2x Super-Effective > "
          }else if((pokeStore[0] === 'fire') && ((pokeStore[1] === 'bug') || (pokeStore[1] === 'steel') || (pokeStore[1] === 'grass')|| (pokeStore[1] === 'ice'))){
            document.querySelector('#pokeImg1').src= pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            document.querySelector('h2').innerText = " 2x Super-Effective > "
          }else if((pokeStore[0] === 'water') && ((pokeStore[1] === 'ground') || (pokeStore[1] === 'rock') || (pokeStore[1] === 'fire'))){
            document.querySelector('#pokeImg1').src= pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            document.querySelector('h2').innerText = " 2x Super-Effective > "
          }else{
            document.querySelector('#pokeImg1').src= pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            document.querySelector('h2').innerText = "NORMAL "
          }

        })
        .catch(err => {
            console.log(`error ${err}`)
        });


      })
      .catch(err => {
          console.log(`error ${err}`)
      });



      
}

//2x effective= Strong Against= SuperEffective
//default Normal
//can work on adding different effectivness levels between 2x and normal