export let lista 
export function inseri(array){

    const div = document.querySelector('.heros');
    lista = array
    console.log(`lista : ${lista}`)
    array.map(function(hero){
  
      const img = document.createElement('img');
      const a = document.createElement('a');
  
      a.setAttribute('href',hero.url)
      a.setAttribute('id','principal')
  
      img.setAttribute('src',hero.url)
      img.setAttribute('id','principal')
  
      a.appendChild(img)
      div.appendChild(a);
    })
  }