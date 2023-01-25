import { heroi } from "./carregaResultado.js";
import { lista } from "./inseri.js";
export function telaForteContra(){
    if(heroi.fortecontra==null) return
    const div = document.querySelector('.container')
    const container = document.createElement('div');
    container.setAttribute('class','sobretela');
    const section = document.createElement('section');
    section.setAttribute('class','sobretela');
    const sair = document.createElement('img');
    sair.setAttribute('class','sobretela');
    sair.setAttribute('src','public/img/sair.png')
    sair.setAttribute('name','sair')
    sair.setAttribute('class','sobretela2');
    container.setAttribute('class','fortecontra')
    div.appendChild(section);
    section.appendChild(container)
  
    //------criacao do container vvvvvvv
    const h1 = document.createElement('h1')
    h1.setAttribute('class','sobretela');
    h1.innerHTML='forte contra'
    container.appendChild(sair)
    container.appendChild(h1)
  
  
  for(let i=0;i<heroi.fortecontra.length;i++)
    for(let c=0;c<lista.length;c++){
      if(lista[c].nome===heroi.fortecontra[i]){
        const img = document.createElement('img');
        const a = document.createElement('a');
        a.setAttribute('href',lista[c].url)
        img.setAttribute('src',lista[c].url)
        a.appendChild(img)
        container.appendChild(a);
      }else{
  
      }
    }
  }