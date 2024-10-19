import { auth, onGetPosts } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import './registrar.js'
import './ingresar.js'
import './salir.js'
import './loginCheck.js'
import './postList.js'
import { loginCheck } from "./loginCheck.js";
import { setupPosts } from "./postList.js";
import { savePost, getPost } from "./firebase.js";

onAuthStateChanged(auth, async(user)=>{
    if(user){
        loginCheck(user);
        const correo = user.email;
        try{
            //const mensaje = "Iniciaste sesion";
            //setupPosts(mensaje);
            const taskForm = document.getElementById("task-form");
            taskForm.addEventListener("submit", (e)=>{
                e.preventDefault();
                const title = taskForm["task-title"].value;
                const description = taskForm["task-description"].value;
                savePost(title,description,correo);
                taskForm.reset();
            })
        }catch(error){
            console.log(error);
        }
        const querySnapshot = await getPost();
        const tasksContainer = document.getElementById("tasks-container");

        onGetPosts((querySnapshot) => {
            let html = '';
            querySnapshot.forEach(doc => {
                const post = doc.data();
                if(post.userMail == correo){
                    html += `
                        <li class="list-group-item list-group-item-action mt-2">
                            <h5>${post.title}</h5>
                            <p>${post.description}</p>
                            <div>
                                <button class="btn btn-primary btn-delete">Borrar</button>
                                <button class="btn btn-secondary btn-edit">Editar</button>
                            </div>
                    `;
                }
            })
            tasksContainer.innerHTML = html
        })
    }else{
        //const mensaje = "";
        //setupPosts(mensaje);
        loginCheck(user);
        const tasksContainer = document.getElementById("tasks-container");
        tasksContainer.innerHTML = '<h3>Inicia sesión para ver las publicaciones</h3>'
    }
})

