const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

export const loginCheck = (user) => {
    if(user){//Se ha iniciado sesión
        loggedInLinks.forEach((link) => (link.style.display = "block"));//Visible(SALIR)
        loggedOutLinks.forEach((link) => (link.style.display = "none"));//No se debe ver(INGRESAR/REGISTRAR)
    }else{//No se inició sesión
        loggedInLinks.forEach((link) => (link.style.display = "none"));//No se debe ver(SALIR)
        loggedOutLinks.forEach((link) => (link.style.display = "block"));//Visible(INGRESAR/REGISTRAR)
    }
}