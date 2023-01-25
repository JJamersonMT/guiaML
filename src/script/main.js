import {inseri} from './inseri.js';
import {verificaClick} from './verifiaClick.js'

fetch('src/script/hero.json')
  .then(resposta=>resposta.json())
  .then(array=>inseri(array))
  .catch(erro=>console.log(`infelismente ocorreu um erro: ${erro}`));

document.addEventListener('click',e=>{
  verificaClick(e)
});