import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import './registrar.js'
import './ingresar.js'
import './salir.js'
import './loginCheck.js'

onAuthStateChanged(auth, async(user)=>{
    if(user){
        try{
            const mensaje="iniciaste sesion";
            console.log(mensaje);
        }catch(error){
            console.log(error);
        }
    }
})