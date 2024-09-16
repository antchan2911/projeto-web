document.getElementById("enviar_formulario").addEventListener('click', verificar)
function verificar() {
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var celular = document.getElementById("celular").value
    if (nome == '' || email == '' || celular == '') {
        alert('PREENCHA TODOS OS CAMPOS')
        if (nome == '') {
            document.getElementById('nome').style.backgroundColor = "rgba(255, 121, 121, 1)"
        }
        if (email == '') {
            document.getElementById('email').style.backgroundColor = "rgba(255, 121, 121, 1)"
        }
        if (celular == '') {
            document.getElementById('celular').style.backgroundColor = "rgba(255, 121, 121, 1)"
        }
    } else {
        alert('INSCRIÇÃO CONFIRMADA! EM BREVE ENTREGAREMOS SEU MATERIAL :)')
        window.location.replace("index.html")
    }
}   