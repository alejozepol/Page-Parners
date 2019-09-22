var listaMenu = document.getElementById('listaMenu')

function Mostrar(){
    listaMenu.classList.add('mostrar');
    header.className ='header--bg'
  }
  function Ocultar(){
    listaMenu.classList.remove('mostrar');
    bgHeader()
  }

  function Mostrar_Ocultar(){

   if(listaMenu.classList != "mostrar"){
    Mostrar()
   } else if(listaMenu.classList = "mostrar"){
    Ocultar()
   }
}

const header = document.getElementById('header')


var bgHeader = () =>{

if (window.scrollY >=20) {
  header.className ='header--bg'
} else{
  header.className =''
}


}

window.onscroll = function() {this.bgHeader()};