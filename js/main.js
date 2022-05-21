//Example fetch using pokemonapi.co
// their moves, abilities, types, egg groups

let poke1 = document.querySelector('#poke1')
let poke2 = document.querySelector('#poke2')


document.DOM_Content_Loaded = loadSelections()

function loadSelections() {
  const url = 'https://pokeapi.co/api/v2/pokemon/'

  fetch(url) // fetch all pokemon
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      
      const poke1List = data.results.map(poke => poke.name) // get all pokemon names
      const poke2List = data.results.map(poke => poke.name) // get all pokemon names

      let optionsPoke1 = poke1.querySelectorAll('#option-poke1')
      let optionsPoke2 = poke2.querySelectorAll('#option-poke2')

      optionsPoke1 = poke1List.map(poke1 => `<option value="${poke1}">${poke1}</option>`).join('\n')
      poke1.innerHTML = optionsPoke1

      optionsPoke2 = poke2List.map(poke2 => `<option value="${poke2}">${poke2}</option>`).join('\n')
      poke2.innerHTML = optionsPoke2
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  
  selectPoke1 = document.querySelector('#poke1')
  choice1 = selectPoke1.value
  selectPoke2 = document.querySelector('#poke2')
  choice2 = selectPoke2.value

  const url = `https://pokeapi.co/api/v2/pokemon/${choice1}`

  const url2 = `https://pokeapi.co/api/v2/pokemon/${choice2}/`
  let pokeStore = []
  let pokeImg = []

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('.card-container').classList.remove('hidden')
        pokeStore.push(data.types[0].type.name)
        pokeImg.push(data.sprites.front_default)

        document.querySelector('#pokeImg1').src = pokeImg[0]
        document.querySelector('.poke1Name').innerText = choice1.toUpperCase()
        document.querySelector('.poke1Type').innerText = data.types[0].type.name
        
        fetch(url2)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          pokeStore.push(data.types[0].type.name)
          pokeImg.push(data.sprites.front_default)

          document.querySelector('#pokeImg2').src = pokeImg[1]
          document.querySelector('.poke2Name').innerText = choice2.toUpperCase()
          document.querySelector('.poke2Type').innerText = data.types[0].type.name
        })
        .catch(err => {
            console.log(`error ${err}`)
        });


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
 
}