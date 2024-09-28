let email = document.querySelector('.email').value;
let pass = document.querySelector('.password').value;


function acessar() {
    if(email == "admin@teste.com" & pass == "admin") {
        console.log("Você acessou!");
    } else {
        console.log("Acesso negado!")
    }
}


