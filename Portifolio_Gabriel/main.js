//Efeito Maquina de Escrever
const titulo = document.querySelector('.paragrafo')

function escreverAuto (e) {
  const textoArray = e.innerHTML.split((''));
  e.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => e.innerHTML += letra, 50 * i);
   }) 
  }

    escreverAuto(titulo)

    

// Fetch-Axios

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute('href');
  const response = await fetch(href);

  if(response.status !== 200) throw new Error('ERRO 404!');
  
  const html = await response.text();
  carregaResultado(html);
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  const resultadoDois = document.querySelector('.resultado-dois');
  const resultadoTres = document.querySelector('.resultado-tres');
  const resultadoQuatro = document.querySelector('.resultado-quatro');
  resultado.innerHTML = response;
  resultadoDois.innerHTML = response;
  resultadoTres.innerHTML = response;
  resultadoQuatro.innerHTML = response;
}

//EFEITO SCROLLREVEAL

window.sr = ScrollReveal({ reset: true });

sr.reveal('.boxs', {
  rotate: { x: 0, y: 90, z: 0,},
  duration: 2000
})
sr.reveal('i', {
  rotate: { x: 100, y: 0, z: 100,},
  duration: 3000
});