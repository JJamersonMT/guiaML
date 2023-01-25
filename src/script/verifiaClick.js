import { telaForteContra } from "./telaForteContra.js";
import { telaFracoContra } from "./telaFracoContra.js";
import { carregaPagina } from "./carregaPagina.js";
import { lista } from "./inseri.js";
export function verificaClick(e,heroi){

    const el = e.target;
    const tag = el.tagName.toLowerCase();
    const name = el.getAttribute('name')
  
    if((tag==='img')&&(name!='sair')){
      document.querySelectorAll('.sobretela').forEach(e => e.remove());
      e.preventDefault();
      carregaPagina(el,heroi)
  
    }
    else if((tag==='img')&&(name==='sair')){
      document.querySelectorAll('.sobretela').forEach(e => e.remove());
      e.preventDefault()
  
    }else if((tag==='button')&&(el.innerHTML==='forte contra')){
  
      document.querySelectorAll('.sobretela').forEach(e => e.remove());
      console.log(heroi)
      telaForteContra(heroi)
  
  
    }else if((tag==='button')&&(el.innerHTML==='fraco contra')){
  
      document.querySelectorAll('.sobretela').forEach(e => e.remove());
      telaFracoContra(heroi)
  
    }else if((tag==='li')){
      document.querySelectorAll('.sobretela').forEach(e => e.remove());
      document.querySelectorAll('#principal').forEach(e => e.remove());
      e.preventDefault()
      lista.map(heroi=>{
        if((heroi.classe===el.innerHTML)||(heroi.classes===el.innerHTML)){
          const div = document.querySelector('.heros');
          const img = document.createElement('img');
          const a = document.createElement('a');
  
          a.setAttribute('href',heroi.url)
          a.setAttribute('id','principal')
  
          img.setAttribute('src',heroi.url)
          img.setAttribute('id','principal')
  
          a.appendChild(img)
          div.appendChild(a);
  
        }else if(el.innerHTML==='todos'){
          const div = document.querySelector('.heros');
          const img = document.createElement('img');
          const a = document.createElement('a');
  
          a.setAttribute('href',heroi.url)
          a.setAttribute('id','principal')
  
          img.setAttribute('src',heroi.url)
          img.setAttribute('id','principal')
  
          a.appendChild(img)
          div.appendChild(a);
        }
      })
  
    }
    else{
  
      e.preventDefault();
  
    }
  }