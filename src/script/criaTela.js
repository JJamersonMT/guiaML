export function criaTela(hero){
    //---------telaSobre-----------------------------
    const container = document.querySelector('.container');
    const painel = document.createElement('div');
    painel.setAttribute('class','sobretela');
    painel.setAttribute('class','painel')
    painel.setAttribute('style',`background-image:url(${hero.url});`)
    const div = document.createElement('div');
    div.appendChild(painel)
    div.setAttribute('class','sobretela');
    const section = document.createElement('section');
  
    section.setAttribute('class','sobretela');
    const h1 = document.createElement('h1');
    h1.setAttribute('class','sobretela');
    const b = document.createElement('button');
    b.innerHTML='forte contra'
    const b2 = document.createElement('button');
    b2.innerHTML='fraco contra'
    const img = document.createElement('img');
    img.setAttribute('class','sobretela');
    const a = document.createElement('a');
    a.setAttribute('class','sobretela');
    a.setAttribute('href','/')
    h1.innerHTML = hero.nome;
    img.setAttribute('src','public/img/sair.png')
    img.setAttribute('name','sair')
    div.setAttribute('class','sobre');
    const botoes = document.createElement('div');
    botoes.setAttribute('class','botoes');
  
    div.appendChild(h1)
    div.appendChild(a)
    a.appendChild(img)
    section.appendChild(div)
    container.appendChild(section);
    div.appendChild(botoes)
    botoes.appendChild(b)
    botoes.appendChild(b2)
  
     //---------telaSobre-----------------------------
  }