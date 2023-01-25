import { carregaResultado } from "./carregaResultado.js";

export function carregaPagina(el,heroi){

    let src = el.getAttribute('src');
  
    fetch('src/script/hero.json')
      .then((response)=>{
  
        if(response.status!=200) throw new Error();
  
        return response.json();
  
    })
    .then((array)=>{
  
        carregaResultado(array,src,heroi);
  
    })
    .catch(erro=>{console.error(`erro ocorrido ${erro}`)})
  
  }