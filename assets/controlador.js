let NombresUsuario=document.getElementById("NOMBRE")
let CorreoUsuario=document.getElementById("CORREO")
let TelefonoUsuario=document.getElementById("TELEFONO")
let BotonEnvio=document.getElementById("BotonFormulario")

//vamos a escuchar el clic en el botón
BotonEnvio.addEventListener("click",function(evento){
    evento.preventDefault()
     let Nombres=NombresUsuario.value
     let CORREO=CorreoUsuario.value
     let TELEFONO=TelefonoUsuario.value
     console.log(Nombres,CORREO,TELEFONO)

    let errores=[]

     if(!Nombres){
        errores.push("error en el nombre")
        NombresUsuario.classList.add("is-invalid")
     }
     if(!CORREO){
        errores.push("error en el correo")

        CorreoUsuario.classList.add("is-invalid")
     }
     if(!TELEFONO){
        errores.push("error en el telefono")
        TelefonoUsuario.classList.add("is-invalid")
     }
     if (errores.length>0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })

          

     }else{
        Swal.fire(
            'mucha suerte!',
            'Provecho!',
            'success'
          )
          // preguntando si tengo datos en memoria
          let datosMemoria=JSON.parse(localStorage.getItem("datosMemoria"))
          let reservas
         if(datosMemoria==null){
            reservas=[]

         }else{
            reservas=datosMemoria
         }


        let reserva = {
            Nombres,
            CORREO,
            TELEFONO
         }
          
         reservas.push(reserva)
         localStorage.setItem("datosMemoria",JSON.stringify(reservas))
     }
     
})




