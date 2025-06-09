// Quando o formulário for enviado
document.getElementById("form-cadastro").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita recarregar a página

  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  var usuario = {
    nome: nome,
    email: email,
    senha: senha
  };

  // Salva no localStorage como texto JSON
  localStorage.setItem("usuario", JSON.stringify(usuario));

  // Limpa o formulário
  this.reset();

  // Atualiza a exibição dos dados na página
  mostrarDados();
});

// Função para mostrar os dados do usuário na tela
function mostrarDados() {
  var usuarioSalvo = localStorage.getItem("usuario");

  if (usuarioSalvo) {
    var usuario = JSON.parse(usuarioSalvo);
    var mensagem = `Olá, <strong>${usuario.nome}</strong>! Seu email é <strong>${usuario.email}</strong>.<br><em>Cadastro realizado com sucesso!</em>`;
    document.getElementById("resultado").innerHTML = mensagem;
  } else {
    document.getElementById("resultado").innerHTML = "";
  }
}

// Chama mostrarDados quando a página carregar para exibir dados se já existir
window.onload = function() {
  mostrarDados();
};