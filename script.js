class MobileNavbar{
    constructor(mobileMenu,navList,navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }
    animateLinks(){
        this.navLinks.forEach((link,index) => {
            
            link.style.animation 
            ? (link.style.animation ="") 
            : (link.style.animation = `navLinkFade 0.7s ease forwards ${index / 7}s`);
        });
    }
    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks(this.activeClass);
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click",this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent(); 
        }
      return this; 
    }
}
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

// Efeito digitação hello world
function typeWrite(sinalMenor, elemento, sinalMaior) {
    menor = sinalMenor.innerHTML.split();
    maior = sinalMaior.innerHTML.split();
    sinalMenor.innerHTML = " ";
    sinalMaior.innerHTML = " ";
    const textoArray = elemento.innerHTML.split("");
    const textoFinal = menor.concat(" ", textoArray).concat(" ", maior);
    elemento.innerHTML = " ";
    textoFinal.forEach(function (letra, i) {
        setTimeout(function () {
            elemento.innerHTML += letra;
         }, 100 * i);
    });
}
const titulo = document.querySelector(".titulo-principal");
const sinalMenor = document.querySelector(".sinal-menor");
const sinalMaior = document.querySelector(".sinal-maior");
typeWrite(sinalMenor, titulo, sinalMaior);

// scroll
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  const target = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate';
  
  function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3 / 4));
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    })
  }
  
  animeScroll();
  
  if(target.length) {
    window.addEventListener('scroll', debounce(function() {
      animeScroll();
    }, 300));
  }





  
  var balls = document.querySelector('.balls')
  var quant = document.querySelectorAll('.slides .imagens')
  var atual = 0
  var imagem = document.getElementById('atual')
  var next = document.getElementById('right')
  var back = document.getElementById('left')
  var rolar = true
  for(let i=0; i<quant.length;i++){
    var div = document.createElement('div')
    div.id = i
    balls.appendChild(div)
  }
  document.getElementById('0').classList.add('img-atual') 

  var pos = document.querySelectorAll('.balls div')

  for(let i=0; i<pos.length; i++){
   pos[i].addEventListener('click',function(){
     atual = pos[i].id
     rolar = false
     slide()
   })
  }
back.addEventListener('click',()=>{
  atual--
  rolar = false
  slide()
})
next.addEventListener('click',()=>{
  atual++
  rolar = false
  slide()
})


/*----------------*/

var divh = document.getElementById('atual').offsetWidth;
   

function slide(){
  if(atual >= quant.length){
    atual = 0
  }else if(atual < 0){
    atual = quant.length - 1
  }
  document.querySelector('.img-atual').classList.remove('img-atual')
  imagem.style.marginLeft =-divh*atual+'px'
  document.getElementById(atual).classList.add('img-atual')
}
setInterval(()=>{
  if(rolar){
    atual++
    slide()
  }else{
    rolar = true
  }
},4000)



