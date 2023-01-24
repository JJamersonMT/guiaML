fetch('src/script/hero.json')
  .then(resposta=>resposta.json())
  .then(array=>inseri(array))
  .catch(erro=>console.log(`infelismente ocorreu um erro: ${erro}`));

// VVVVVVVVVVVVVVVVV---------------- FUNCOES DE CRIACAO DE TELAS------------------------VVVVVVVVVVVVV

let lista;

function inseri(array){

  const div = document.querySelector('.heros');
  lista = array
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
let heroi;
function criaTela(hero){
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
function telaForteContra(heroi){
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
//---------------------fraco contra----------------------------
function telaFracoContra(heroi){
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


for(let i=0;i<heroi.fracocontra.length;i++)
  for(let c=0;c<lista.length;c++){
    if(lista[c].nome===heroi.fracocontra[i]){
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
// ^^^^^^^^^^^^^^---------------- FUNCOES DE CRIACAO DE TELAS------------------------^^^^^
document.addEventListener('click', e =>{

  const el = e.target;
  const tag = el.tagName.toLowerCase();
  const name = el.getAttribute('name')

  if((tag==='img')&&(name!='sair')){
    document.querySelectorAll('.sobretela').forEach(e => e.remove());
    e.preventDefault();
    carregaPagina(el)

  }
  else if((tag==='img')&&(name==='sair')){
    document.querySelectorAll('.sobretela').forEach(e => e.remove());
    e.preventDefault()

  }else if((tag==='button')&&(el.innerHTML==='forte contra')){

    document.querySelectorAll('.sobretela').forEach(e => e.remove());
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
});

function carregaResultado(array,src){

  array.map(function(hero){

    if(hero.url===src){
      heroi = hero
      criaTela(hero);

    }
  })
}
async function carregaPagina(el){

  let src = await el.getAttribute('src');

  fetch('src/script/hero.json')
    .then((response)=>{

      if(response.status!=200) throw new Error();

      return response.json();

  })
  .then((array)=>{

      carregaResultado(array,src);

  })
  .catch(erro=>{console.error(`erro ocorrido ${erro}`)})

}
