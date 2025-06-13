function validarEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Mostrar dados só se houver cadastro recente
function mostrarDados() {
  var usuarioSalvo = localStorage.getItem("usuario");

  if (usuarioSalvo && sessionStorage.getItem("mostrarMensagem") === "sim") {
    var usuario = JSON.parse(usuarioSalvo);
    var mensagem = `Olá, <strong>${usuario.nome}</strong>! Seu email é <strong>${usuario.email}</strong>.<br><em>Cadastro realizado com sucesso!</em>`;
    document.getElementById("resultado").innerHTML = mensagem;

    // Limpa a flag para não mostrar novamente se recarregar
    sessionStorage.removeItem("mostrarMensagem");
  } else {
    document.getElementById("resultado").innerHTML = "";
  }
}

document.getElementById("form-cadastro").addEventListener("submit", function(event) {
  event.preventDefault();

  var nome = document.getElementById("nome").value.trim();
  var email = document.getElementById("email").value.trim();
  var senha = document.getElementById("senha").value;

  if (!nome || !email || !senha) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!validarEmail(email)) {
    alert("Por favor, insira um email válido.");
    return;
  }

  var usuario = { nome, email, senha };
  localStorage.setItem("usuario", JSON.stringify(usuario));

  // Define flag para mostrar mensagem depois do cadastro
  sessionStorage.setItem("mostrarMensagem", "sim");

  this.reset();
  mostrarDados();
});

// Ao carregar, chama mostrarDados (mas só mostrará se tiver flag)
window.onload = mostrarDados;
