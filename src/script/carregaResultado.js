import { criaTela } from "./criaTela.js";
export let heroi
export function carregaResultado(array,src){

    array.map(function(hero){
  
      if(hero.url===src){
        heroi = hero
        console.log(heroi)
        criaTela(hero);
  
      }
    })
  }
