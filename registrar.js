import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { auth } from "./firebase.js";
import { mostrarMensaje } from "./mostrarMensajes.js";

const registrarForm = document.getElementById("registrar-form");

registrarForm.addEventListener("submit", async(e)=>{
    e.preventDefault();
    const email = registrarForm["registrar-email"].value;
    const password = registrarForm["registrar-password"].value;

    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        const RegistrarModal = document.getElementById("RegistrarModal");
        const modal = bootstrap.Modal.getInstance(RegistrarModal);
        modal.hide();

        registrarForm.reset();
        mostrarMensaje("Bienvenido "+ userCredential.user.email);
    }catch{
        console.log("error");
    }
})