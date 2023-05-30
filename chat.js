/**
 * Chatlab - Conceitos de array/object em Javascript.
 * 
 * Implemente as funções a partir daqui.
 */

// Exemplo: function minhaFuncao() { ... }
// arquivo chat.js

// array para amrmazenar as mensagens
var listaMensagens=[];

// função para adicionar uma mensagem ao array
function adicionarMensagem(apelido,mensagem){
  listaMensagens.push({
    "apelido":apelido,
    "mensagem":mensagem
  });
}

//função para formatar as mensagens HTML
function formatarMensagens(){
  var HTML="";
  for (var i= 0;i <listaMensagens.length; i++){
    var mensagem =listaMensagens[i];
    html +=' <div class="chat-message">';
    html +=' <span class="chat-message-apelido">'+
    mensagem.mensagem + '</span>';
    html += '</div>';
  }
  return html;
}

//Função para atualizar o conteúdo da div com as mensagens formatdas
function atualizarHTML (){
  var chatmessagesdiv =
  document.getElementById('chat-messages');
  chatmessagesdiv.innerhtml =formatarMensagens();
}

//função para lidar com o clique no botão de adicionar
mensagem
function commitMessageClickHandler(){
  var messageinput=
  document.getelementbyld('message-input');
  if (mensagem!==""){
    adicionarMensagem("seu Apelido",mensagem);
    messageinput.value="";
    atualizarHTML();
  }
}

// Adiciona o evento de clique ao botão de adicionar
mensagem
var messagecommitbutton=
document,getElementById('message-commit');
messagecommitbutton.addEventListener('click',commitMessageClickHandler);

  


// --------------------------------
// Não remover estas linhas
// --------------------------------
module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
};
// --------------------------------