



function logar() {
    let email = document.querySelector('.email').value;
    let pass = document.querySelector('.password').value;

    if(email == "admin@teste.com" && pass == "admin") {
        alert("Você acessou!");
        window.location.href = "./pages/loja.html";
    } else {
        alert("Acesso negado!");
    }
};


