var listaMenu = document.getElementById('listaMenu')

function Mostrar(){
    listaMenu.classList.add('mostrar');
  }
  function Ocultar(){
    listaMenu.classList.remove('mostrar');
  }

  function Mostrar_Ocultar(){

   if(listaMenu.classList != "mostrar"){
    Mostrar()
    console.log('mostrar')
    console.log(listaMenu.classList)
   } else if(listaMenu.classList = "mostrar"){
    console.log('ocultar')
    console.log(listaMenu.classList)
    Ocultar()
   }
}